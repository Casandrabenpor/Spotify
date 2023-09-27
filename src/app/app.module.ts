import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoritesPageComponent } from './modules/favorites/pages/favorites-page/favorites-page.component';

@NgModule({
  declarations: [ // Todo: Declaraciones, componentes, directivas,pipes
    AppComponent, FavoritesPageComponent,
  ],
  imports: [ // Solo se importan otros modulos
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
