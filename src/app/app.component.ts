import { Component, computed, signal } from '@angular/core';

//Component Imports
import { SideNavToggle} from './shared/utils/navigation-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  collapsed = signal(false);

  sidenavWidth =  computed(() => this.collapsed() ? '65px' : '250px');
}
