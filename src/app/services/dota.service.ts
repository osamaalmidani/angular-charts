import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DotaService {
  private apiUrl: string = 'https://api.opendota.com/api/heroStats';

  constructor(private http: HttpClient) {}

  getHeroWinRates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((heroes) =>
        heroes.map((hero) => ({
          name: hero.localized_name,
          winRates: {
            Herald: (hero['1_win'] / hero['1_pick']) * 100,
            Guardian: (hero['2_win'] / hero['2_pick']) * 100,
            Crusader: (hero['3_win'] / hero['3_pick']) * 100,
            Archon: (hero['4_win'] / hero['4_pick']) * 100,
            Legend: (hero['5_win'] / hero['5_pick']) * 100,
            Ancient: (hero['6_win'] / hero['6_pick']) * 100,
            Divine: (hero['7_win'] / hero['7_pick']) * 100,
            Immortal: (hero['8_win'] / hero['8_pick']) * 100,
          },
        }))
      )
    );
  }
}
