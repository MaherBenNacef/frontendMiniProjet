import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-detail-categorie',
  templateUrl: './detail-categorie.component.html',
  styleUrls: ['./detail-categorie.component.css']
})
export class DetailCategorieComponent implements OnInit {

  constructor(private service: CrudCategoriesService, private router: Router , private route: ActivatedRoute ) { }
  id:any;
  categorie: any;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getCategories(this.id)
      .subscribe(data => {
        console.log(data);
        this.categorie = data;
      }, error => console.log(error));
  }

  DetailCategorie(){
    return this.service.detailCategorie(this.id).subscribe(
      data => {this.categorie=data;
                console.log(this.categorie);
      },()=>{},()=>{console.log(this.categorie)}
          )
  }

}
