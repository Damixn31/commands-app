import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ForComandComponent } from './commands/pages/for-comand/for-comand.component';
import { SeeComandComponent } from './commands/pages/see-comand/see-comand.component';

const routes:Routes = [
  {
   path: '',
   component: ForComandComponent,
   pathMatch: 'full'
  },
  {
   path: 'commands/:id',
   component: SeeComandComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRoutingModule {}
