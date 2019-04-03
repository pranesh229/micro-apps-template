import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-three',
  templateUrl: './test-three.component.html',
  styleUrls: ['./test-three.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestThreeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
