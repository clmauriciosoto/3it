import { CommonModule } from '@angular/common';
import { AppModule } from 'src/app/app.module';
import { NgModule } from '@angular/core';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MaterialModule } from 'src/app/material.module';
import { HistoryComponent } from './components/history/history.component';
import { DetailComponent } from './components/detail/detail.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, HistoryComponent, DetailComponent],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class AppHomeModule {}
