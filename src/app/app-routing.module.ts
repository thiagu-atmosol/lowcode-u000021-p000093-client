import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [{ path: 'user', loadChildren: () => import('./modules/layouts/layouts.module').then(m => m.LayoutsModule) },
{"path":"","redirectTo":"user","pathMatch":"full"},{"path":"**","redirectTo":"user","pathMatch":"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
