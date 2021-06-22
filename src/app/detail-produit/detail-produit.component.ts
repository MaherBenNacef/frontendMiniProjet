import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudProduitsService } from '../crud-produits.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  constructor(private service: CrudProduitsService, private router: Router , private route: ActivatedRoute) { }
  id:any;
  produit: any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getProduits(this.id)
      .subscribe(data => {
        console.log(data);
        this.produit = data;
      }, error => console.log(error));
  }

  DetailCategorie(){
    return this.service.detailProduits(this.id).subscribe(
      data => {this.produit=data;
                console.log(this.produit);
      },()=>{},()=>{console.log(this.produit)}
          )
  }
  goBack(){
    this.router.navigate(['listProduits']);
  }
}
