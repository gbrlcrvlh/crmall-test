import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CONSTANT_URLS} from "../../constant/constant-marvel-api";
import {Observable} from "rxjs";
import {BaseService} from "../base.service";

@Injectable({
  providedIn: 'root'
})
export class SeriesService extends BaseService<any>{

  constructor(http: HttpClient) {
    super(http, CONSTANT_URLS.SERIES);
  }

  public getAll(queryParams?): Observable<any> {
    const params = this.getParamsString(queryParams);
    return this.http.get<any>(`${this.BASE_URL}?${params}`);
  }
}
