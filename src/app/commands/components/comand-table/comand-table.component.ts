import { Component, Input} from '@angular/core'
import { Comand } from '../../interfaces/comand.interfaces';

@Component({
  selector: 'app-comand-table',
  templateUrl: './comand-table.component.html'
})

export class ComandTableComponent {
  @Input() comands: Comand[] = [];
}
