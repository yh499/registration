import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  //after register
  ThanksMessage = '';
  
  onSubmit(){
    //creating new users
   this.users.push(this.user);
   this.ThanksMessage= `Hey ${this.user.firstname} Thank you for the registration! Please check your email ${this.user.email}, we will send you a email confirmation :) `;
   this.user = new User();
   console.log(this.user);

  }

}
