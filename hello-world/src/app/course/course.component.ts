import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courseCategories = [
    {id:1, name:"Development"},
    {id:2, name:"Art"},
    {id:3, name:"Languages"},

  ]

  constructor() { }

  ngOnInit() {
  }

}
