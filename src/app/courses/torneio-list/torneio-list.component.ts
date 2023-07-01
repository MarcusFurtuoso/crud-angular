import { Component, Input } from '@angular/core';
import { Torneio } from '../model/torneio';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-torneio-list',
  templateUrl: './torneio-list.component.html',
  styleUrls: ['./torneio-list.component.scss']
})
export class TorneioListComponent {

  @Input() torneio: Torneio[] = [];

  readonly displayedColumns = ['nome', 'premiacao', 'actions'];

  constructor(private router: Router,
    private route: ActivatedRoute) {}


    onAdd() {
      this.router.navigate(['inscricao'], {relativeTo: this.route})
    }





}
