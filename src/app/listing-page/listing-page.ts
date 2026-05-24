import { Component } from '@angular/core';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';
import { NgForOf } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-listing-page',
  imports: [NgForOf, RouterLink],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
})
export class ListingPage {
  listing:Listing[]=[];
 
  constructor(){}

  ngOnInit():void{
    this.listing=fakeListings;
  }
}
