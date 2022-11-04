import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Graphic', cols: 1, rows: 1 },
          { title: 'Indicator', cols: 1, rows: 1 },
          // { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Controller', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Graphic', cols: 2, rows: 1 },
        { title: 'Indicator', cols: 1, rows: 1 },
        // { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Controller', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
