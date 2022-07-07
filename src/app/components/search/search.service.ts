import { Injectable } from '@angular/core';


// import { FetchDataServiceService } from './fetch-data-service.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';


// mainly fetching the data from the apis and 
// create observable state to get changed based on the input value 
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  news:any=[]
  saveFilteredData=[]
  inputValue:BehaviorSubject<any>=new BehaviorSubject<any>('')
  filteredData:BehaviorSubject<any[]>=new BehaviorSubject<any[]>([])
  constructor(private data:FetchDataServiceService) {

    this.data.getTopBusinessData().subscribe(res =>{
      
      this.getData(res.articles)
  
    })
    this.data.getHeadLineData().subscribe(res =>{
      
      this.getData(res.articles)
    })
   }

   getData(articles:any[]){
    this.news=[...this.news,...articles]
   

    
   }

   // the search component will call onSearch Method when The input Changed using 
   // ([ngModel]) && (ngModelChange)
   onSearch(target:any){
   this.inputValue.next(target)
    // console.log('target',target)
    // filtering the ariticle based on The title ,author,desc,content
    this.saveFilteredData=this.news.filter((item:any)=>{
     
     return (String(item.content)).toLowerCase().trim().startsWith(target.toLowerCase())||
            (String(item.author)).toLowerCase().trim().startsWith(target.toLowerCase()) ||
            (String(item.title)).toLowerCase().trim().startsWith(target.toLowerCase())||
            (String(item.description)).toLowerCase().trim().startsWith(target.toLowerCase());
 
     })
     if(this.saveFilteredData.length){
      // updating the observable with the new value every time the input changed
      this.filteredData.next([...this.saveFilteredData])
     }
    //  console.log('FilteredSearch',this.filteredData)
   }

   getFilteredData(){
    return  this.filteredData.asObservable()
   }
}
