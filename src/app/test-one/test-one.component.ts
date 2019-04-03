import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-test-one',
  templateUrl: './test-one.component.html',
  styleUrls: ['./test-one.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestOneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
