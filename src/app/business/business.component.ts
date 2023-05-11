import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  constructor(private _service:NewsapiserviceService){}
  topNewsDisplay: any = [];

  ngOnInit(): void {
    this._service.businessNews().subscribe((result)=>{
      this.topNewsDisplay=result.articles;
    })
  }
}
