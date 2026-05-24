import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ListingDataForm } from "../listing-data-form/listing-data-form";

@Component({
  selector: 'app-new-listing-page',
  imports: [FormsModule, ListingDataForm],
  templateUrl: './new-listing-page.html',
  styleUrl: './new-listing-page.css',
})
export class NewListingPage {
 name:string='';
 description:string='';
 price:string='';

 constructor(
  private router:Router,
 ){}

 ngOnInit():void{}


 onSubmit():void{
  alert('Creating a new listing...')
  this.router.navigateByUrl('/my-listing')
 }

}
