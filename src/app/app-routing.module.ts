import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { RepositorydetailsComponent } from './repositorydetails/repositorydetails.component';
import { BitcoinComponent } from './bitcoin/bitcoin.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'repository/:user', component: RepositorydetailsComponent },
  { path: 'bitcoin', component: BitcoinComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
