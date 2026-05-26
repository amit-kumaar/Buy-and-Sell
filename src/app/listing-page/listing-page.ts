import { Component } from '@angular/core';
import { Listing } from '../types';
import { NgForOf, AsyncPipe } from '@angular/common';
import { RouterLink } from "@angular/router";
import { ListingsService } from '../listings';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listing-page',
  imports: [NgForOf, AsyncPipe, RouterLink],
  templateUrl: './listing-page.html',
  styleUrl: './listing-page.css',
})
export class ListingPage {
  listings$: Observable<Listing[]>;

  constructor(private listingsService: ListingsService) {
    this.listings$ = this.listingsService.getListings();
  }
}
