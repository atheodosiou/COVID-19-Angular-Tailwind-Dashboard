import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";

const components = [
  NavBarComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule,RouterModule],
  exports: [...components]
})
export class CoreModule { }
