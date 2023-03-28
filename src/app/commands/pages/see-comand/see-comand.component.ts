import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { switchMap, tap } from "rxjs";
import { Comand } from "../../interfaces/comand.interfaces";
import { ComandService } from "../../serives/comand.service";

@Component({
  selector: 'app-see-comand',
  templateUrl: './see-comand.component.html'
})

export class SeeComandComponent implements OnInit {


  comand!: Comand;

  constructor(
    private activatedRoute: ActivatedRoute,
    private comandService: ComandService
  ) {}

  ngOnInit(): void {
     this.activatedRoute.params
     .pipe(
       switchMap(({ id}) => this.comandService.getComandforId(id)),
         tap(console.log)
     )
     .subscribe(comand => this.comand = comand)
  }
}
