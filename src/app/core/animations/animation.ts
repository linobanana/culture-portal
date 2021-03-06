import { trigger, transition, style, animate } from '@angular/animations';

export const routeChangeAnimation =    // tslint:disable-line: typedef
  trigger('routeChangeAnimation', [
    transition('* => *', [
        style({ opacity: 0 }),
        animate('.8s', style({ opacity: 1 }))
    ])
  ]);
