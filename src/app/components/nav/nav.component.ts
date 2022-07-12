import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  listLen:any=0;
  constructor(private store :Store<{readingList:[]}>) { }

  ngOnInit(): void {
    this.store.subscribe(res =>{
      this.listLen=res.readingList.length;
    })
  }

}
