import { FetchDataServiceService } from './../../fetch-data-service.service';
import { Component, OnInit } from '@angular/core';
import { staticTopBusiness } from 'src/app/staticData';
import { SearchService } from '../search/search.service';
import { HideShowSearchService } from '../search/hide-show-search.service';

@Component({
  selector: 'app-top-business',
  templateUrl: './top-business.component.html',
  styleUrls: ['./top-business.component.scss']
})
export class TopBusinessComponent implements OnInit {

  topbusinessArray : Array<any> = []
  filteredData:any;
  inputValue:any;
  constructor(private _topbusinessFetch : FetchDataServiceService
    ,private search:SearchService,
    private searchStatus:HideShowSearchService) { }

  ngOnInit(): void {
    this.searchStatus.display.next('block')
    this._topbusinessFetch.getTopBusinessData().subscribe((res)=>{
     
      this.topbusinessArray = res.articles.map((ele:any,index:any)=>{
        return {...ele,id:index,category:'business'}
      })
    },(err)=>{this.topbusinessArray=staticTopBusiness.map((ele:any ,index:any) =>{
      return {...ele,id:index,category:'business'}
    })})


    this.search.getFilteredData().subscribe((res:any) => {
      this.filteredData= res.map((ele:any,index:any)=>{
        return ele
      });
  
    }, (err: any) => {
      this.filteredData = [...this.topbusinessArray]
    })
    this.search.inputValue.subscribe(res => {
      this.inputValue = res
  
    })
  }

ngOnDestroy(){
  this.searchStatus.display.next('none')
  this.search.inputValue.next('')
}
}
