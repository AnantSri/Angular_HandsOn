import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { IncrementComponent } from './increment/increment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpTemplateComponent } from './edit-emp-template/edit-emp-template.component';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { LoginComponent } from './login/login.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { UserComponent } from './user/user.component';




@NgModule({
  declarations: [
    AppComponent,
    ViewEmpComponent,
    MenuComponent,
    HomeComponent,
    IncrementComponent,
    EditEmpTemplateComponent,
    EditEmpReactiveComponent,
    LoginComponent,
    EmpInfoComponent,
    EmpListComponent,
    UserComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
