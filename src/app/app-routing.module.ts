import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EditEmpTemplateComponent } from './edit-emp-template/edit-emp-template.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { HomeComponent } from './home/home.component';
import { IncrementComponent } from './increment/increment.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

import { ViewEmpComponent } from './view-emp/view-emp.component';

const routes: Routes = 
[
 
  {path:'viewemployee',component:ViewEmpComponent},
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'increment',component:IncrementComponent},
  {path:'template',component:EditEmpTemplateComponent},
  {path:'reactive',component:EditEmpReactiveComponent},
  {path:'emp-list',component:EmpListComponent},
  {path:'edit-emp-reactive/:id',component: EditEmpReactiveComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent}
  
  


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
