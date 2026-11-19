import { Component } from '@angular/core';
import { One } from '../one/one';
import { Two } from '../two/two';

@Component({
  imports: [One,Two],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
