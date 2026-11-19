import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { TestService } from '../../test-service';

@Component({
  imports: [],
  selector: 'app-one',
  styleUrl: './one.css',
  templateUrl: './one.html',
})
export class One implements OnInit {
  constructor(private _testservice:TestService,private _cdr:ChangeDetectorRef){}
value=''

ngOnInit():void{this._testservice.getValue().subscribe(data=>{this.value=data;
this._cdr.detectChanges()

})}

}
