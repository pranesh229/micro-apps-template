import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestOneComponent } from './test-one/test-one.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestThreeComponent } from './test-three/test-three.component';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app/app.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    TestOneComponent,
    TestTwoComponent,
    TestThreeComponent
  ]
})
export class AppModule {
  constructor(injector: Injector) {
    const TestOneElement = createCustomElement(TestOneComponent, { injector });
    customElements.define('app-test-one', TestOneElement);
    const TestTwoElement = createCustomElement(TestTwoComponent, { injector });
    customElements.define('app-test-two', TestTwoElement);
    const TestThreeElement = createCustomElement(TestThreeComponent, {
      injector
    });
    customElements.define('app-test-three', TestThreeElement);
  }
}
