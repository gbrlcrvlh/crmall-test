import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {APP_BASE_HREF} from "@angular/common";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./view/index/index.module').then(mod => mod.IndexModule)
      }
    ]
  },

  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, onSameUrlNavigation: 'reload', enableTracing: false })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/crmall-test/' }]
})
export class AppRoutingModule { }
