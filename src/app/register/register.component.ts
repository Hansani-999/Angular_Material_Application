import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
users:any;
  // const userData = {id: form.value.id , firstName: form.value.first_name, lastName:form.value.last_name , Email:format.value.email};

  constructor(private _userService:UserService) {
    // this._userService.users().subscribe((data:any)=>{
    //   this.users=data;
    // });
   }

   registerUsers(data:any){
    
      console.warn(data)
      this._userService.postUsers(data).subscribe((result)=>{
        console.warn(result)
      })
  }

  ngOnInit() {
   
  }

}
