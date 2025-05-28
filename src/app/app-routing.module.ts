import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProjectComponent } from './project/project.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { CompetencesComponent } from './competences/competences.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent, data: { animation: 'AccueilPage' } },
  { path: 'project', component: ProjectComponent, data: { animation: 'ProjectPage' } },
  { path: 'service', component: ServiceComponent, data: { animation: 'ServicePage' } },
  { path: 'competences', component: CompetencesComponent, data: { animation: 'CompetencesPage' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'ContactPage' } },
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
