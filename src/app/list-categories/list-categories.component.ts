import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudCategoriesService } from '../crud-categories.service';
import { Categorie } from '../models/categorie';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  constructor(private service: CrudCategoriesService, private router: Router) { }
  categorie: Categorie = new Categorie();
  listCategories: any;
  fileName = 'ExcelSheet.xlsx';
  ngOnInit(): void {
    this.getListCategories();
  }

  getListCategories() {
    return this.service.getAllCategories().subscribe(
      data => this.listCategories = data
    )
  }
  addCategories(categorie : any){
    return this.service.addCategories(this.categorie).subscribe(
      data => this.listCategories = data
    )
  }
  goCreate(){
    return this.router.navigate(['CreateCategories']);
  }
  goCreateProduit(id:any){
    return this.router.navigate(['createProduit/',`${id}`]);
  }
  delete(id:any){
    return this.service.deleteCategorie(id).subscribe(
      data =>this.getListCategories()
    )
  }
  GoEdit(id:any){
    return this.router.navigate(['EditCategories/',`${id}`]);
  }
  GoDetail(id:any){
    return this.router.navigate(['detailCategories/',`${id}`]);
  }
  getListProduits(){
    return this.router.navigate(['listProduits']);
  }

  searchText: any;

  exportToExcel(): void{
    const element = document.getElementById('excel-table');

    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);


    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws , 'Sheet1' );

    XLSX.writeFile(wb, this.fileName);
  }
  
  public openPDF(): void {
    const DATA = document.getElementById('excel-table');

    if (DATA) {
      html2canvas(DATA).then(canvas => {

        const fileWidth = 208;
        const fileHeight = canvas.height * fileWidth / canvas.width;

        const FILEURI = canvas.toDataURL('image/png');
        const PDF = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);

        PDF.save('angular-demo.pdf');
      });
    }
    

   
  }
}
