import { Component } from "@angular/core";
import { Comand } from "../../interfaces/comand.interfaces";
import { ComandService } from "../../serives/comand.service";


@Component({
  selector: 'app-for-comand',
  templateUrl: './for-comand.component.html',
})

export class ForComandComponent {

  termino: string = '';
  //data: string = '';
  hayError: boolean = false;

  comand: Comand[] = [];

  constructor(private comandoService: ComandService) {}

  search(termino: string) {
    this.hayError = false;
    this.termino = termino;
    console.log(this.termino)

    this.comandoService.searchComand(termino)
    .subscribe((comand) => {
      console.log(comand);
      this.comand = comand;
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
