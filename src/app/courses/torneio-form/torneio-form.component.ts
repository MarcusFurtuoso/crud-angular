import { TorneioService } from './../services/torneio.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-torneio-form',
  templateUrl: './torneio-form.component.html',
  styleUrls: ['./torneio-form.component.scss'],
})
export class TorneioFormComponent {
  form = this.formBuilder.group({
    nome: [''],
    categoriaId: [''],
    usuario1Id: [''],
    usuario2Id: ['']
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: TorneioService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  // ngOnInit(): void {
  //   this.form.value.categoriaId = null;
  // }

  onSubmit() {
    this.service.save(this.form.value).subscribe({
      next: (data) => this.onSuccess(),
      error: () => {
        this.onError();
      },
    });
  }

  onCancel() {
    this.location.back();
  }

  onSuccess() {
    this.snackBar.open('Inscrição realizada com sucesso!', '', {
      duration: 5000,
    });
    this.onCancel();
  }

  onError() {
    this.snackBar.open('Erro ao se inscrever no torneio!', '', {
      duration: 5000,
    });
  }
}
