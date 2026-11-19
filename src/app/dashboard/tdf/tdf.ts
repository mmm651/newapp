import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-tdf',
  styleUrl: './tdf.css',
  templateUrl: './tdf.html',
})
export class Tdf {
  onSubmit(myForm:NgForm){
    console.log(myForm.value)
  }
}
