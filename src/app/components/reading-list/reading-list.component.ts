import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { removeFromList } from 'src/app/readingListStore/readingList.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent implements OnInit {
 list:any
  constructor(private store:Store<{readingList:[]}>,private router:Router) { }

  ngOnInit(): void {
    this.store.subscribe(res =>{console.log(res.readingList);
      this.list=res.readingList
      localStorage.setItem('readingList',JSON.stringify(this.list))
    })
  }

  deletFromList(index:number){
    console.log('clicked')
    this.store.dispatch(removeFromList({index:index}))
    localStorage.setItem('readingList',JSON.stringify(this.list))
  }

  navigateToDetails(item:any,index:any){
   item.category=='headline'? this.router.navigate([`headlinedetails/${item.id}`]):this.router.navigate([`/topbusinessdetails/${item.id}`])
  }

}
