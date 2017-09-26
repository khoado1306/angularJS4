import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  buttonName = 'Display Details';
  simpleParagraph = 'Secret password = tuna';
  buttonClick = false;
  totalClick = [new Date().toLocaleString()];
  
  displaySimpleParagraph(){
    if(!this.buttonClick){
      this.buttonClick = true;
    }
    else{
      this.buttonClick = false;
    }
    this.totalClick.push(new Date().toLocaleString());
  }
  
}
