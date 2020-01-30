import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServicesComponent } from './services/services.component';
import { ApiServicesService } from './api-services.service';
import { ColorChangeDirective } from './color-change.directive';
import { DelayDirective } from './delay.directive';
import { DateComponent } from './date/date.component';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { TodoComponent } from './todo/todo.component';
import {HttpClientModule} from '@angular/common/http';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'todo', component: TodoComponent},
  {path: '**', component: NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    ServicesComponent,
    HeaderComponent,
    TodoComponent,
    ColorChangeDirective,
    DelayDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    ),
    HttpClientModule
  ],
  providers: [ ApiServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
