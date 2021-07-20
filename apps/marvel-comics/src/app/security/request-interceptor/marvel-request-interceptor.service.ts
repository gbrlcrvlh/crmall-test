import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Md5} from "md5-typescript";

@Injectable()
export class MarvelRequestInterceptorService implements HttpInterceptor {

  protected _publicKey = '1f44698c546637647a6919c2d59b4466';
  protected _privateKey = '0e03872ba9301ce30241d2f239572d5562153f5c'

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(request.url.indexOf('gateway.marvel.com:443')){
      const timestamp = Date.now().toString();

      request = request.clone({
        setParams: {
          ts: timestamp,
          apikey: this._publicKey,
          hash: this.getHash(timestamp)
        }
       });
     }
    return next.handle(request);
  }

  protected getHash(s: string) : string {
    return Md5.init(s+this._privateKey+this._publicKey);
  }

}
