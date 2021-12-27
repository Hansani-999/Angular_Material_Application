import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

export interface userList{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: any;

}

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  constructor(private _userService:UserService, private activatedRoute: ActivatedRoute) { 
  // this.activatedRoute.queryParams.subscribe(data => {
  // console.log('data: ', data)
// })

  }

  userList: any;
  id: any = "";

  ngOnInit(){

    this.activatedRoute.params.subscribe(params=>{
      console.log(params);
      this.id = Object.values(params);
    })
 
    console.log('id is', this.id)

    this._userService.getOneUser(this.id).subscribe(res => {
      this.userList = Array.from(Object.values(res));
      console.log(this.userList)
      console.log('one user',res)
  
  })
  }
  
  updateUsers(data:any){
    
    console.warn(data)
    this._userService.updateUsers(this.id, data).subscribe((result)=>{
      console.warn('its working',result)
    })
}
}