import { SVG } from '@svgdotjs/svg.js'

declare var window: any;

export class Generator {
  constructor() {
    if (typeof window === 'undefined') {
      // @ts-ignore
      const {registerWindow}  =  __non_webpack_require__('@svgdotjs/svg.js');
      // @ts-ignore
      const svgWindow = __non_webpack_require__('svgdom');
      registerWindow(svgWindow, svgWindow.document)
    }
  }
    generate(): SVGElement {
        const draw = SVG().size(300, 300)
        // var rect = draw.rect(100, 100).attr({ fill: '#f06' })
        const staffLineWidth = 1;
        const spaceBetweenCenterOfLines = 10;
        const spaceBetweenLines = spaceBetweenCenterOfLines - 2 * staffLineWidth;
        const marginTop = 15;
        const staffLineStrokeProperties = {width: staffLineWidth, color: "black"};
        const lineOffset = []
        for (let i = 0; i < 5; i++) {
          const offset = i * spaceBetweenLines + marginTop;
          lineOffset.push(offset);
          draw.line(0, offset, 100, offset).stroke(staffLineStrokeProperties);
        }
        draw.line(0, marginTop, 0, 4 * spaceBetweenLines + marginTop).stroke(staffLineStrokeProperties)
        draw.line(100, marginTop, 100, 4 * spaceBetweenLines + marginTop).stroke(staffLineStrokeProperties)
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
        const text = draw.text("𝄞").x(20).y(lineOffset[2]).font("font-size: 20px")
        return draw.node as SVGElement
    }
}