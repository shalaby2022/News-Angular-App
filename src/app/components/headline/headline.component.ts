import { Component, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { staticTopBusinessHeadline } from 'src/app/staticData';
import { HideShowSearchService } from '../search/hide-show-search.service';
// import { staticTopBusinessHeadline } from 'src/app/staticData';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})

export class HeadlineComponent implements OnInit {

  filteredData:any;
  headlineArray: Array<any> = []
  inputValue:any=''
  constructor(private _headlineData : FetchDataServiceService
    ,private search:SearchService,
    private searchStatus:HideShowSearchService
    ) { }

  ngOnInit(): void {
    this.searchStatus.display.next('block')
    this._headlineData.getHeadLineData().subscribe((res:any)=>{
      console.log("results : " , res.articles)
      this.headlineArray = res.articles
    },(err:any)=>{
      this.headlineArray=staticTopBusinessHeadline.map((ele:any) =>{
        return ele
      });
    })

    this.search.getFilteredData().subscribe((res:any) => {
      this.filteredData= res;
  
    }, (err: any) => {
      this.filteredData = [...this.headlineArray]
    })
    this.search.inputValue.subscribe(res => {
      this.inputValue = res;
  
    })
  }
  ngOnDestroy(){
    this.searchStatus.display.next('none');
  }
}
