import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

export interface userList{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: any;

}

export interface PeriodicElement {
  ID: string;
  fname: string;
  lname: string;
  email: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {ID: 1, fname: 'Hydrogen', weight: 1.0079, symbol: 'H'},

// ];
  
  
// };

// const ELEMENT_DATA: userList?.[4] = [
//   { id:{{user?.id}}, fname: {{user?.first_name}}, lname: {{user?.last_name}}, email: {{user?.email}}},
  
// ];

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

 

  constructor(private _userService:UserService) { }

   userList: any;

ngOnInit() {
  this._userService.getUsers().subscribe(res => {
    this.userList = Array.from(Object.values(res));
    console.log(this.userList)
    console.log(res)

    
  })
 
}


deleteOneUser(id:any) {
  console.log("This is ",id)
  this._userService.deleteUser(id).subscribe(res => {

    console.warn("successfully deleted",res)
    
  })
}
 
}
