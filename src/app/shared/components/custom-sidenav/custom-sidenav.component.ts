import { Component, computed, Input, signal } from '@angular/core';
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

  nestedMenuOpen = signal(false);

  menuItem = signal<MenuItem[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: 'feature/dashboard'
    },
    {
      icon: 'video_library',
      label: 'Content',
      route: 'feature/master',
      subItems: [
        {
          icon: 'play_circle',
          label: 'Videos',
          route: 'feature/master/flattypes'
        },
        {
          icon: 'playlist_play',
          label: 'Playlists',
          route: 'feature/master/flats'
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

  toggleNested(menuItem: MenuItem) {
    if (!menuItem.subItems || menuItem.subItems.length === 0) {
      return;
    }
    this.nestedMenuOpen.set(!this.nestedMenuOpen());
  }

  profilePicSize = computed(() => this.sideNavCollapsed() ? '32' : '100');
}
