import {Component, Input} from '@angular/core';

@Component({
  selector: 'ar-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {
    @Input() headers: string[] = [];
    @Input() rows: any[] = [];
}
