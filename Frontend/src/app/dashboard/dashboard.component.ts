import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { ToastrService } from 'ngx-toastr';

export interface PeriodicElement1 {
  name: string;
  position: number;
  startDate: any;
  status:any;
}

const ELEMENT_DATA: PeriodicElement1[] = [
  {position: 1, name: 'Crops',startDate: "08/07/2019", status:'Open'},
  {
    position: 2, name: 'Tools',startDate: "08/07/2019", status:'Closed'
  }
 
 
];


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  

  
  username:any
  displayedColumns: string[] = ['Id', 'Task Name','Due At','Status'];
  dataSource = ELEMENT_DATA;
 issuesforSPecificUser:any
  constructor(private _Mainservice: MainService,public toastr: ToastrService) { }
getAllIssuesForSpecificUsersResponce:any
  ngOnInit() {
    //this.username=sessionStorage.getItem('name')
    //this.issuesforSPecificUser=this._Mainservice.getAllIssueForUser(this.username)
  }
  getMyissues(){
    //this.issuesforSPecificUser=this._Mainservice.getAllIssueForUser(this.username)
  }
}
