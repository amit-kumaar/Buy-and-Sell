import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Listing } from '../types';
import { RouterLink } from '@angular/router';
import { ListingsService } from '../listings';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-listing-detail-page',
  imports: [RouterLink, NgIf],
  templateUrl: './listing-detail-page.html',
  styleUrl: './listing-detail-page.css',
})
export class ListingDetailPage {
  isLoading = signal(true);
  listing = signal<Listing | undefined>(undefined);

  constructor(
    private route:ActivatedRoute,
    private listingsService:ListingsService,
  ){}

  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.listingsService.getListingById(id)
    .subscribe({
      next: listing=>{
        this.listing.set(listing);
        this.isLoading.set(false);
      },
      error: err=>{
        console.error('Failed to load listing', err);
        this.isLoading.set(false);
      }
    });

    this.listingsService.addViewToListing(id)
    .subscribe(()=>{
      console.log('View added successfully');
    });
  }
}
