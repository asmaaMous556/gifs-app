import { Route } from '@angular/compiler/src/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
media :any;
gifs: any;
url:string='';
tags: any[]=[]
keyWord:string='';
  constructor(private gifsService:GifsService,private route :Router) { }

  ngOnInit(): void {

    this.gifsService.trendingGifs().subscribe((res:any)=>{
     console.log(res.results);
     this.media=res.results
     this.media.forEach((media :any) => {
      
     // console.log(media.media[0].gif.url)
     });
      })

      this.gifsService.trendingSearch().subscribe((res:any)=>{
        console.log(res.tags)
        this.tags=res.tags
        this.tags.forEach((tag:any)=>{
          console.log(tag.searchterm)
        })
      })
  }
  
  search(keyWord:string){
    console.log(keyWord);
   let url=   this.route.navigate(['/'+keyWord])
    console.log(url);
  }

}
