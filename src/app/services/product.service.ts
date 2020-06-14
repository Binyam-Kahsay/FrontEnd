import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../common/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json'

  constructor(private httpClient: HttpClient) { }

  getProductList(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

}

// interface GetResponse {
//   _embedded:{
//     products: Product[];
//   }
//
// }
