import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  constructor(private _service:NewsapiserviceService){}
  topNewsDisplay: any = [];

  ngOnInit(): void {
    this._service.scienceNews().subscribe((result)=>{
      this.topNewsDisplay=result.articles;
    })
  }
}
