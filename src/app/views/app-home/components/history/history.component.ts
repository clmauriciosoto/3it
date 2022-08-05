import { CommonService } from './../../services/common.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit, OnDestroy {
  $destroy: Subject<boolean> = new Subject<boolean>();
  title: string;
  list: any[];
  currency: string;
  constructor(private common: CommonService, private router: Router) {
    this.title = this.common?.indicator?.name;
    this.currency = this.common?.indicator?.currency;
    this.list = [];
  }

  ngOnInit() {
    this.list = [];
    if (this.common?.indicator?.name) {
      (async () => {
        const listAccordingToIndicator: any =
          await this.common.getListAccordingToIndicator();
        this.list =
          listAccordingToIndicator[this.common?.indicator?.key].reverse();
      })();
    } else {
      this.router.navigate(['']);
    }
  }

  ngOnDestroy(): void {
    this.$destroy.next(true);
    this.$destroy.complete();
  }
}
