import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexRoutingModule} from "./index-routing.module";
import { ComicsFilterComponent } from './comics-filter/comics-filter.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { DialogComicsDetailComponent } from './dialog-comics-detail/dialog-comics-detail.component';
import { ComicsPageComponent } from './comics-page/comics-page.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {NgxMatSelectSearchModule} from "ngx-mat-select-search";
import { CustomSelectDataComponent } from './custom-select-data/custom-select-data.component';
import {MatBadgeModule} from "@angular/material/badge";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    ComicsFilterComponent,
    ComicsListComponent,
    DialogComicsDetailComponent,
    ComicsPageComponent,
    CustomSelectDataComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    NgxMatSelectSearchModule,
    MatBadgeModule,
    MatProgressSpinnerModule
  ]
})
export class IndexModule { }
