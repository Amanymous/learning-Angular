import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path:'about/:id',
  component:AboutComponent,
  children:[
    {path:'company',component:AboutCompanyComponent},
    {path:'me',component:AboutMeComponent}

  ]
},
{
  path:'user/:id',
  component:UserComponent
},
{
  path:'home/:id',
  component:HomeComponent
},
{
  path:'**',
  component:PagenotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
