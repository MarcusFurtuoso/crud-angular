import { Torneio } from './../model/torneio';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-torneio-list',
  templateUrl: './torneio-list.component.html',
  styleUrls: ['./torneio-list.component.scss'],
})
export class TorneioListComponent {

  @Input() torneio: Torneio[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  readonly displayedColumns = ['nome', 'category', 'premiacao', 'actions'];

  constructor() {}

  onAdd() {
    this.add.emit(true);
  }

  onEdit(torneio: Torneio) {
    this.edit.emit(torneio);
  }

  onDelete(torneio: Torneio) {
    this.remove.emit(torneio);
  }


}
