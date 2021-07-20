import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {queryParamsEventService} from "../../../service/events/queryParamsEvent.service";
import {CharactersService} from "../../../service/marvel/characters.service";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {CreatorsService} from "../../../service/marvel/creators.service";
import {EventsService} from "../../../service/marvel/events.service";
import {SeriesService} from "../../../service/marvel/series.service";
import {ElementQueries} from "css-element-queries";
import {ComicsSelectedEventService} from "../../../service/events/comicsSelectedEvent.service";

@Component({
  selector: 'crmall-test-comics-filter',
  templateUrl: './comics-filter.component.html',
  styleUrls: ['./comics-filter.component.scss']
})
export class ComicsFilterComponent {

  comicsName = new FormControl();
  charactersSelected = new FormControl();
  creatorsSelected = new FormControl();
  eventsSelected = new FormControl();
  seriesSelected = new FormControl();

  cartLength = 0;

  modelChanged: Subject<string> = new Subject<string>();

  constructor(
    private queryParamsEventService: queryParamsEventService,
    public charactersService: CharactersService,
    public creatorsService: CreatorsService,
    public eventsService: EventsService,
    public seriesService: SeriesService,
    private comicsSelectedEventService: ComicsSelectedEventService
  ) {
    ElementQueries.init();

    this.comicsSelectedEventService.comicsList.subscribe(res => {
      this.cartLength = res.length;
    })

    this.modelChanged.pipe(
      debounceTime(500))
      .subscribe(model => {
        this.queryParamsUpdate();
      });
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  queryParamsUpdate(){
    this.queryParamsEventService.updateQueryParams(
      {
        titleStartsWith: this.comicsName.value,
        characters: this.charactersSelected.value?.map(item => item.id).toString(),
        creators: this.creatorsSelected.value?.map(item => item.id).toString(),
        events: this.eventsSelected.value?.map(item => item.id).toString(),
        series: this.seriesSelected.value?.map(item => item.id).toString()
      });
  }

}
