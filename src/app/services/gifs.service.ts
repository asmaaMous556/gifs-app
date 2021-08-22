import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {} from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GifsService {
 url='https://g.tenor.com/v1/';
 key='OAEK4U2HZMC5';
 
  constructor( private http :HttpClient) { }

  trendingGifs(){
    return this.http.get(this.url+'trending',{
      params:{
        key:this.key
      }
    });
  }

  search (q:string){
   return this.http.get(this.url+'search',{
     params:{
       q:q,
       key:this.key
     }
   })
  }

  trendingSearch(){
    return this.http.get(this.url+'categories',{
      params:{
        key:this.key
      }
    })
  }
  
}
