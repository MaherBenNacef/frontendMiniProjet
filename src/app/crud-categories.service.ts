import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorie } from './models/categorie';

@Injectable({
  providedIn: 'root'
})
export class CrudCategoriesService {

  URL="http://localhost:8090/categories";

 
  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any>{
    return this.http.get(`${this.URL}`);
  }
  addCategories(categorie : any){
    return this.http.post(`${this.URL}`,categorie);
  }

  deleteCategorie(id:any){
    return this.http.delete(`${this.URL}/${id}`);
  }
  editCategories(categorie : any, id:any){
    return this.http.put(`${this.URL}/${id}`,categorie);
  }
  detailCategorie(id:any):Observable<any>{
    return this.http.get(`${this.URL}/${id}`);
  }
  getCategories(id: number ): Observable<any> {
    return this.http.get(this.URL+'/' + id);
  }

 
}
