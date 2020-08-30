import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@music-snippet-generator/api-interfaces';
import { Generator, SyntaxErrors } from '@music-snippet-generator/shared';
import { FormControl } from '@angular/forms';
import { ParseError } from '@angular/compiler';

@Component({
  selector: 'music-snippet-generator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  mdlInput = new FormControl();
  syntaxErrors: SyntaxError[] = []
  constructor(private http: HttpClient) {}
  private svgElement: SVGElement | null
  
  // TODO Show controls for height, width, etc...

  ngOnInit() {
    const generator = new Generator();
    this.mdlInput.valueChanges.subscribe((value: string) => {
      try {
        this.syntaxErrors = []
        if (this.svgElement && this.svgElement.parentNode) {
          this.svgElement.parentNode.removeChild(this.svgElement);
        }
        const svgElement = generator.generate(value);
        this.svgElement = document.body.appendChild(svgElement);
      } catch (e) {
        if (e instanceof SyntaxErrors) {
          this.syntaxErrors = e.syntaxErrors
        } else {
          console.error(e);
          throw e;
        }
      }
    })
    this.mdlInput.setValue('treble_clef | A4 B4 C4 D4 |');
  }
}
