import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { MoviesComponent } from './movies/movies.component';
import { RegestrationComponent } from './regestration/regestration.component';
import { TvdetailsComponent } from './tvdetails/tvdetails.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', canActivate:[AuthGuard], component:HomeComponent},
  {path:'contactUs', canActivate:[AuthGuard], component:ContactComponent},
  {path:'moviedetails/:id',canActivate:[AuthGuard], component:MoviedetailsComponent},
  {path:'tvdetails/:id',canActivate:[AuthGuard], component:TvdetailsComponent},
  {path:'regestration',component:RegestrationComponent},
  {path:'movies',canActivate:[AuthGuard], component:MoviesComponent},
  {path:'login',component:LoginComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
