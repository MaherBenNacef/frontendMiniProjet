import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categorie: Categorie = new Categorie();
  id:any;
  constructor(private service: CrudCategoriesService, private router: Router , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getCategories(this.id)
      .subscribe(data => {
        console.log(data);
        this.categorie = data;
      }, error => console.log(error));
  }


  GoBack(){
    this.router.navigate(['listCategorie']);
  }
  editCategorie(){
    return this.service.editCategories(this.categorie,this.id).subscribe(
      data => this.router.navigate(['listCategorie'])
          )
  }
}
