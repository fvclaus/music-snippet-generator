import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@music-snippet-generator/api-interfaces';
import { Generator } from '@music-snippet-generator/shared';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'music-snippet-generator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  mdlInput = new FormControl('t | A B C D |');
  constructor(private http: HttpClient) {}
  private svgElement: SVGElement | null

  ngOnInit() {
    const generator = new Generator();
    this.mdlInput.valueChanges.subscribe((value: string) => {
      try {
        if (this.svgElement && this.svgElement.parentNode) {
          this.svgElement.parentNode.removeChild(this.svgElement);
        }
        const svgElement = generator.generate(value);
        this.svgElement = document.body.appendChild(svgElement);
      } catch (e) {
        console.error(e);
      }
    })
  }
}
