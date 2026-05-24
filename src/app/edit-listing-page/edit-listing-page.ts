import { Component } from '@angular/core';
import { ListingDataForm } from '../listing-data-form/listing-data-form';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  imports: [ListingDataForm],
  templateUrl: './edit-listing-page.html',
  styleUrl: './edit-listing-page.css',
})
export class EditListingPage {
listing:Listing | undefined;
  constructor(
    private router:Router,
    private route:ActivatedRoute
  ){}

  ngOnInit():void{
    const id=this.route.snapshot.paramMap.get('id');
    this.listing=fakeListings.find(listing=>listing.id===id)!
  }

  onSubmit():void{
    alert('Saving changes to the listing...')
    this.router.navigateByUrl('/my-listing')
  }
}
