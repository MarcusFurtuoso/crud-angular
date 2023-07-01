import { TorneioService } from '../services/torneio.service';
import { Torneio } from '../model/torneio';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-torneios',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.scss'],
})
export class TorneiosComponent implements OnInit {
  torneios$: Observable<Torneio[]>;

 
  torneio: any;

  constructor(
    private torneiosService: TorneioService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.torneios$ = this.torneiosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos!');
        return of([]);
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
