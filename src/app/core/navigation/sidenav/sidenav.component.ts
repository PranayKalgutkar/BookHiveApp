import { Component, Output, EventEmitter, OnInit, HostListener } from '@angular/core';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { RouterModule,Router } from '@angular/router';
// import {getWindow} from "ssr-window";

// import { NavbarData } from '../../shared/model/nav-helper';
import { NavigationData, SideNavToggle, navbarData } from '../../../shared/utils/navigation-utils';
// import { NavHelper,SideNavToggle } from '../../shared/model/nav-helper';
import { SublevelMenuComponent } from '../sidenav/sublevel-menu.component';
// import { navbarData } from '../../shared/model/nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({opacity: 0}),
        animate('350ms',
          style({opacity: 1})
        )
      ]),
      transition(':leave', [
        style({opacity: 1}),
        animate('350ms',
          style({opacity: 0})
        )
      ])
    ]),
    trigger('rotate', [
      transition(':enter', [
        animate('1000ms', 
          keyframes([
            style({transform: 'rotate(0deg)', offset: '0'}),
            style({transform: 'rotate(2turn)', offset: '1'})
          ])
        )
      ])
    ])
  ]
})
export class SidenavComponent implements OnInit  {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    // this.screenWidth = getWindow().innerWidth;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  constructor(public router: Router) {}

  ngOnInit(): void {
      //this.screenWidth = getWindow().innerWidth;
      this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: NavigationData): void {
    this.shrinkItems(item);
    item.expanded = !item.expanded
  }

  getActiveClass(data: NavigationData): string {
    return this.router.url.includes(data.routeLink) ? 'active' : '';
  }

  shrinkItems(item: NavigationData): void {
    if (!this.multiple) {
      for(let modelItem of this.navData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
  }
}
