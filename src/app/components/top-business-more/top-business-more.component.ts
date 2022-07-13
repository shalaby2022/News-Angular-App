import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { readingList_Add } from 'src/app/readingListStore/readingList.action';

@Component({
  selector: 'app-top-business-more',
  templateUrl: './top-business-more.component.html',
  styleUrls: ['./top-business-more.component.scss']
})
export class TopBusinessMoreComponent implements OnInit {

  @Input("topbusiness") topbusiness:any
  @Input("index") index:any

  constructor(private _router : Router,private store:Store<{readingList:[]}>) { }

  ngOnInit(): void {
  }

  showDetails(index:number){
    this._router.navigate(["topbusinessdetails/" , index])
  }

  saveToRead(){
    // this._route.navigate(['/readingList'])
    this.store.dispatch(readingList_Add({content:{...this.topbusiness,id:this.index,category:'business'}}))
  }
}
