import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ForComandComponent } from './commands/pages/for-comand/for-comand.component';

const routes:Routes = [
  {
   path: '',
   component: ForComandComponent,
   pathMatch: 'full'
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
