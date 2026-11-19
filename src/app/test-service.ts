import { Service } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Service()
export class TestService {
  private myValue:BehaviorSubject<string>=new BehaviorSubject<string>('');
  changeValue(value:string){
    this.myValue.next(value);
  }
  getValue(){
    return this.myValue.asObservable();
  }
}
