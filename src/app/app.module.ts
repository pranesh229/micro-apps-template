import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { TestOneComponent } from "./test-one/test-one.component";
import { TestTwoComponent } from "./test-two/test-two.component";
import { TestThreeComponent } from './test-three/test-three.component';

// Include the `PopupService` provider,
// but exclude `PopupComponent` from compilation,
// because it will be added dynamically.

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  declarations: [AppComponent, TestOneComponent, TestTwoComponent, TestThreeComponent],
  bootstrap: [AppComponent],
  entryComponents: [TestOneComponent, TestTwoComponent, TestThreeComponent]
})
export class AppModule {}
