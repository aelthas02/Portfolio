import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public linkedinlogo: string = '../../../assets/LinkedIn-Logo.png';
  public linkedinAddress: string = 'https://www.linkedin.com/in/breno-moreira-891504103/';

  constructor() { }

  ngOnInit() {
  }

}
