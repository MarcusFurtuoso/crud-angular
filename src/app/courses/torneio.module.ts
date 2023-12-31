import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TorneioRoutingModule } from './torneio-routing.module';
import { TorneiosComponent } from './torneios/torneio.component';
import { SharedModule } from '../shared/shared.module';
import { TorneioFormComponent } from './torneio-form/torneio-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TorneioListComponent } from './torneio-list/torneio-list.component';
import { AuthComponent } from './auth/auth.component';
import { AppComponent } from './app/app.component';
import { CadastroComponent } from './cadastro/cadastro.component';

@NgModule({
  declarations: [TorneiosComponent, TorneioFormComponent, TorneioListComponent, AuthComponent, AppComponent, CadastroComponent],
  imports: [
    CommonModule,
    TorneioRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
})
export class TorneioModule {}
