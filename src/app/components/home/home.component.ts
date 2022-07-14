import { Component, Input, OnInit } from '@angular/core';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { SearchService } from '../search/search.service';

import { elementAt } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { staticTopBusiness, staticTopBusinessHeadline } from 'src/app/staticData';
import { readingList_Add } from 'src/app/readingListStore/readingList.action';
import { HideShowSearchService } from '../search/hide-show-search.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // variable for search 
  filteredData: any[] = [];
  inputValue: any = '';
  imagURL: string = "../../assets/news-break.jpg";

  //headline fetch data variables
  HeadlineItems: Array<any> = []
  fetchedHeadlineData: any

  //top business fetch data variables
  TopbusinessItem: Array<any> = []
  fetchedTopbusinessData: any
  @Input() homeData: any;
  index: any;
  constructor(private _dataService: FetchDataServiceService,
    private search: SearchService,
    private store: Store<{ readingList: [] }>
    , private _route: Router,
    private searchStatus:HideShowSearchService) { }


  ngOnInit(): void {

    this.searchStatus.display.next('block')
    this.fetchedHeadlineData = this._dataService.getHeadLineData().subscribe((res: any) => {
     
      this.HeadlineItems = res.articles
      this.HeadlineItems = this.HeadlineItems.sort(() => Math.random() - 0.5)
      this.HeadlineItems = this.HeadlineItems.slice(7)
      
    },
      (err: any) => {
       
        const dumHeadLineData=staticTopBusinessHeadline.slice(0,3);
        
        
        this.HeadlineItems = dumHeadLineData.map(ele => {
          return { ...ele, reading: false }
        })
        
      },
      () => {})

    this.fetchedTopbusinessData = this._dataService.getTopBusinessData().subscribe((res: any) => {
      
      this.TopbusinessItem = res.articles
      this.TopbusinessItem = this.TopbusinessItem.sort(() => Math.random() - 0.5)
      this.TopbusinessItem = this.TopbusinessItem.slice(17)
    },
      (err: any) => {
        
        const dumStatictopBusiness=staticTopBusiness.slice(0,3);
        
      
        this.TopbusinessItem = dumStatictopBusiness.map((ele: any) => {
          return ele
        })
        
      },
      () => {})

    this.search.getFilteredData().subscribe(res => {
      this.filteredData = res;

    }, (err: any) => {
      this.filteredData = [...this.HeadlineItems, ...this.TopbusinessItem]
    })
    this.search.inputValue.subscribe(res => {
      this.inputValue = res;

    })

    this.searchStatus.getSearchStatus().subscribe(res =>res)
  }

  saveToRead(index:any) {
    // this._route.navigate(['/readingList'])
    
    this.store.dispatch(readingList_Add({ content: { ...this.filteredData[index], id: index, category: 'headline' } }))
  }

  showDetails(index: number) {
    this._route.navigate(["headlinedetails/", index])
  }

  // clg home Data
 ngOnDestroy(){
  this.searchStatus.display.next('none')
  this.search.inputValue.next('')
 }

}
