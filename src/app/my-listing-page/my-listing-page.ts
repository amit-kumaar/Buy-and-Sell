import { Component, signal } from '@angular/core';
import { ListingsService } from '../listings';
import { Listing } from '../types';
import { NgFor } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-my-listing-page',
  imports: [RouterLink, NgFor],
  templateUrl: './my-listing-page.html',
  styleUrl: './my-listing-page.css',
})
export class MyListingPage {
  listings = signal<Listing[]>([]);

 constructor(
  private listingsService:ListingsService,
 ){}

 ngOnInit():void{
    this.listingsService.getListingsForUser()
    .subscribe(listings => this.listings.set(listings));
  }
 onDeleteClicked(listingId:string):void{
    this.listingsService.deleteListing(listingId)
    .subscribe(()=>{
      this.listings.update(list => list.filter(l => l.id !== listingId));
    })
 }
}
