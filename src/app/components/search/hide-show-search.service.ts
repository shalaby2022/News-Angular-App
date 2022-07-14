import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HideShowSearchService {
  display:BehaviorSubject<string>=new BehaviorSubject<string>('')
  constructor() { }

  getSearchStatus(){
    return this.display.asObservable()
  }
}
