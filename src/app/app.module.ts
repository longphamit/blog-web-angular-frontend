import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { AdminComponent } from './pages/admin/admin.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminHeaderComponent } from './component/admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './component/admin/admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './component/admin/admin-navbar/admin-navbar.component';
import { RightbarComponent } from './component/rightbar/rightbar.component';
import { PostManageComponent } from './pages/post-manage/post-manage.component';
import { CheckEditorComponent } from './component/check-editor/check-editor.component'
import { CKEditorModule } from 'ckeditor4-angular';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    NavbarComponent,
    LoginComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminNavbarComponent,
    RightbarComponent,
    PostManageComponent,
    CheckEditorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    CKEditorModule,
    MatPaginatorModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
