import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private service: CrudCategoriesService, private router: Router) { }
  categorie: Categorie = new Categorie();
  listCategories: any;
  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories() {
    return this.service.getAllCategories().subscribe(
      data => this.listCategories = data
    )
  }
  addCategories(categorie : any){
    return this.service.addCategories(this.categorie).subscribe(
      data => this.listCategories = data
    )
  }
  goCreate(){
    return this.router.navigate(['CreateCategories']);
  }
  delete(id:any){
    return this.service.deleteCategorie(id).subscribe(
      data =>this.getListCategories()
    )
  }
  GoEdit(id:any){
    return this.router.navigate(['EditCategories/',`${id}`]);
  }
  GoDetail(id:any){
    return this.router.navigate(['detailCategories/',`${id}`]);
  }
  getListProduits(){
    return this.router.navigate(['listProduits']);
  }
}
