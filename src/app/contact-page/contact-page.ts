import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
email:string='';
message:string='';
listing:Listing|undefined;

constructor(
  private route:ActivatedRoute,
  private router:Router
){}

ngOnInit():void{
  const id= this.route.snapshot.paramMap.get('id');
  this.listing=fakeListings.find(listing=>listing.id==id);
  this.message=`Hii, I'm interested in your ${this.listing?.name.toLowerCase()}!`;
}
sendMessage():void{
  alert('Your message has been sent!');
  this.router.navigateByUrl('/listing');
}

}
