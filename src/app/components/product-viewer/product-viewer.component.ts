import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/api/models';
import { ProductService } from 'src/app/api/services/product.service';

@Component({
  selector: 'app-product-viewer',
  templateUrl: './product-viewer.component.html',
  styleUrls: ['./product-viewer.component.scss']
})
export class ProductViewerComponent implements OnInit {
  products: Product[] = [];
  
  currentPage: number = 1;
  itemsPerPage: number = 16;

  totalItems: number = 0;
  totalPages: number = 0;

  constructor(private store: ProductService) {}

  ngOnInit() {
    this.loadTotalItems();
  }

  loadTotalItems() {
    this.store.count().subscribe(total => {
      this.totalItems = total;
      this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
      this.loadProducts(); // Carga los productos después de obtener el total
    });
  }

  loadProducts() {
    this.store.getAll(this.currentPage, this.itemsPerPage)
      .subscribe(response => this.products = response);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadProducts();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadProducts();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.loadProducts();
    }
  }

  get totalPagesArray(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

}