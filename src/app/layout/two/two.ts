import { Component } from '@angular/core';
import { TestService } from '../../test-service';

@Component({
  imports: [],
  selector: 'app-two',
  styleUrl: './two.css',
  templateUrl: './two.html',
})
export class Two {
  constructor(private _testService:TestService){}

  change(){
    this._testService.changeValue(Math.random().toString());

  }
}
