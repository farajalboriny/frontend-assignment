import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  newUser = new User();
  confirmPass: string | undefined
  msg = '';
  msg2='';
  constructor( private signupService: SignupService) { }

  ngOnInit(): void {
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    }
    return new Date;
}
submit(){
  if(this.newUser.password==null){
    this.newUser.password='';
  }
if(this.newUser.password?.length<4||this.newUser.password.length>8){
  this.msg='password must be between 4 and 8 characters';
}
else{
  this.msg=''
  this.register();
}
}
  register() {
    this.signupService.register(this.newUser).subscribe(
      data => {
        this.msg2='success'
        console.log("registration completed")
        
      },
      error => {
        this.msg='you must be 20 years old or older to sign up'
        console.log("exception occurred")
      
      }
    )
  }
}
