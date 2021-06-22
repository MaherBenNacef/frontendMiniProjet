import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { CrudProduitsService } from '../crud-produits.service';

@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  constructor(private service: CrudProduitsService, private router: Router) { }
  listProduits: any;
  ngOnInit(): void {
    this.getListProduits();
  }

  getListProduits() {
    return this.service.getAllProduits().subscribe(
      data => this.listProduits = data
    )
  }
  delete(id:any){
    return this.service.deleteProduits(id).subscribe(
      data =>this.goBack()
    )
  }
  GoEdit(id:any){
    return this.router.navigate(['EditProduits/',`${id}`]);
  }
  GoDetail(id:any){
    return this.router.navigate(['detailProduit/',`${id}`]);
  }
  goBack(){
    return this.router.navigate(['listCategorie']);
  }
}
