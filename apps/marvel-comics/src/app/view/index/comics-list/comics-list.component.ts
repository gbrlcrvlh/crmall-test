import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ComicsService} from "../../../service/marvel/comics.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {queryParamsEventService} from "../../../service/events/queryParamsEvent.service";
import {ComicsSelectedEventService} from "../../../service/events/comicsSelectedEvent.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogComicsDetailComponent} from "../dialog-comics-detail/dialog-comics-detail.component";

@Component({
  selector: 'crmall-test-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.scss']
})
export class ComicsListComponent implements OnInit, AfterViewInit {

  public isLoading = false;

  public comicsList = [];
  public selectedComicsList = [];

  public queryParams = {
    offset: 0,
    limit: 50
  };

  @ViewChild('comicListContainer') listContainer;

  constructor(
    private comicsService: ComicsService,
    private http: HttpClient,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private queryParamsEventService: queryParamsEventService,
    private comicsSelectedEventService: ComicsSelectedEventService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.initDataList();

    this.queryParamsEventService.queryParams.subscribe(params => {
      this.queryParams.offset = 0;
      Object.keys(params).forEach(param => {
          if(params[param]){
            this.queryParams[param] = params[param];
          }else{
            delete this.queryParams[param];
          }
        });
      this.initDataList();
    })
  }

  ngAfterViewInit() {
    this.listContainer.nativeElement.addEventListener('scroll', event => this.loadMoreOnScroll(event));
  }

  toggleSelectedComic(item){
    const index = this.selectedComicsList.findIndex(x => x.id == item.id);

    if(index > -1){
      this.selectedComicsList.splice(index, 1);
    }else{
      this.selectedComicsList.push(item);
    }

    this.comicsSelectedEventService.updatecomicsList(this.selectedComicsList);
  }

  loadMoreOnScroll(event) {
    if (event.target.scrollTop >= event.target.scrollHeight-1000 && !this.isLoading) {
      this.getNewDataList().then((data: any[])=> {
        this.comicsList = this.comicsList.concat(data);
      });
    }
  }

  initDataList(){
    this.queryParams.offset = 0;
    this.getNewDataList().then((data: any[])=> {
      this.comicsList = data;

    });
  }

  getNewDataList(){
    this.isLoading = true;
    return new Promise(resolve => {
      this.comicsService.getAll(this.queryParams).subscribe(res => {
        this.queryParams.offset = this.queryParams.offset+this.queryParams.limit;
        this.isLoading = false;
        resolve(res.data.results);
      });
    });
  }

  public getImage(item){
    for(const img of item['images']){
      return img.path + '/portrait_incredible.'+img.extension;
    }

    return 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_incredible.jpg';
  }

  openComicsDetail(item) {
    this.dialog.open(DialogComicsDetailComponent, {
      data: { item } ,
      panelClass: 'dialog-show-comic-detail'
    })
  }

  findItemIdInSelectedList(item){
    return this.selectedComicsList.find(x => x.id == item.id);
  }

}
