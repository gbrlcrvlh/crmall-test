import {Subject} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class queryParamsEventService {
  public queryParams: Subject<any[]> = new Subject<any[]>();

  updateQueryParams(params){
    this.queryParams.next(params);
  }

}
