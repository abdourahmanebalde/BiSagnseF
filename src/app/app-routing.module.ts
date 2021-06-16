import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionComponent } from './page/connexion/connexion.component';
import { HomeComponent } from './page/home/home.component';
import { InscriptionComponent } from './page/inscription/inscription.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'connexion' , component: ConnexionComponent },
  { path: 'inscription' , component: InscriptionComponent },
  { path: 'profile' , component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

