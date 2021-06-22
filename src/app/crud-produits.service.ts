import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudProduitsService {

  URLProduit="http://localhost:8080/produits";
  constructor(private http: HttpClient) { }

  getAllProduits(){
    return this.http.get(`${this.URLProduit}`);
  }

  deleteProduits(id:any){
    return this.http.delete(`${this.URLProduit}/${id}`);
  }
  editProduits(produit : any, id:any){
    return this.http.put(`${this.URLProduit}/${id}`,produit);
  }
  getProduits(id: number ): Observable<any> {
    return this.http.get(this.URLProduit+'/' + id);
  }

  detailProduits(id:any):Observable<any>{
    return this.http.get(`${this.URLProduit}/${id}`);
  }
  addProduits(produit : any, id:any){
    return this.http.post(`${this.URLProduit}/${id}`,produit);
  }
}
