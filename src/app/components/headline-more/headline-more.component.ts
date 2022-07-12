import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headline-more',
  templateUrl: './headline-more.component.html',
  styleUrls: ['./headline-more.component.scss']
})
export class HeadlineMoreComponent implements OnInit {
  changeReadingColor:Boolean=false;
  @Input("headline") headline:any
  @Input("index") index:any

  constructor(private _route :Router) { }

  ngOnInit(): void {
  }

  showDetails(index:number){
    console.log("headline index is ... " , index)
    this._route.navigate(["headlinedetails/" , index])
  }
  readingListClicked(){
    console.log('clicked')
    this.changeReadingColor=true;
  }
}
