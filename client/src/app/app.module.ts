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
import { SharedService } from "./services/shared.service";
import { CloseDrawerDirective } from './directives/close-drawer.directive';
import { TweetSettingPipe } from './pipes/tweet-setting.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DrawerComponent,
    HeaderDropdownComponent,
    AppBodyComponent,
    TweetContainerComponent,
    TweetListComponent,
    TweetTextPipe,
    CloseDrawerDirective,
    TweetSettingPipe,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
