import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VariationComponent } from './containers/variation/variation.component';

const routes: Routes = [
  { path: '', redirectTo: '/variation/PETR4.SA', pathMatch: 'full' },
  { path: 'variation/:active', component: VariationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
