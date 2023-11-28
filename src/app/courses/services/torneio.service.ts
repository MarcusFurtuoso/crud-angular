import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';
import { Torneio } from '../model/torneio';

@Injectable({
  providedIn: 'root',

})
export class TorneioService {

  private readonly API = 'api/torneio';

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Torneio[]>(this.API).pipe(
      first(),
    );
  }

  save(record: Partial<Torneio>) {

    if(record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Torneio>) {
    return this.httpClient.post<Torneio>(this.API, record).pipe(first());
  }

  private update(record: Partial<Torneio>) {
    return this.httpClient.put<Torneio>(`${this.API}/${record.id}`, record).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Torneio>(`${this.API}/${id}`);
  }


  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

}
