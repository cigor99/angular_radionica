import { NgModule } from '@angular/core';
import {LayoutComponent} from "./components/layout/layout.component";
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";
import { ActionButtonComponent } from './components/action-button/action-button.component';

@NgModule({
  declarations: [
      LayoutComponent,
      TableComponent,
      ActionButtonComponent,
  ],
    exports: [
        LayoutComponent,
        TableComponent,
        ActionButtonComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
