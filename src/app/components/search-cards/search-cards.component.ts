import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { readingList_Add } from 'src/app/readingListStore/readingList.action';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.component.html',
  styleUrls: ['./search-cards.component.scss']
})
export class SearchCardsComponent implements OnInit {
  @Input()filteredData:any;
  constructor(private store:Store<{readingList:[]}>,private _route:Router) { }

  ngOnInit(): void {
  }

  saveToRead(index:any) {
    // this._route.navigate(['/readingList'])
    console.log('index',index)
    console.log('data',this.filteredData[index])
    this.store.dispatch(readingList_Add({ content: { ...this.filteredData[index],  } }))
  }

  showDetails(data:any) {
    console.log('data from show Details',data)
    console.log("headline index is ... ", data.id)
    data.category=='business'?this._route.navigate([`/topbusinessdetails/${data.id}`]):this._route.navigate([`/headlinedetails/${data.id}`])
   

  }
}
