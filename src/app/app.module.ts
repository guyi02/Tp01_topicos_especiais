import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubService } from './github.service';
import { RepositorydetailsComponent } from './repositorydetails/repositorydetails.component';
import { IndexComponent } from './index/index.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, RepositorydetailsComponent, IndexComponent, BitcoinComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [GithubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
