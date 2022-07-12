import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromList } from 'src/app/readingListStore/readingList.action';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
 list:any
  constructor(private store:Store<{readingList:[]}>) { }

  ngOnInit(): void {
    this.store.subscribe(res =>{console.log(res.readingList);this.list=res.readingList})
  }

  deletFromList(index:number){
    console.log('clicked')
    this.store.dispatch(removeFromList({index:index}))
  }

}
