import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingDataForm } from "../listing-data-form/listing-data-form";
import { ListingsService } from '../listings';
import { Listing } from '../types';


@Component({
  selector: 'app-new-listing-page',
  imports: [FormsModule, ListingDataForm,],
  templateUrl: './new-listing-page.html',
  styleUrl: './new-listing-page.css',
})
export class NewListingPage {
 name:string='';
 description:string='';
 price:string='';

 constructor(
  private router:Router,
  private listingsService:ListingsService,
 ){}

 ngOnInit():void{}


 onSubmit(listing: Listing): void {
  this.listingsService.createListing(listing.name, listing.description, listing.price)
  .subscribe(()=>{
    this.router.navigateByUrl('/my-listing')
  })
 }

}
