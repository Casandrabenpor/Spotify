import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '', //TODO (Public) Login, Register, Forgot...
  
  },
  {
    path: 'home', //TODO (Public) Login, Register, Forgot...

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
