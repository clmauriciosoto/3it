import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  indicator: any;

  lastThirtyDays = ['dolar', 'euro', 'uf'];
  currentYear = ['ipc', 'utm'];

  constructor(private api: ApiService) {}

  getListAccordingToIndicator() {
    if (this.lastThirtyDays.includes(this.indicator.resource)) {
      return firstValueFrom(
        this.api.lastThirtyDaysData(this.indicator.resource)
      );
    } else if (this.currentYear.includes(this.indicator.resource)) {
      return firstValueFrom(
        this.api.resourceByCurrentYear(this.indicator.resource)
      );
    } else {
      return [];
    }
  }

  /*  */
}
