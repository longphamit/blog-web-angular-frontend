import { Component, OnInit } from '@angular/core';
import { Account } from './model/account';
import { AdminService } from './service/admin.service';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayedColumns: string[] = ['_id','name','email','phone','update','remove'];
  dataSource:Account[]= [];
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAccounts().subscribe(data=>{
      this.dataSource=data
    },
    err=>{
      console.error(err)
    })
  }
  update():void{
    console.log("update")
  }
  remove(_id:string):void{
    console.log(_id)
    console.log("remove")
    this.adminService.removeAccounts(_id).subscribe(data=>{
      console.log(data)
      this.adminService.getAccounts().subscribe(data=>{
        console.log(data)
        this.dataSource=data
      },
      err=>{
        console.error(err)
      })
    })
    
  }

}
