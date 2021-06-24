import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { FormsModule, NgForm } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { ErrorComponent } from './error/error.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProduitByCategorieComponent } from './produit-by-categorie/produit-by-categorie.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCategoriesComponent,
    CreateCategoriesComponent,
    EditComponent,
    DetailCategorieComponent,
    ListProduitsComponent,
    EditProduitComponent,
    DetailProduitComponent,
    CreateProduitComponent,
    ErrorComponent,
    ProduitByCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
