import { Routes } from '@angular/router';
import { ListingPage } from "./listing-page/listing-page";
import { ContactPage } from './contact-page/contact-page';
import { EditListingPage } from './edit-listing-page/edit-listing-page';
import { MyListingPage } from './my-listing-page/my-listing-page';
import { NewListingPage } from './new-listing-page/new-listing-page';
import { ListingDetailPage } from './listing-detail-page/listing-detail-page';

export const routes: Routes = [
    {path:'',redirectTo:'/listing',pathMatch:'full'},
    {path:'listing',component:ListingPage},
    {path:'listing/:id',component:ListingDetailPage},
    {path:'contact/:id',component:ContactPage},
    {path:'edit-listing/:id',component:EditListingPage},
    {path:'my-listing',component:MyListingPage},
    {path:'new-listing',component:NewListingPage}
];
