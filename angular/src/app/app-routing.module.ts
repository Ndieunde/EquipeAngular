import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  //The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  imports: [RouterModule.forRoot(routes)],

  // le chemin sera disponible tout au long de l'application
  exports: [RouterModule]
})

export class AppRoutingModule { }
