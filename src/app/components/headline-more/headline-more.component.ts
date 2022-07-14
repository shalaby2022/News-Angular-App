import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {readingList_Add} from '../../readingListStore/readingList.action'
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-headline-more',
  templateUrl: './headline-more.component.html',
  styleUrls: ['./headline-more.component.scss']
})
export class HeadlineMoreComponent implements OnInit {
  status:Boolean=false;
  headList:any
  @Input("headline") headline:any
  @Input("index") index:any
  copyHeadList:Array<any>=[]
  constructor(private _route :Router ,private store:Store) { }

  ngOnInit(): void {
    
  
  
  }

  ngAfterViewInit(){
  }
  ngOnDestroy() {
    
    
  }
  showDetails(index:number){
    console.log("headline index is ... " , index)
    console.log('headLine',this.headline)
    this._route.navigate(["headlinedetails/" , index])
  }
  
  saveToRead(){
    console.log('this.headline',this.headline)
    // this._route.navigate(['/readingList'])
    this.store.dispatch(readingList_Add({content:{...this.headline,category:'headline'}}))
  }
  
  
}
