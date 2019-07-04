import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Course} from '../model/course';


// decorators
@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  // input anotation
  @Input()
  course: Course;
  // title: string;
// tslint:disable-next-line: no-output-rename
  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }


  ngOnInit() {
  }

  onCourseViewed() {

    console.log("card Component - Button clicked");
    this.courseEmitter.emit(this.course);
  }

}
