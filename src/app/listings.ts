import { Injectable, EnvironmentInjector, runInInjectionContext } from '@angular/core';
import { Listing } from './types';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auth, authState } from '@angular/fire/auth';

const httpOptions ={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
};

const httpOptionsWithAuthToken = (token: string) => ({
  headers:new HttpHeaders({
    'Content-Type':'application/json',
    'AuthToken':token,
  })
})

@Injectable({
  providedIn: 'root',
})
export class ListingsService {
  
  constructor(
    private http:HttpClient,
    private auth:Auth,
    private injector:EnvironmentInjector,
  ){}

  getListings():Observable<Listing[]>{
    return this.http.get<Listing[]>('/api/listings');
  }
  getListingById(id:string | null):Observable<Listing>{
    return this.http.get<Listing>(`/api/listings/${id}`);
  }
  addViewToListing(id:string| null):Observable<Listing>{
    return this.http.post<Listing>
    (`/api/listings/${id}/add-view`,{} ,
       httpOptions);
  }

  getListingsForUser():Observable<Listing[]>{
    return new Observable<Listing[]>(observer=>{
      runInInjectionContext(this.injector, ()=>{
        authState(this.auth).subscribe(user=>{
          user && user.getIdToken().then(token=>{
            if(user && token){
              this.http.get<Listing[]>(`/api/users/${user.uid}/listings`, httpOptionsWithAuthToken(token))
              .subscribe(listings=>{observer.next(listings)});
            } else {
              observer.next([]);
            }
          })
        })
      })
    })
  }
  deleteListing(id:string):Observable<any>{
    return new Observable<any>(observer=>{
     authState(this.auth).subscribe(user=>{
      user && user.getIdToken().then(token=>{
        this.http.delete(`/api/listings/${id}`,httpOptionsWithAuthToken(token))
        .subscribe(()=>observer.next(null));
      })
     }) 
    })
     
  }

  createListing(name:string,description:string,price:number):Observable<Listing>{
    return new Observable<Listing>(observer=>{
      runInInjectionContext(this.injector, ()=>{
        authState(this.auth).subscribe(user=>{
          user && user.getIdToken().then(token=>{
            this.http.post<Listing>('/api/listings',
              {name,description,price},
              httpOptionsWithAuthToken(token),
            ).subscribe(listing=>observer.next(listing));
          })
        })
      })
    })
  }
  editListing(id:string,name:string,description:string,price:number):Observable<Listing>{
    return new Observable<Listing>(observer=>{
      runInInjectionContext(this.injector, ()=>{
        authState(this.auth).subscribe(user=>{
          user && user.getIdToken().then(token=>{
            this.http.put<Listing>(`/api/listings/${id}`,
              {name,description,price},
              httpOptionsWithAuthToken(token),
            ).subscribe(listing=>observer.next(listing));
          })
        })
      })
    })
  }
}
