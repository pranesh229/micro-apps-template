import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-two',
  templateUrl: './test-two.component.html',
  styleUrls: ['./test-two.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestTwoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
