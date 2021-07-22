import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public linkedinlogo: string = '../../../assets/LinkedIn-Logo.png';
  public githublogo: string = '../../../assets/GitHub-Logo.png';
  public codepenlogo: string = '../../../assets/CodePen-Logo.png';
  public linkedinAddress: string = 'https://www.linkedin.com/in/breno-moreira-891504103/';
  public githubAddress: string = 'https://github.com/aelthas02/'; 
  public codepenAddress: string = 'https://codepen.io/Wyndrin';

  constructor() { }

  ngOnInit() {
  }

}
