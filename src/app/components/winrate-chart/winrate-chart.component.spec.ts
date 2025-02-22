import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinrateChartComponent } from './winrate-chart.component';

describe('WinrateChartComponent', () => {
  let component: WinrateChartComponent;
  let fixture: ComponentFixture<WinrateChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinrateChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinrateChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
