import { TorneioResolver } from './guards/torneio.resolver';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TorneiosComponent } from './torneios/torneio.component';
import { TorneioFormComponent } from './torneio-form/torneio-form.component';

const routes: Routes = [
  { path: '', component: TorneiosComponent },
  { path: 'new', component: TorneioFormComponent, resolve: { torneio: TorneioResolver } },
  { path: 'edit/:id', component: TorneioFormComponent, resolve: { torneio: TorneioResolver }},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TorneioRoutingModule {}
