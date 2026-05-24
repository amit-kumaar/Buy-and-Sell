import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-listing-detail-page',
  imports: [RouterLink],
  templateUrl: './listing-detail-page.html',
  styleUrl: './listing-detail-page.css',
})
export class ListingDetailPage {
  listing:Listing | undefined;

  constructor(
    private route:ActivatedRoute,
  ){}

  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.listing=fakeListings.find(listing=>listing.id===id);
  }
}
