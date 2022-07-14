import { Injectable } from '@angular/core';


// import { FetchDataServiceService } from './fetch-data-service.service';
import { BehaviorSubject } from 'rxjs';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { staticTopBusiness, staticTopBusinessHeadline } from 'src/app/staticData';
// import { staticTopBusiness, staticTopBusinessHeadline } from 'src/app/staticData';


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
     let resArr=  res.articles.map((ele:any,index:any)=>{
        return {...ele,category:'business',id:index}
       })
      this.getData(resArr)
  
    },(err)=>{
      let resArr=staticTopBusiness.map((ele:any,index:any)=>{
        return {...ele,category:'business',id:index}
       })
      this.getData(resArr)
      
    })
    this.data.getHeadLineData().subscribe(res =>{
      let resArr=  res.articles.map((ele:any,index:any)=>{
        return {...ele,category:'headline',id:index}
       })
      this.getData(resArr)
    },(err)=>{
      let resArr= staticTopBusinessHeadline.map((ele:any,index:any)=>{
        return {...ele,category:'headline',id:index}
       })
      this.getData(resArr)
    })
   }

   getData(articles:any[]){
    this.news=[...this.news,...articles]
  //  console.log('data',this.news)

    
   }

   // the search component will call onSearch Method when The input Changed using 
   // ([ngModel]) && (ngModelChange)
   onSearch(target:any){
   this.inputValue.next(target)
    // console.log('target',target)
    // filtering the ariticle based on The title ,author,desc,content
    this.saveFilteredData=this.news.filter((item:any)=>{
     
     return( 
            (String(item.author)).toLowerCase().trim().includes(target.toLowerCase()) ||
            (String(item.title)).toLowerCase().trim().includes(target.toLowerCase()))
            
 
     })
     if(this.saveFilteredData.length){
      // updating the observable with the new value every time the input changed
      this.filteredData.next([...this.saveFilteredData])
      console.log('this.filteredData',this.saveFilteredData)
     }
    //  console.log('FilteredSearch',this.filteredData)
   }

   getFilteredData(){
    return  this.filteredData.asObservable()
   }
   ngOnDestroy(){
    this.inputValue.next('')
   }
}
