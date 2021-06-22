import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { CrudProduitsService } from '../crud-produits.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {
  produit: Produit = new Produit();
  id:any;
  constructor(private service: CrudProduitsService, private router: Router , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getProduits(this.id)
      .subscribe(data => {
        console.log(data);
        this.produit = data;
      }, error => console.log(error));
  }

  editCategorie(){
    return this.service.editProduits(this.produit,this.id).subscribe(
      data => this.router.navigate(['listProduits'])
          )
  }
  GoBack(){
    this.router.navigate(['listProduits']);
  }

}
