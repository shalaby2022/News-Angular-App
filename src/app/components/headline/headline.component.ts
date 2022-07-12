import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { staticTopBusinessHeadline } from 'src/app/staticData';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})

export class HeadlineComponent implements OnInit {

  headlineArray: Array<any> = []

  constructor(private _headlineData : FetchDataServiceService) { }

  ngOnInit(): void {
    this._headlineData.getHeadLineData().subscribe((res:any)=>{
      console.log("results : " , res.articles)
      this.headlineArray = res.articles
    },(err:any)=>{
      this.headlineArray=staticTopBusinessHeadline.map(ele =>{
        return {...ele,reading:false}
      });
    })
  }

}
