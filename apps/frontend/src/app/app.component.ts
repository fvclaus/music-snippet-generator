import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@music-snippet-generator/api-interfaces';
import { Generator } from '@music-snippet-generator/shared';

@Component({
  selector: 'music-snippet-generator-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

  ngOnInit() {
    const generator = new Generator();
    const svgElement = generator.generate();
    document.body.appendChild(svgElement);
  }
}
