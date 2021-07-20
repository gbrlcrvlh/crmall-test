import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ComicsSelectedEventService {
  public comicsList: Subject<any[]> = new Subject<any[]>();

  updatecomicsList(items){
    this.comicsList.next(items);
  }

}
