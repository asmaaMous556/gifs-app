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
  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {

    this.gifsService.trendingGifs().subscribe((res:any)=>{
      // this.media=res.results[0].media[0].gif.url;
    res.results.forEach((items:any) => {
      this.media=items
     console.log(this.media.media)
      })
      
    })
  }

}
