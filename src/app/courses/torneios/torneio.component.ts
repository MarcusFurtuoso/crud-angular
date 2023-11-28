import { TorneioService } from '../services/torneio.service';
import { Torneio } from '../model/torneio';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-torneios',
  templateUrl: './torneio.component.html',
  styleUrls: ['./torneio.component.scss'],
})
export class TorneiosComponent implements OnInit {
  torneios$: Observable<Torneio[]> | null = null;

  constructor(
    private torneiosService: TorneioService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {
    this.refresh();
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {}

  refresh() {
    this.torneios$ = this.torneiosService.list().pipe(
      catchError((error) => {
        this.onError('Erro ao carregar cursos!');
        return of([]);
      })
    );
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(torneio: Torneio) {
    this.router.navigate(['edit', torneio.id], { relativeTo: this.route });
  }

  onRemove(torneio: Torneio) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse curso?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.torneiosService.remove(torneio.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Torneio removido com sucesso!', '', {
              duration: 5000,
              verticalPosition: 'top',
              horizontalPosition: 'center',
            });
          },
          () => this.onError('Erro ao tentar remover torneio!')
        );
      }
    });
  }
}
