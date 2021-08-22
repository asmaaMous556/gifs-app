import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GifsService } from 'src/app/services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private route:ActivatedRoute,private gifsService:GifsService) { 

  
  }

  ngOnInit(): void {
    this.route.params.subscribe(keyword=>{
      console.log(keyword.key);
      this.gifsService.search(keyword.key).subscribe(res=>{console.log(res);})
      
    })
 
  }

}
