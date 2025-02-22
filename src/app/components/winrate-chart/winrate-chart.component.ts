import { Component, OnInit } from '@angular/core';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { DotaService } from '../../services/dota.service';

@Component({
  selector: 'app-winrate-chart',
  standalone: true,
  imports: [
    NgApexchartsModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './winrate-chart.component.html',
  styleUrls: ['./winrate-chart.component.scss'],
})
export class WinrateChartComponent implements OnInit {
  chartOptions: any;
  heroes: any[] = [];
  selectedHeroes: string[] = [];

  constructor(private dotaService: DotaService) {}

  ngOnInit(): void {
    this.dotaService.getHeroWinRates().subscribe((heroes) => {
      this.heroes = heroes;
      this.selectedHeroes = heroes.slice(0, 5).map((hero) => hero.name);
      this.updateChart();
    });
  }

  updateChart(): void {
    const filteredHeroes = this.heroes.filter((hero) =>
      this.selectedHeroes.includes(hero.name)
    );

    const series = filteredHeroes.map((hero) => ({
      name: hero.name,
      data: Object.values(hero.winRates),
    }));

    this.chartOptions = {
      series,
      chart: { type: 'line', height: 400, background: '#333' },
      title: { text: 'Win Rate by Hero & Rank', style: { color: '#fff' } },
      xaxis: {
        categories: Object.keys(this.heroes[0].winRates),
        labels: { style: { colors: '#fff' } },
      },
      yaxis: {
        labels: {
          formatter: (val: number) => val.toFixed(2) + '%',
          style: { colors: '#fff' },
        },
      },
      tooltip: { y: { formatter: (val: number) => val.toFixed(2) + '%' } },
      theme: { mode: 'dark' },
    };
  }

  removeHero(hero: string): void {
    this.selectedHeroes = this.selectedHeroes.filter((h) => h !== hero);
    this.updateChart();
  }
}
