import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from 'src/app/models/request';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  requests:Request[] = [];
  dataLoadded=false;
 
  
  constructor(private requestService:RequestService,private activatedRoute:ActivatedRoute) {  }

  ngOnInit(): void { 
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getRequestsByCategory(params["categoryId"])
      }else{
        this.getRequests();
      }
    })
    
  }
  getRequests(): void{
    this.requestService.getRequests().subscribe(response=>{
      this.requests=response.data
      this.dataLoadded=true;
    });
  }
  getRequestsByCategory(categoryId:number): void{
    this.requestService.getRequestsByCategory(categoryId).subscribe(response=>{
      this.requests=response.data
      this.dataLoadded=true;
    });
  }
  



}
