import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComicsPageComponent} from "./comics-page/comics-page.component";

const routes: Routes = [
  {
    path: '',
    component: ComicsPageComponent
  },
  {
    path: 'comics',
    component: ComicsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
