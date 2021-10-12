import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-component',
  templateUrl: './ui-component.component.html',
  styleUrls: ['./ui-component.component.css']
})
export class UiComponentComponent implements OnInit {
  bool=true;
  constructor() { }

  ngOnInit(): void {
  }

  goToLogin(){
    this.bool=!this.bool;
  }
}
