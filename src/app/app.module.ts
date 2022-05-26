import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AhorcadoMainComponent } from './ahorcado-main/ahorcado-main.component';
import { AgregarPalabraComponent } from './agregar-palabra/agregar-palabra.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'ahorcado-main', component: AhorcadoMainComponent},
  { path: 'agregar-palabra', component: AgregarPalabraComponent},
  { path: '**', redirectTo: 'home', pathMatch: 'full'},
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AhorcadoMainComponent,
    AgregarPalabraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
