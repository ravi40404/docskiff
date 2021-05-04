import { Component, OnInit } from '@angular/core';

export interface AutoCompleteModel {
   value: any;
   display: string;
}

@Component({
  selector: 'app-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.css']
})
export class TagInputComponent implements OnInit {

  public items = [
    {display: 'test1', value: 1},
    {display: 'test2', value: 2},
    {display: 'test3', value: 3},
  ];

  constructor() { }

  ngOnInit() {
  }

}