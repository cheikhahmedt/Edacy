import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.dev';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private endpointPrefix = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public getAllProducts(){
    return this.http.get(`${this.endpointPrefix}/products`);
  }

  public getProductById(id: number){
    return this.http.get(`${this.endpointPrefix}/products/${id}`);
  }

  public updateProduct(id: number, payload: any) {
    return this.http.patch(`${this.endpointPrefix}/products/${id}`,payload);
  }

  public deleteProduct(id: number) {
    return this.http.delete(`${this.endpointPrefix}/products/${id}`);
  }

}
