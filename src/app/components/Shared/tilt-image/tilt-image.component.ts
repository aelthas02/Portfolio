import { Component, Input, OnInit } from '@angular/core';
import { Repo } from 'src/app/Services/DTOs/Repo';

@Component({
  selector: 'app-tilt-image',
  templateUrl: './tilt-image.component.html',
  styleUrls: ['./tilt-image.component.scss']
})
export class TiltImageComponent implements OnInit {

  @Input() repo: Repo;

  constructor() { }

  ngOnInit() {
  }

}
