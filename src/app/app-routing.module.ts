import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateCategoriesComponent } from './create-categories/create-categories.component';
import { CreateProduitComponent } from './create-produit/create-produit.component';
import { DetailCategorieComponent } from './detail-categorie/detail-categorie.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { EditProduitComponent } from './edit-produit/edit-produit.component';
import { EditComponent } from './edit/edit.component';
import { ErrorComponent } from './error/error.component';
import { ListCategoriesComponent } from './list-categories/list-categories.component';
import { ListProduitsComponent } from './list-produits/list-produits.component';

const routes: Routes = [
  { path: "", component: ListCategoriesComponent},
  {path:"listCategorie" , component: ListCategoriesComponent},
  {path:"EditCategories/:id",component:EditComponent},
  {path:"CreateCategories", component:CreateCategoriesComponent},
  {path:"detailCategories/:id",component:DetailCategorieComponent},
  {path:"listProduits",component:ListProduitsComponent},
  {path:"EditProduits/:id",component:EditProduitComponent},
  {path:"detailProduit/:id",component:DetailProduitComponent},
  {path:"createProduit/:id",component:CreateProduitComponent},
  { path: "**", component: ErrorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
