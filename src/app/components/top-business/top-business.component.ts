import { FetchDataServiceService } from './../../fetch-data-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-business',
  templateUrl: './top-business.component.html',
  styleUrls: ['./top-business.component.scss']
})
export class TopBusinessComponent implements OnInit {

  topbusinessArray : Array<any> = []

  constructor(private _topbusinessFetch : FetchDataServiceService) { }

  ngOnInit(): void {
    this._topbusinessFetch.getTopBusinessData().subscribe((res)=>{
      console.log(res.articles)
      this.topbusinessArray = res.articles
    })
  }

}
