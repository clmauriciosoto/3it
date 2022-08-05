import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Inicio',
    },
  },
  {
    path: 'history',
    component: HistoryComponent,
    data: {
      title: 'Historico',
    },
  },
  {
    path: 'detail',
    component: DetailComponent,
    data: {
      title: 'Historico',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppHomeRoutingModule {}
