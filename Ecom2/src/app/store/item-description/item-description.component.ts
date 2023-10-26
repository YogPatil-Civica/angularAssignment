import { Component, OnInit } from '@angular/core';
import { ProductRepository } from 'src/app/model/product.repository';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.model';
import { StoreComponent } from '../store.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-item-description',
  templateUrl: './item-description.component.html',
  styleUrls: ['./item-description.component.css']
})
export class ItemDescriptionComponent implements OnInit  {
  product:Product|undefined;

  constructor(public store:StoreComponent, private route:ActivatedRoute,private repository:ProductRepository) { }
  
  ngOnInit()  {
   const productId = this.route.snapshot.params['id'];
   this.product = this.repository.getProduct(productId);
  }

}
