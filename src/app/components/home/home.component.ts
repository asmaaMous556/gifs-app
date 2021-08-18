import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
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
  constructor(private gifsService:GifsService) { }

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

}
