import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course';
  dataToChildFromParent = "This is for form-component from app-component"
  message:string = ''

}
