import {Component, forwardRef} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';


export const CBP_TOGGLE_SWITCH_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  // tslint:disable-next-line:no-use-before-declare
  useExisting: forwardRef(() => AppComponent),
  multi: true
};


@Component({
  selector: 'ngx6-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CBP_TOGGLE_SWITCH_CONTROL_VALUE_ACCESSOR]
})
export class AppComponent {
  title = 'ngx6';
}
