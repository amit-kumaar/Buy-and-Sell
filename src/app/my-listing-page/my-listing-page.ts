import { Component } from '@angular/core';
import { fakeListings } from '../fake-data';
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
  listing:Listing[]=[];

 constructor(){}

 ngOnInit():void{
    this.listing=fakeListings;
  }
 onDeleteClicked(listingId:string):void{
   alert(`Deleting your listing with id ${listingId}`)
 }
}
