import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Torneio } from '../model/torneio';
import { Inscricao } from '../model/inscricao';

@Injectable({
  providedIn: 'root',

})
export class TorneioService {
  // private readonly API = '/assets/torneios.json';
  private readonly APITORNEIO = 'api/torneio';
  private readonly APIINSCRICAO = 'api/inscricao';
  private readonly APIUSUARIO = 'api/usuario';
  private readonly APICATEGORIA = 'api/categoria';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Torneio[]>(this.APITORNEIO).pipe(
      first(),
      tap((torneio) => console.log(torneio))
    );
  }

  save(record: Partial<Inscricao>) {
    return this.httpClient.post<Torneio>(this.APIINSCRICAO, record).pipe(first());
  }
}
