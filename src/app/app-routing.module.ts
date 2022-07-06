import { HeadlineDetailsComponent } from './components/headline-details/headline-details.component';
import { TopBusinessDetailsComponent } from './components/top-business-details/top-business-details.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth/auth-guard.guard';
import { HeadlineComponent } from './components/headline/headline.component';
import { HomeComponent } from './components/home/home.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { TopBusinessComponent } from './components/top-business/top-business.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'business' ,canActivate:[AuthGuardGuard] ,component:TopBusinessComponent},
  {path:'headline' ,canActivate:[AuthGuardGuard] ,component:HeadlineComponent},
  {path:'readingList' ,canActivate:[AuthGuardGuard] ,component:ReadingListComponent},
  {path: "headlinedetails/:id" , component: HeadlineDetailsComponent},
  {path: "topbusinessdetails/:id" , component:TopBusinessDetailsComponent},
  {path:'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path:'**',component:ErrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
