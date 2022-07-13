import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { HideShowSearchService } from '../search/hide-show-search.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  listLen:any=0;
  display:any;
  constructor(private store :Store<{readingList:[]}>,private searchStatus:HideShowSearchService) { }

  ngOnInit(): void {
    this.store.subscribe(res =>{
      this.listLen=res.readingList.length;
    })
    this.searchStatus.getSearchStatus().subscribe(res =>{console.log('res nav',res);
  this.display=res})
  }

}
