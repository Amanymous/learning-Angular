import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{
  path:'admin',loadChildren:()=>import("./admin-list/admin-list.component")
  .then(mod=>mod.AdminListComponent)
},{
  path:'user',loadChildren:()=>import("./user-list/user-list.component")
  .then(mod=>mod.UserListComponent)
}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
