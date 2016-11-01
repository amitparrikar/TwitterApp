import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { HeaderDropdownComponent } from './header-dropdown/header-dropdown.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { TweetContainerComponent } from './tweet-container/tweet-container.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetTextPipe } from './pipes/tweet-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    HeaderDropdownComponent,
    AppBodyComponent,
    TweetContainerComponent,
    TweetListComponent,
    TweetTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
