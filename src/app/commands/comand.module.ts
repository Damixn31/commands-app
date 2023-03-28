import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ForComandComponent } from "./pages/for-comand/for-comand.component";



@NgModule({
  declarations: [
    ForComandComponent
  ],
  exports: [
    ForComandComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class ComandModule {}
