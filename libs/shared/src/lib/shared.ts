import { SVG, Svg } from '@svgdotjs/svg.js'
import { MdlListener } from './grammar/MdlListener';
import { MdlLexer } from './grammar/MdlLexer';
import { MdlParser } from './grammar/MdlParser';
import { PitchContext } from './grammar/MdlParser';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';

import wholeNote from '../assets/whole_note.svg';

console.log(wholeNote);
 
declare var window: any;

type Pitch = string;

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

    constructor(private superThis: Generator, private pitchToOffset: Map<Pitch, number>, private draw: Svg, private spaceBetweenLines: number) {
    }
    drawStaffLine(offset: number) {
      this.draw.line(this.contentBeginX, offset, this.contentEndX , offset).stroke(this.superThis.staffLineStrokeProperties);
    }
  
    drawStaff(pitches: Pitch[]) {
      for (const pitch of pitches) {
        const offset = this.pitchToOffset.get(pitch);
        this.drawStaffLine(offset);
      }
      this.drawBarline(this.contentBeginX, pitches);
      this.drawBarline(this.contentEndX, pitches);
    }

    drawClef(symbol: string, pitch: Pitch) {
      this.draw.text(symbol).x(20).y(this.pitchToOffset.get(pitch)).font("font-size: 20px")
    }

    drawBarline(offset: number, pitches: Pitch[]) {
      const pitchOffsetFirst = this.pitchToOffset.get(pitches[0]);
      const pitchOffsetLast = this.pitchToOffset.get(pitches[pitches.length - 1]);
      this.draw.line(offset, pitchOffsetFirst, offset, pitchOffsetLast).stroke(this.superThis.staffLineStrokeProperties)
    }
  
    drawPitch(pitch: Pitch, x: number) {
      const offset = this.pitchToOffset.get(pitch);
      // this.draw.ellipse(10, this.spaceBetweenLines - this.superThis.staffLineWidth).cx(x).cy(offset);
      this.draw.text("𝅝").x(x).y(offset - 20).font("font-size: 20px");
      this.draw.text("o").x(x).y(offset);
    }
  }

  constructor() {
    if (typeof window === 'undefined') {
      // @ts-ignore
      const {registerWindow}  =  __non_webpack_require__('@svgdotjs/svg.js');
      // @ts-ignore
      const svgWindow = __non_webpack_require__('svgdom');
      registerWindow(svgWindow, svgWindow.document)
    }
  }

  private notes =  ['A', 'B', 'C', 'D', 'E', 'F', 'G'];


  generatePitchSequence(start: Pitch, stop: Pitch): Pitch[] {
    let pitchClass = parseInt(start.substr(1), 10)
    let index = this.notes.indexOf(start[0]);
    const pitchSequence = []
    let currentPitch

    do {            
      const currentNode = this.notes[index];
      if (currentNode === 'C') {
        pitchClass++
      }
      currentPitch  = `${currentNode}${pitchClass}`;
      pitchSequence.push(currentPitch);
      if (index === (this.notes.length -1)) {
        index = 0;
      } else {
        index++;
      }
    } while (currentPitch !== stop)
    return pitchSequence;
  }

  calculatePitchToOffset(pitchSequence: Pitch[], spaceBetweenLines: number, strokeWidth: number) : Map<Pitch, number> {

    const increment = (spaceBetweenLines + strokeWidth) * 0.5 + strokeWidth
    return pitchSequence.reduce((pitchToOffset, currentPitch, index) => {
      let currentOffset = pitchToOffset.get(pitchSequence[index - 1]) || 0
      currentOffset += increment / 2
      pitchToOffset.set(currentPitch, currentOffset);
      return pitchToOffset
    }, new Map())    
  }

    generate(mdl: string): SVGElement {
        const draw = SVG().size(this.width, this.height)
        // var rect = draw.rect(100, 100).attr({ fill: '#f06' })
        const staffLineWidth = 1;
        const spaceBetweenCenterOfLines = 10;
        // const spaceBetweenLines = spaceBetweenCenterOfLines - 2 * staffLineWidth;
        const pitchSequence = this.generatePitchSequence("B-1", "B7").reverse()
        const numberOfLines = (pitchSequence.length - 1) / 2
        const heightRemainingForSpaceBetweenLines = this.height - 2 * this.marginVertical - numberOfLines * staffLineWidth
        const spaceBetweenLines = heightRemainingForSpaceBetweenLines / (numberOfLines + 1)
        const pitchToOffset = this.calculatePitchToOffset(pitchSequence, spaceBetweenLines, staffLineWidth)
        const mDraw = new this.MusicSvg(this, pitchToOffset, draw, spaceBetweenLines);
        const listener : ParseTreeListener = new class implements MdlListener {
          private xOffset;
          private currentPitches: Pitch[]

          constructor(marginHorizontal: number) {
            this.xOffset = marginHorizontal + 10;
          }
          enterTrebleStaff() {
            this.currentPitches = ["E4", "G4", "B4", "D5", "F5"]
            mDraw.drawStaff(this.currentPitches);
            mDraw.drawClef("𝄞", "E4");
            this.incrementOffset();
          }
          enterBassStaff() {
            this.currentPitches = ["G2", "B2", "D3", "F3", "A3"]
            mDraw.drawStaff(this.currentPitches);
          }

          exitBar() {
            mDraw.drawBarline(this.xOffset, this.currentPitches);
            this.incrementOffset();
          }


          enterPitch(ctx: PitchContext) {
            const pitchClass = ctx.tryGetToken(MdlParser.PITCH_CLASS, 0);
            let pitch = ctx.NOTE().text;
            if (pitchClass.constructor !== ErrorNode) {
              pitch += pitchClass.text;
            } else {
              pitch += "4"
            }
            mDraw.drawPitch(pitch, this.xOffset);
            this.incrementOffset();
          }

          incrementOffset() {
            this.xOffset += 20;
          }
          
        }(this.marginHorizontal) as ParseTreeListener;

        // Create the lexer and parser
        let inputStream = new ANTLRInputStream(mdl);
        let lexer = new MdlLexer(inputStream);
        let tokenStream = new CommonTokenStream(lexer);
        let parser = new MdlParser(tokenStream);
        
        // Parse the input, where `compilationUnit` is whatever entry point you defined
        let tree = parser.file();
        // Create the listener
        // Use the entry point for listeners
        ParseTreeWalker.DEFAULT.walk(listener, tree)

        // draw.ellipse(10, spaceBetweenLines).cx(30).cy(2 * spaceBetweenLines + marginTop);
        // draw.path(`M 22 ${lineOffset[3] + spaceBetweenLines/2} 
        //            C 15 ${lineOffset[2] } 40 ${lineOffset[2] } 35 ${lineOffset[3] + spaceBetweenLines/2}
        //            S 15 ${lineOffset[4]} 15 ${lineOffset[3] + spaceBetweenLines / 2}
        //            C 10 ${lineOffset[2]} 20 ${lineOffset[1] + spaceBetweenLines/2} 30 ${lineOffset[1] - spaceBetweenLines/2}
        //            C 32 ${lineOffset[0] - spaceBetweenLines/2} 32 ${lineOffset[0] - spaceBetweenLines/2} 25 ${marginTop * 0.3}
        //            C 20 ${lineOffset[0]} 23 ${lineOffset[0]} 25 ${lineOffset[1]}
        //            L 30 ${lineOffset[4] + 1.5 * spaceBetweenLines}
        //            C 30 ${lineOffset[4] + 2.3 * spaceBetweenLines} 20 ${lineOffset[4] + 2.3 * spaceBetweenLines} 20 ${lineOffset[4] + 1.5 * spaceBetweenLines}`)
        //   .stroke({width: 1, color: "black", linecap: "round", linejoin: "round"})
        //   .attr({fill: 'transparent'})
        //   // .hide()
    
        // const thickness = 4
        // draw.path(`M 52 ${lineOffset[3] + spaceBetweenLines/2} 
        //            C 45 ${lineOffset[2] } 70 ${lineOffset[2] } 65 ${lineOffset[3] + spaceBetweenLines/2}
        //            C 75 ${lineOffset[2] - thickness} 40 ${lineOffset[2] - thickness } 52 ${lineOffset[3] + spaceBetweenLines/2 }  
    
        //           `)
        // .stroke({width: 1, color: "black", linecap: "round", linejoin: "round"})
        // .attr({fill: 'transparent'})
        // // .fill('black')
    
        // draw.path(`M 22 ${lineOffset[3] + spaceBetweenLines/2} 
        //             C 15 ${lineOffset[2] } 40 ${lineOffset[2] } 35 ${lineOffset[3] + spaceBetweenLines/2}
        //             C 44 ${lineOffset[2] - thickness} 11 ${lineOffset[2] - thickness } 22 ${lineOffset[3] + spaceBetweenLines/2 }  
        //             `)
        // // .stroke({width: 1, color: "black", linecap: "round", linejoin: "round"})
        // // .attr({fill: 'transparent'})
        // .fill('black')
    
        // draw.path(`M 35 ${lineOffset[3] + spaceBetweenLines/2}
        //            C 33 ${lineOffset[4] + 2 } 29 ${lineOffset[4] + 0.5 * spaceBetweenLines/ 2} 29 ${lineOffset[4] + spaceBetweenLines / 2 - 1}
        //            C 25 ${lineOffset[4] + thickness} 30 ${lineOffset[4] + spaceBetweenLines } M 33 ${lineOffset[3] + spaceBetweenLines/2}
        //            `
        // )
        // .stroke({width: 1, color: "black", linecap: "round", linejoin: "round"})
        // .attr({fill: 'transparent'})
        // // .fill('black')
    
        // draw.path(`M 16 ${lineOffset[3] + spaceBetweenLines / 2 + 3}
        //           C 5 ${lineOffset[2] - 2} 20 ${lineOffset[1] + spaceBetweenLines/2} 30 ${lineOffset[1] - spaceBetweenLines/2}
        //           C 18 ${lineOffset[1] + spaceBetweenLines + 2}  13 ${lineOffset[2] - 2} 16 ${lineOffset[3] + spaceBetweenLines / 2 + 3}
        //            `
        // )
        // // .stroke({width: 1, color: "black", linecap: "round", linejoin: "round"})
        // // .attr({fill: 'transparent'})
        // .fill('black')
        // const text = draw.text("𝄞").x(20).y(lineOffset[2]).font("font-size: 20px")
        return draw.node as SVGElement
    }
}