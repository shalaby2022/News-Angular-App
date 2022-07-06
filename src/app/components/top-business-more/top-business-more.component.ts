import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-business-more',
  templateUrl: './top-business-more.component.html',
  styleUrls: ['./top-business-more.component.scss']
})
export class TopBusinessMoreComponent implements OnInit {

  @Input("topbusiness") topbusiness:any
  @Input("index") index:any

  constructor(private _router : Router) { }

  ngOnInit(): void {
  }

  showDetails(index:number){
    this._router.navigate(["topbusinessdetails/" , index])
  }
}
