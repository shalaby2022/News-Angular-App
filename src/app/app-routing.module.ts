import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadlineComponent } from './components/headline/headline.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ReadingListComponent } from './components/reading-list/reading-list.component';
import { RegisterComponent } from './components/register/register.component';
import { TopBusinessComponent } from './components/top-business/top-business.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'business',component:TopBusinessComponent},
  {path:'headline',component:HeadlineComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'readingList',component:ReadingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
