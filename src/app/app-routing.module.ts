import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquiryFormComponent } from './inquiry-form/inquiry-form.component';

const routes: Routes = [
  {path : '', component:InquiryFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
