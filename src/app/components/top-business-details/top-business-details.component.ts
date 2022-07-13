import { ActivatedRoute } from '@angular/router';
import { FetchDataServiceService } from './../../fetch-data-service.service';
import { Component, OnInit } from '@angular/core';
import { staticTopBusiness } from 'src/app/staticData';

@Component({
  selector: 'app-top-business-details',
  templateUrl: './top-business-details.component.html',
  styleUrls: ['./top-business-details.component.scss']
})
export class TopBusinessDetailsComponent implements OnInit {

  topBusinessArr : Array<any> = []
  topBusinessDetails: any

  constructor(private _activeRoute : ActivatedRoute  , private _topBusinessData : FetchDataServiceService) { }


  ngOnInit(): void {
    const topbusinessID = this._activeRoute.snapshot.params["id"]
    console.log('topbusinessID' , topbusinessID)
    this._topBusinessData.getTopBusinessData().subscribe((res)=>{
      this.topBusinessArr = res.articles
      this.topBusinessDetails =  this.topBusinessArr.find((elem:any , index:number)=>{
        if(index == topbusinessID){
          console.log("elems" , elem)
          return elem
        }
      })
    },
    (err)=>{
      this.topBusinessArr=staticTopBusiness.map((ele:any,index:any)=>{
        return {...ele, id:index}
      })
      this.topBusinessDetails=this.topBusinessArr.find((ele:any,index:any)=>{
         return index ==topbusinessID;
      })
    })
  }

}
