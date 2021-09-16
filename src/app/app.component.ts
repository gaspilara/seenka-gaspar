import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showModal: boolean = false;

  onShowModal(event: boolean) {
    this.showModal = event;
  }

}
