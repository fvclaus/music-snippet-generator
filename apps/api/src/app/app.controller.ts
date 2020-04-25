import { Controller, Get } from '@nestjs/common';

import { Message } from '@music-snippet-generator/api-interfaces';

import { AppService } from './app.service';

import { Generator } from '@music-snippet-generator/shared';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): Message {
    const generator = new Generator();
    const svgElement = generator.generate();
    return {
      message: svgElement.outerHTML
    };
  }

}
