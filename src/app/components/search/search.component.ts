import { getLocaleDateFormat } from '@angular/common';
import { compileDeclareClassMetadata } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SearchService } from './search.service';
// import { SearchService } from './search.service';
// import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
 
 

 filteredData:any[]=[];
 searchedValue:any=''
 news:any[]=[]
 input:any=''
  constructor(private search:SearchService) { }

  ngOnInit(): void {
   
    

   
  }

  onSearch(target:any){
    // function gets called when the input value gets changed.
    this.search.onSearch(target)
  
  }

    
}


