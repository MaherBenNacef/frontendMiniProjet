import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudProduitsService } from '../crud-produits.service';
import { Produit } from '../models/produit';

@Component({
  selector: 'app-produit-by-categorie',
  templateUrl: './produit-by-categorie.component.html',
  styleUrls: ['./produit-by-categorie.component.css']
})
export class ProduitByCategorieComponent implements OnInit {
  listProduits: any;
  id:any;
  searchText: any;
  constructor(private service: CrudProduitsService, private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByCategorie();
  }
  getByCategorie() {
    return this.service.produitsByCategorie(this.id).subscribe(
      data =>this.listProduits=data
    )
  }
  GoEdit(id:any){
    return this.router.navigate(['EditProduits/',`${id}`]);
  }
  GoDetail(id:any){
    return this.router.navigate(['detailProduit/',`${id}`]);
  }
  GoBack(){
    return this.router.navigate(['listCategorie']);
  }

  delete(id:any){
    return this.service.deleteProduits(id).subscribe(
      data =>console.log(data),()=>{},()=>{this.GoBack()}
    )
    
  }
}
