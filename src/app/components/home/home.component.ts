import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagURL: string = "../../assets/news-break.jpg" ;

  //headline fetch data variables
  HeadlineItems : Array<any> = []
  fetchedHeadlineData:any

  //top business fetch data variables
  TopbusinessItem:Array<any> = []
  fetchedTopbusinessData:any


  constructor(private _dataService : FetchDataServiceService) { }

  ngOnInit(): void {

    this.fetchedHeadlineData = this._dataService.getHeadLineData().subscribe((res:any)=>{
      console.log(res.articles);
      this.HeadlineItems = res.articles
      this.HeadlineItems = this.HeadlineItems.sort(()=> Math.random() - 0.5)
      this.HeadlineItems = this.HeadlineItems.slice(7)
      console.log("new product is ... " , this.HeadlineItems)
    },
    (err:any)=> {console.log("Error")},
    ()=> console.log("complete"))

    this.fetchedTopbusinessData = this._dataService.getTopBusinessData().subscribe((res:any)=>{
      console.log("top bustiness result " , res.articles.slice(14))
      this.TopbusinessItem = res.articles
      this.TopbusinessItem = this.TopbusinessItem.sort(()=> Math.random() - 0.5)
      this.TopbusinessItem = this.TopbusinessItem.slice(17)
    },
    (err:any)=> {console.log("Error")},
    ()=> console.log("complete"))

  }

}
