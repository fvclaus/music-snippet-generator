import { SVG, Svg, off } from '@svgdotjs/svg.js'
import { MdlListener } from './antlr4/MdlListener';
import { MdlLexer } from './antlr4/MdlLexer';
import { MdlParser } from './antlr4/MdlParser';
import { PitchContext } from './antlr4/MdlParser';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import wholeNote from '!!raw-loader!../assets/whole_note.svg';
import trebleClef from '!!raw-loader!../assets/treble_clef.svg';
 
declare var window: Window;

type Pitch = string;


export class SyntaxError extends Error {

}

export class SyntaxErrors extends Error {
  constructor(public syntaxErrors: SyntaxError[]) {
    super("Parsing failed")
  }
}

const notes =  ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

function generatePitchSequence(start: Pitch, stop: Pitch): Pitch[] {
  let pitchClass = parseInt(start.substr(1), 10)
  let index = notes.indexOf(start[0]);
  const pitchSequence = []
  let currentPitch

  do {            
    const currentNode = notes[index];
    if (currentNode === 'C') {
      pitchClass++
    }
    currentPitch  = `${currentNode}${pitchClass}`;
    pitchSequence.push(currentPitch);
    if (index === (notes.length -1)) {
      index = 0;
    } else {
      index++;
    }
  } while (currentPitch !== stop)
  return pitchSequence;
}


const possiblePitches = generatePitchSequence("B-1", "B7").reverse();

interface MusicSymbolInformation {
  scale: number,
  width: number
}

export class Generator {

  private marginVertical = 5
  private marginHorizontal = 10
  private width = 400
  private height = 200
  private staffLineWidth = 1;
  private staffLineStrokeProperties = {width: this.staffLineWidth, color: "black"};
  
  public MusicSvg = class {
    private contentBeginX = this.superThis.marginHorizontal
    private contentEndX = this.superThis.width - 2 * this.superThis.marginHorizontal
    private pitchesWithStaffLines: Pitch[];
    private musicSymbolToInformation: Map<string, MusicSymbolInformation> = new Map();
    private pitchToOffset: Map<Pitch, number>
    private pitchToRequiresLedgerLine: {[key in Pitch]: boolean}
    private spaceBetweenLines: number;
    private xOffset: number = 0;

    constructor(private superThis: Generator, private draw: Svg, private height:number, private marginVertical: number, private staffLineWidth: number, private pitchRange: Pitch[],
      private pitchOffsetPercent: number, private barlineContentOffset: number) {
      this.xOffset = this.contentBeginX
    }
  
    public drawStaff(pitches: Pitch[]) {
      this.pitchesWithStaffLines = pitches;
      this.calculateSpaceBetweenLines();
      this.calculatePitchToOffset();
      
      this.drawBarLineWithOffset(this.contentBeginX);
      this.xOffset += 5;
      // this.drawBarLineWithOffset(this.contentEndX);
    }

    public drawTrebleClef() {
      const information = this.drawSymbol(trebleClef, 7 * this.spaceBetweenLines, this.xOffset, this.pitchToOffset.get("B4"));
      this.xOffset += 1.5 * information.width
    }

    public drawBarline() {
      this.drawBarLineWithOffset(this.xOffset)
    }
    
    public drawEnterBarOffset() {
      this.xOffset += this.barlineContentOffset
    }

    private drawBarLineWithOffset(offset: number) {
      const pitchOffsetFirst = this.pitchToOffset.get(this.pitchesWithStaffLines[0]);
      const pitchOffsetLast = this.pitchToOffset.get(this.pitchesWithStaffLines[this.pitchesWithStaffLines.length - 1]) + this.staffLineWidth;
      this.draw.line(offset, pitchOffsetFirst, offset, pitchOffsetLast).stroke(this.superThis.staffLineStrokeProperties)
    }
  
    public drawPitch(pitch: Pitch) {
      const offset = this.pitchToOffset.get(pitch);
      // xOffset should be top left not center
      const noteInformation = this.drawSymbol(wholeNote, this.spaceBetweenLines, this.xOffset, offset);
      const isPitchOnStaffLine = this.pitchesWithStaffLines.includes(pitch);
      const offsetBetweenPitches = noteInformation.width * this.pitchOffsetPercent;
      if (!isPitchOnStaffLine && this.doesPitchRequireStaffLine(pitch)) {
        // TODO This ternary is weird
        const lengthLedgerLineFromBorderOfPitch = offsetBetweenPitches * 0.3 > noteInformation.width? noteInformation.width : offsetBetweenPitches * 0.3
        this.draw.line(this.xOffset - lengthLedgerLineFromBorderOfPitch, offset, 
          this.xOffset + noteInformation.width + lengthLedgerLineFromBorderOfPitch, offset)
          .stroke(this.superThis.staffLineStrokeProperties);
      }
      // Note is drawn center, so we must move at least an additional pitch (100%) to achieve the desired offset
      this.xOffset += noteInformation.width  + offsetBetweenPitches;
    }

    public finish() {
      for (const pitch of this.pitchesWithStaffLines) {
        const offset = this.pitchToOffset.get(pitch);
        this.draw.line(this.contentBeginX, offset, this.xOffset , offset).stroke(this.superThis.staffLineStrokeProperties);
      }
    }

    private drawSymbol(symbol: string, targetHeight: number, x: number, y: number): MusicSymbolInformation {
      if (!this.musicSymbolToInformation.has(symbol)) {
        const group = this.draw.group();
        group.svg(symbol);
        const scale = targetHeight / group.height();        
        this.musicSymbolToInformation.set(symbol, {scale, width: scale * group.width()});
        group.remove();
      }

      const information = this.musicSymbolToInformation.get(symbol);
      this.draw.group()
        .svg(symbol)
        .transform({
          position: {
            x: x + information.width / 2, 
            y
          },
          scale: information.scale
        })

      return information;
    }

    private doesPitchRequireStaffLine(pitch: Pitch): boolean {
      const distanceToStaffLines = this.pitchesWithStaffLines
        .map(pitchWithStaffLine => Math.abs(possiblePitches.indexOf(pitch) - possiblePitches.indexOf(pitchWithStaffLine)));
      distanceToStaffLines.sort();
      return distanceToStaffLines[0] % 2 == 0;        
    }

    private calculateSpaceBetweenLines() {
      this.populatePitchToRequiresLedgerLine();
      const numberOfStaffAndLedgerLines = Object.values(this.pitchToRequiresLedgerLine).filter(b => b).length +
        this.pitchesWithStaffLines.length;
      const heightRemainingForSpaceBetweenLines = this.height - 2 * this.marginVertical - numberOfStaffAndLedgerLines * this.staffLineWidth;
      const numberOfSpacesBetweenStaffOrLedgerLines = this.pitchRange.length - numberOfStaffAndLedgerLines;
      this.spaceBetweenLines = heightRemainingForSpaceBetweenLines / numberOfSpacesBetweenStaffOrLedgerLines;
      console.log("spacebetweenlines", this.spaceBetweenLines);
    }

    private populatePitchToRequiresLedgerLine() {
      this.pitchToRequiresLedgerLine = this.pitchRange.reduce((pitchToRequiresLedgerLine, pitch) => {
        pitchToRequiresLedgerLine[pitch] = this.calculateDistanceToNearestStaffline(pitch) % 2 == 0;
        return pitchToRequiresLedgerLine;
      }, {});
    }

    private calculateDistanceToNearestStaffline(pitch) {
      const distanceToTop = Math.abs(
        this.getPitchPosition(this.pitchesWithStaffLines[this.pitchesWithStaffLines.length - 1]) -
        this.getPitchPosition(pitch));
      const distanceToBottom = Math.abs(
        this.getPitchPosition(this.pitchesWithStaffLines[0]) -
        this.getPitchPosition(pitch));
      return Math.min(distanceToBottom, distanceToTop);
    }

    private getPitchPosition(pitch): number {
      return this.pitchRange.indexOf(pitch);
    }

    private calculatePitchToOffset() {
      this.pitchToOffset = this.pitchRange.reduce((pitchToOffset, currentPitch, index) => {
        let offset = pitchToOffset.get(this.pitchRange[index - 1]) || 0
        offset += 0.5 * this.spaceBetweenLines;
        
        if ((index === 0 && this.isPitchOnLedgerOrStaffLine(currentPitch)) || index !== 0) {
          offset += 0.5 * this.staffLineWidth;
        } 

        pitchToOffset.set(currentPitch, offset);
        return pitchToOffset
      }, new Map())
    }

    private isPitchOnLedgerOrStaffLine(pitch: Pitch): boolean {
      return this.pitchToRequiresLedgerLine[pitch] || this.pitchesWithStaffLines.includes(pitch);
    }
  }

  generate(mdl: string): SVGElement {
        const draw = SVG().size(this.width, this.height)
        const document = window.document;
        let container = document.body;
        // Hide SVG if code is run in browser
        if (document.createElement) {
          container = window.document.createElement('div');
          // container.style.display = 'none';
          container.style.visibility = 'hidden';
          window.document.body.appendChild(container);
        }
        container.appendChild(draw.node);
        
        
        const mDraw = new this.MusicSvg(this, draw, this.height, this.marginVertical, this.staffLineWidth, possiblePitches, 1, 5);
        const listener : ParseTreeListener = new class implements MdlListener {
          private currentPitches: Pitch[]

          constructor(marginHorizontal: number) {
          }
          enterTrebleStaff() {
            this.currentPitches = ["E4", "G4", "B4", "D5", "F5"]
            mDraw.drawStaff(this.currentPitches);
            mDraw.drawTrebleClef();
          }
          exitTrebleStaff(){
            mDraw.finish()
          }

          enterBar() {
            mDraw.drawEnterBarOffset();
          }
          
          exitBar() {
            mDraw.drawBarline();
          }

          enterPitch(ctx: PitchContext) {
            const pitchClass = ctx.tryGetToken(MdlParser.PITCH_CLASS, 0);
            let pitch = ctx.NOTE().text;
            pitch += pitchClass.text;
            mDraw.drawPitch(pitch);
          }

          
        }(this.marginHorizontal) as ParseTreeListener;

        try {
          // Create the lexer and parser
          let inputStream = new ANTLRInputStream(mdl);
          let lexer = new MdlLexer(inputStream);
          // Remove console listener.
          lexer.removeErrorListeners();
          let tokenStream = new CommonTokenStream(lexer);
          let parser = new MdlParser(tokenStream);
  
          const exceptions: SyntaxError[] = []
          // Remove console listener
          parser.removeErrorListeners();
          parser.addErrorListener({
            syntaxError(recognizer, offendingSymbol, line, charPositionInLine, msg, e) {
              exceptions.push(new SyntaxError(`Position ${charPositionInLine}: ${msg}`))
            }
          })
   
          // Parse the input, where `compilationUnit` is whatever entry point you defined
          let tree = parser.file();
          if (exceptions.length > 0) {
            throw new SyntaxErrors(exceptions);
          }
          // Create the listener
          // Use the entry point for listeners
          ParseTreeWalker.DEFAULT.walk(listener, tree)
          return draw.node as SVGElement
        } finally {          
          container.removeChild(draw.node);
        }
    }
}