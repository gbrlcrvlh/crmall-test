import {CONSTANT_URLS} from "../constant/constant-marvel-api";
import {HttpClient} from "@angular/common/http";

export abstract class BaseService<T> {

  protected BASE_URL = CONSTANT_URLS.BASE_URL;

  constructor(
    public http: HttpClient,
    private URL: string
  ) {
    this.BASE_URL = URL;
  }

  public getParamsString(queryParams): string {
    const params = Object.keys(queryParams ?? {})?.map(key => `${key}=${queryParams[key]?.toString()}`);
    return params.length > 0 ? params.reduce((prev, curr) => `${prev}&${curr}`) : '';
  }
}
