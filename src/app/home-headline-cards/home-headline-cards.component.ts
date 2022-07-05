import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-home-headline-cards',
  templateUrl: './home-headline-cards.component.html',
  styleUrls: ['./home-headline-cards.component.scss']
})
export class HomeHeadlineCardsComponent implements OnInit {

  @Input("headline") headline : any

  constructor() { }

  ngOnInit(): void {

  }

}
