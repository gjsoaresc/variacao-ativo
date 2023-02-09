import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-variant-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() response: any;
}
