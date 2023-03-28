import { Component } from "@angular/core";
import { Comand } from "../../interfaces/comand.interfaces";
import { ComandService } from "../../serives/comand.service";


@Component({
  selector: 'app-for-comand',
  templateUrl: './for-comand.component.html',
})

export class ForComandComponent {

  data: string = '';
  hayError: boolean = false;

  comand: Comand[] = [];

  constructor(private comandoService: ComandService) {}

  search(data: string) {
    this.hayError = false;
    this.data = data;

    this.comandoService.searchComand(data)
    .subscribe((comands) => {
      console.log(comands);
      this.comand = comands;
    }, (err) => {
      this.hayError = true;
      this.comand = [];
    });
  }

  sugerence(data: string) {
    this.hayError = false;
    //TODO: crear sugerence
  }

}
