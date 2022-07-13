import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataServiceService {
  // HeadlineURL:string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=5511b6e00c9f46e69392688d68a92bbf'
  // TopbusinessURL:string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=5511b6e00c9f46e69392688d68a92bbf"


  HeadlineURL:string = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=cfbdb104ea384558b5df3642c9b44917'
  TopbusinessURL:string = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=cfbdb104ea384558b5df3642c9b44917"


  constructor(private _httpClient : HttpClient) { }

  getHeadLineData():Observable <any>{
    return this._httpClient.get(this.HeadlineURL);
  }
  getTopBusinessData():Observable <any>{
    return this._httpClient.get(this.TopbusinessURL);
  }
}
