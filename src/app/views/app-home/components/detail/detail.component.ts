import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  title = '';
  list: any[];
  chart: any;
  date = '';
  value = '';
  currency = '';
  format = '';

  constructor(private router: Router, private common: CommonService) {
    Chart.register(...registerables);
    this.list = [];
  }

  ngOnInit(): void {
    if (this.common?.indicator?.name) {
      const { name, currency, format } = this.common?.indicator;
      this.title = name;
      this.currency = currency;
      this.format = format;
      (async () => {
        const listAccordingToIndicator: any =
          await this.common.getListAccordingToIndicator();
        this.list = listAccordingToIndicator[this.common?.indicator?.key];

        const { Fecha, Valor } = this.list[this.list.length - 1];
        this.date = Fecha;
        this.value = Valor;
        this.setChart(this.list);
      })();
    } else {
      this.router.navigate(['']);
    }
  }

  graph() {}

  setChart(list: any[]) {
    let array: any = {
      labels: [],
      values: [],
    };
    if (list.length < 10) {
      list.forEach((e) => {
        array.labels = [...array.labels, e.Fecha];
        array.values = [...array.values, parseFloat(e.Valor.replace(',', '.'))];
      });
    } else {
      list.reverse();
      for (let index = 0; index < 10; index++) {
        const e = list[index];
        array.labels = [...array.labels, e.Fecha];
        array.values = [...array.values, parseFloat(e.Valor.replace(',', '.'))];
      }
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: [...array.labels],
        datasets: [
          {
            label: `${this.title} - Unidad Medida (${this.format})`,
            data: [...array.values],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }
}
