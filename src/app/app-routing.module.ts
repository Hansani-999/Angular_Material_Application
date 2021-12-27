import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { RegisterComponent } from './register/register.component';
import { UpdateUserComponent } from './update-user/update-user.component';

const routes: Routes = [
  { path: '',pathMatch: 'full', redirectTo: 'users/register'},
    { path: 'users/register', component: RegisterComponent },
    { path: 'users/update/:id', component: UpdateUserComponent },
    { path: 'users/listusers', component: ListUserComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
