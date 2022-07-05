import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-topbusiness-cards',
  templateUrl: './home-topbusiness-cards.component.html',
  styleUrls: ['./home-topbusiness-cards.component.scss']
})
export class HomeTopbusinessCardsComponent implements OnInit {

  @Input("topbusiness")topbusiness:any

  constructor() { }

  ngOnInit(): void {
  }

}
