import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { EventComponent } from './event/event.component';
import { EventDataService } from './event-data.service';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoritesService } from './favorites.service';
import { EventFormComponent } from './event-form/event-form.component'


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    EventComponent,
    FavoritesComponent,
    EventFormComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: EventComponent },
      { path: 'favorites', component: FavoritesComponent }
    ])
  ],
  providers: [EventDataService, FavoritesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
