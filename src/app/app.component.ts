import { TestThreeComponent } from './test-three/test-three.component';
import { TestTwoComponent } from "./test-two/test-two.component";
import { TestOneComponent } from "./test-one/test-one.component";
import { Component, Injector } from "@angular/core";
import { createCustomElement } from "@angular/elements";
@Component({
  selector: "app-root",
  template: ""
})
export class AppComponent {
  constructor(injector: Injector) {
    const TestOneElement = createCustomElement(TestOneComponent, { injector });
    customElements.define("app-test-one", TestOneElement);
    const TestTwoElement = createCustomElement(TestTwoComponent, { injector });
    customElements.define("app-test-two", TestTwoElement);
    const TestThreeElement = createCustomElement(TestThreeComponent, { injector });
    customElements.define("app-test-three", TestThreeElement);
  }
}
