import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {FormControl} from "@angular/forms";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'crmall-test-custom-select-data',
  templateUrl: './custom-select-data.component.html',
  styleUrls: ['./custom-select-data.component.scss']
})
export class CustomSelectDataComponent implements OnChanges, AfterViewInit{

  @Input()
  public fieldTitle: string;

  @Input()
  public control: FormControl = new FormControl();

  @Input()
  public service;

  @Output()
  public onSelectClosedEvent: EventEmitter<any> = new EventEmitter();

  @Input()
  public itemParams = {
    limit: 10,
    offset: 0,
    orderBy:'name'
  };

  @Input()
  public displayLabel = [];

  @Input()
  public searchParam: string;

  @Input()
  public hideSearch: false;

  modelChanged: Subject<string> = new Subject<string>();
  private RELOAD_TOP_SCROLL_POSITION = 0;

  @ViewChild('Select') selectElement: MatSelect;
  itemSelected = new FormControl();
  itemList = [];

  constructor() {
    this.modelChanged.pipe(
      debounceTime(500))
      .subscribe(model => {
        if(model){
          this.itemParams[this.searchParam] = model;
        }else{
          delete this.itemParams[this.searchParam];
        }
        this.initDataList();
      });
  }

  ngAfterViewInit() {
    this.selectElement.openedChange.subscribe(open => {
      if(open){
        this.registerPanelScrollEvent();
      }
    });
  }

  registerPanelScrollEvent() {
    this.RELOAD_TOP_SCROLL_POSITION = 0;
    const panel = this.selectElement.panel.nativeElement;
    panel.addEventListener('scroll', event => this.loadMoreOnScroll(event));
  }

  loadMoreOnScroll(event) {
    if(this.RELOAD_TOP_SCROLL_POSITION == 0){
      this.RELOAD_TOP_SCROLL_POSITION = event.target.scrollHeight - 257;
    }
    if (event.target.scrollTop > this.RELOAD_TOP_SCROLL_POSITION) {
      this.getNewDataList().then((data: any[])=> {
        this.itemList = this.itemList.concat(data);
        this.RELOAD_TOP_SCROLL_POSITION = 0;
      });
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if(changes['service']){
      this.initDataList();
    }
  }

  initDataList(){
    this.itemParams.offset = 0;
    this.getNewDataList().then((data: any[])=> {
      this.itemList = data;
    });
  }

  getNewDataList(){
    return new Promise(resolve => {
      this.service.getAll(this.itemParams).subscribe(res => {
        this.itemParams.offset = this.itemParams.offset+this.itemParams.limit;
        resolve(res.data.results);
      })
    });
  }

  selectClosed(){
    this.onSelectClosedEvent.emit();
  }

  changed(text: string) {
    this.modelChanged.next(text);
  }

  public resetSelectFilter(): void{
    delete this.itemParams[this.searchParam];
    this.initDataList();
  }

  getdisplayLabel(obj){
    let label = obj
    this.displayLabel.forEach(element => {
      label = label[element]
    });
    return label;
  }
}
