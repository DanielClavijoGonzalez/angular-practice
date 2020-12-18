import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-form-first',
  templateUrl: './form-first.component.html',
  styleUrls: ['./form-first.component.css']
})
export class FormFirstComponent implements OnInit {

  status:string = "Form not submitted"
  defaultName:string = ""
  displayPassword:boolean = false
  lightStatus:string = "RED"
  names: string[] = ['awa', 'awita', 'coco', 'maní']

  //@Input() parentDataToChild
  @Input('parentDataToChild') messageFromParent

  @Output() childEvent = new EventEmitter();

  courses = []
  errorMessage: string = "";

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    //this.courses = this.courseService.getCourses()
    this.courseService.getCourses().subscribe(data =>this.courses=data,
                    error=>this.errorMessage = error)
  }

  onSendForm(email){
    console.log(this.courses);

    console.log(email);

    this.status = "Form has been sent"
  }

  onDefaultForm(){
    this.defaultName = "Wiwis"
  }

  onSendEvent(){
    this.childEvent.emit('Sending event from child to parent')
  }

}
