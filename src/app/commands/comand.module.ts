import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ComandInputComponent } from "./components/comand-input/comand-input.component";
import { ForComandComponent } from "./pages/for-comand/for-comand.component";
import { ComandTableComponent } from "./components/comand-table/comand-table.component";
import { SeeComandComponent } from "./pages/see-comand/see-comand.component";



@NgModule({
  declarations: [
    ForComandComponent,
    ComandInputComponent,
    ComandTableComponent,
    SeeComandComponent
  ],
  exports: [
    ForComandComponent,
    SeeComandComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class ComandModule {}
