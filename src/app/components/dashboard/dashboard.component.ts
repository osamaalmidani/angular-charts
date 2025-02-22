import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { WinrateChartComponent } from '../winrate-chart/winrate-chart.component';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    WinrateChartComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
