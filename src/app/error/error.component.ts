import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  errorsrc:string = "../../assets/error.png";
  constructor() { }

  ngOnInit(): void {
  }

}
