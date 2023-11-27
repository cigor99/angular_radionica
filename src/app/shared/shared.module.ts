import { NgModule } from '@angular/core';
import {LayoutComponent} from "./components/layout/layout.component";
import { TableComponent } from './components/table/table.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
      LayoutComponent,
      TableComponent,
  ],
    exports: [
        LayoutComponent,
        TableComponent,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
