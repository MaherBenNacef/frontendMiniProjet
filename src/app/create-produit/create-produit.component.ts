import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudProduitsService } from '../crud-produits.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {

  produit: Produit = new Produit();
  constructor(private service: CrudProduitsService, private router: Router, private route: ActivatedRoute) { }
  id:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
  }

  addProduit(){
    return this.service.addProduits(this.produit,this.id).subscribe(
      data => this.router.navigate(['listProduits'])
          )
  }

  GoBack(){
    this.router.navigate(['listProduits']);
  }

}
