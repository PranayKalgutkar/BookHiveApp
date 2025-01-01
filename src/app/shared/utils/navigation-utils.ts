import { animate, style, transition, trigger } from "@angular/animations";

export class NavigationUtils {
}

export interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
  }  

export interface NavigationData {
    routeLink: string;
    icon?: string;
    label: string;
    expanded?: boolean;
    items?: NavigationData[];
  }

  export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('350ms',
        style({ opacity: 1 })
      )
    ]),
    transition(':leave', [
      style({ opacity: 1 }),
      animate('350ms',
        style({ opacity: 0 })
      )
    ])
  ])

export const navbarData: NavigationData[] = [
    {
        routeLink: 'feature/dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'feature/master',
        icon: 'bi bi-motherboard',
        label: 'Master',
        items: [
            {
                routeLink: 'feature/master/flattypes',
                // icon: 'fal fa-building',
                label: 'Flat Types'
            },
            {
                routeLink: 'feature/master/flats',
                label: 'Flats'
            }
        ]
    },
    {
        routeLink: 'feature/contract',
        icon: 'fal fa-file-contract',
        label: 'Contracts',
        items: [
            {
                routeLink: 'feature/contract/security',
                label: 'Security',
                items:
                    [
                        {
                            routeLink: 'feature/contract/security/new',
                            // routeLink: 'feature/contract/security/newsecurity',
                            label: 'New Security',
                        },
                        {
                            routeLink: 'feature/contract/security/list',
                            label: 'Security List',
                        },
                        {
                            routeLink: 'feature/contract/security/renew',
                            label: 'Renew Security',
                        }
                    ]
            }
        ]
    },
    {
        routeLink: 'feature/resident',
        icon: 'bi bi-houses', //<i class="bi bi-houses"></i>
        label: 'Residents',
        items: [
            {
                routeLink: 'feature/resident/owner',
                label: 'Owner',
                items:
                    [
                        {
                            routeLink: 'feature/resident/owner/new',
                            label: 'New Owner',
                        },
                        {
                            routeLink: 'feature/resident/owner/list',
                            label: 'Owner List',
                        }
                        // {
                        //     routeLink: 'feature/contract/security/list',
                        //     label: 'Security List',
                        // },
                        // {
                        //     routeLink: 'feature/contract/security/renew',
                        //     label: 'Renew Security',
                        // }
                    ]
            }
        ]
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings'
    },
];