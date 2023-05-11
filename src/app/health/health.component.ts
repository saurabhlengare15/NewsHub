import { Component } from '@angular/core';
import { NewsapiserviceService } from '../services/newsapiservice.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(private _service:NewsapiserviceService){}
  topNewsDisplay: any = [];

  ngOnInit(): void {
    this._service.healthNews().subscribe((result)=>{
      this.topNewsDisplay=result.articles;
    })
  }
}
