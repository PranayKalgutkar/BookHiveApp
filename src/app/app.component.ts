import { Component } from '@angular/core';

//Component Imports
import { SideNavToggle} from './shared/utils/navigation-utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SocietyApp';
  isSideNavCollapsed = false;
  screenWidth = 0;
  //_sidNavToggle : SideNavToggle | undefined;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
