import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatePrescriptionComponent } from './pages/create-prescription/create-prescription.component';


const routes: Routes = [{
  path: '', component: CreatePrescriptionComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
