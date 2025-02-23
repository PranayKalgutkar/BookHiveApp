import { Component, computed, input, Input, signal } from '@angular/core';
import { MenuItem } from '../../models/uicontrol';
import { fadeInOut } from '../../utils/navigation-utils';
import { animate, animation, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.scss',
  animations: [

    trigger('expandContractMenu', [
      transition(':enter', [
        style({ opacity: 0, height: '0px' }),
        animate('500ms ease-in-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('500ms ease-in-out', style({ opacity: 0, height: '0px' }))
      ])
    ])
  ]
})
export class CustomSidenavComponent {

  sideNavCollapsed = signal(false);

  @Input() set collapsed(val: boolean) {
    this.sideNavCollapsed.set(val);
  }

  expandedMenus = signal<{ [key: string]: boolean }>({});

  //collapsed_1 = input(false);

  nestedMenuOpen = signal(false);

  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'dashboard'
    },
    {
      icon: 'inventory_2',
      label: 'Inventory',
      route: 'master',
      subItems: [
        {
          icon: 'menu_book',
          label: 'Book List',
          route: '/master/flattypes'
        },
        {
          icon: 'library_add',
          label: 'Add Book',
          route: '/master/flats'
        }
      ]
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'resident',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: '/resident/owner/new'
        }
      ]
    },
    {
      icon: 'analytics',
      label: 'Analytics',
      route: 'analytics'
    },
    {
      icon: 'comment',
      label: 'Comments',
      route: 'comments'
    },
  ]);

  // toggleNested(menuItem: MenuItem) {
  //   if (!menuItem.subItems || menuItem.subItems.length === 0) {
  //     return;
  //   }
  //   this.expandedMenus.update((state) => ({
  //     ...state,
  //     [menuItem.label]: !state[menuItem.label]
  //   }));
  // }

  toggleNested(menuItem: MenuItem) {
    if (!menuItem.subItems || menuItem.subItems.length === 0) {
      return;
    }
  
    this.expandedMenus.set({ [menuItem.label]: !this.isMenuOpen(menuItem) });
  }

  isMenuOpen(menuItem: MenuItem): boolean {
    return this.expandedMenus()[menuItem.label] || false;
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');

  logSideNavState() {
    console.log("SideNav Collapsed:", this.sideNavCollapsed());
  }
}
