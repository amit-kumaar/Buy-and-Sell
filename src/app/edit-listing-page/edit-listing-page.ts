import { Component, signal } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { ListingsService } from '../listings';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataForm, NgIf],
  templateUrl: './edit-listing-page.html',
  styleUrl: './edit-listing-page.css',
})
export class EditListingPage {
listing = signal<Listing | undefined>(undefined);
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private listingsService:ListingsService,
  ){}

  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
    .subscribe(listing => this.listing.set(listing));
  }

  onSubmit(listing:Listing):void{
    const id = this.route.snapshot.paramMap.get('id')!;
    this.listingsService.editListing(id, listing.name, listing.description, listing.price)
    .subscribe(()=>{
      this.router.navigateByUrl('/my-listing')
    })
  }
}
