import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Torneio } from './../model/torneio';
import { TorneioService } from './../services/torneio.service';

export const TorneioResolver: ResolveFn<Observable<Torneio>> = (route, state,  service: TorneioService = inject(TorneioService)) => {

  if (route.params?.['id']){
    return service.loadById(route.params['id']);
  }
  return of({id: '', nome: '', category: '', premiacao: ''});
};
