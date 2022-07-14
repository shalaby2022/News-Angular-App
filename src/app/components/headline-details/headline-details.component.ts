import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataServiceService } from 'src/app/fetch-data-service.service';
import { staticTopBusinessHeadline } from 'src/app/staticData';

@Component({
  selector: 'app-headline-details',
  templateUrl: './headline-details.component.html',
  styleUrls: ['./headline-details.component.scss']
})
export class HeadlineDetailsComponent implements OnInit {

  headlineDetails:any
  headlineFetch:Array<any> = []

  constructor(private _activeRoute :ActivatedRoute , private _headlineData : FetchDataServiceService) { }

  ngOnInit(): void {
    const headlineID = this._activeRoute.snapshot.params["id"]
    
    this._headlineData.getHeadLineData().subscribe((res:any)=>{
      this.headlineFetch = res.articles
      
      this.headlineDetails = this.headlineFetch.find(( elem:any , index:number)=>{
        if(index == headlineID){
          return elem
        }
      })
    },(err)=>{
      this.headlineFetch=staticTopBusinessHeadline.map((ele:any,index:any)=>{
        return {...ele,id:index}
      })
      this.headlineDetails=this.headlineFetch.find((ele,index)=>{
        return index ==headlineID;
      })

    })
  }

}
