import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PostManageComponent } from './pages/post-manage/post-manage.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },{
    path:"login",
    component:LoginComponent
  },{
    path:"post/manage",
    component:PostManageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
