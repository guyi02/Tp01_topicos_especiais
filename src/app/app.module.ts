import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt, 'pt')

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubService } from './github.service';
import { RepositorydetailsComponent } from './repositorydetails/repositorydetails.component';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';
import { UserballonComponent } from './userballon/userballon.component';
import { BitcoinService } from './bitcoin.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RepositorydetailsComponent,
    IndexComponent,
    BitcoinComponent,
    UserballonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [GithubService, BitcoinService, 
    {provide: LOCALE_ID, useValue: 'pt'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
