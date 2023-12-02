import { NgModule } from '@angular/core';
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [
      TableComponent,
      ActionButtonComponent,
  ],
    exports: [
        TableComponent,
        ActionButtonComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
