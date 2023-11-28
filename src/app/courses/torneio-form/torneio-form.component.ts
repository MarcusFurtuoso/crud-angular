import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TorneioService } from './../services/torneio.service';
import { Torneio } from '../model/torneio';

@Component({
  selector: 'app-torneio-form',
  templateUrl: './torneio-form.component.html',
  styleUrls: ['./torneio-form.component.scss'],
})
export class TorneioFormComponent {
  form = this.formBuilder.group({
    id: [''],
    nome: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
    category: ['', [Validators.required]],
    premiacao: ['', [Validators.required]]
  });

  constructor(
    private formBuilder: NonNullableFormBuilder,
    private service: TorneioService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const torneio: Torneio = this.route.snapshot.data['torneio'];
    this.form.patchValue(torneio);
  }

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
    this.snackBar.open('Torneio salvo com sucesso!', '', {
      duration: 5000
    });
    this.onCancel();
  }

  onError() {
    this.snackBar.open('Erro ao se inscrever no torneio!', '', {
      duration: 5000,
    });
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if(field?.hasError('required')) {
      return 'Campo obrigatório!'
    }

    if(field?.hasError('minlength')) {
      const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 2 ;
      return `Tamanho mínimo precisa ser de ${requiredLength} caracteres!`
    }

    if(field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 200;
      return `Tamanho máximo excedido de ${requiredLength} caracteres!`
    }

    return 'Campo inválido!'

  }
}
