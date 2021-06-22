import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { Categorie } from '../models/categorie';
@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.css']
})
export class CreateCategoriesComponent implements OnInit {

  categorie: Categorie = new Categorie();
  constructor(private service: CrudCategoriesService, private router: Router) { }

  ngOnInit(): void {
  }

  addCategories(){
    return this.service.addCategories(this.categorie).subscribe(
      data => this.router.navigate(['listCategorie'])
          )
  }

  GoBack(){
    this.router.navigate(['listCategorie']);
  }
}
