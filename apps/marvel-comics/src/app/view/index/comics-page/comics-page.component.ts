import { Component } from '@angular/core';
import {ElementQueries} from "css-element-queries";

@Component({
  selector: 'crmall-test-comics-page',
  templateUrl: './comics-page.component.html',
  styleUrls: ['./comics-page.component.scss']
})
export class ComicsPageComponent {

  expaandedFilter = false;

  constructor() {
    ElementQueries.init();
  }

}
