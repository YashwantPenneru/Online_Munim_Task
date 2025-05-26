import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HighchartsChartModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  selectedSeries: string = 'week'; // Default selection
  seriesData = {
    week: {
      name: 'Week',
      data: [70, 30, 65, 40, 55, 60, 75]
    },
    month1: {
      name: 'Month',
      data: [80, 40, 75, 50, 65, 70, 85]
    },
    month2: {
      name: 'Year',
      data: [90, 50, 85, 60, 75, 80, 95]
    }
  };

  ngOnInit(): void {
    this.updateChart();
  }

  updateChart() {
    const selectedData = this.seriesData[this.selectedSeries as keyof typeof this.seriesData];
    
    this.chartOptions = {
      chart: { type: 'column' },
      title: { text: ''},
     
      xAxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      series: [{
        ...selectedData,
        type: 'column',
        color: '#3366ff' // Dark blue color for selected series
      }],
      plotOptions: {
        column: {
          colorByPoint: false // Ensures all columns use the same color
        }
      }
    };
  }

  onSeriesChange(series: string) {
    this.selectedSeries = series;
    this.updateChart();
  }
}