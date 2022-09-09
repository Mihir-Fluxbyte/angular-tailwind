import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menu!: MenuItem[];

  constructor(private router: Router) {
    this.menu = [
      {
        label: 'Home',
        icon: 'assets/icons/user.svg',
        click: () => {
          this.router.navigate(['home']);
        },
      },
      {
        label: 'Users',
        icon: 'assets/icons/user.svg',
        click: () => {
          this.router.navigate(['user']);
        },
      },
      {
        label: 'Menu',
        icon: 'assets/icons/user.svg',
        // click: () => {
        //   this.router.navigate(['user']);
        // },
        subMenu: [
          {
            label: 'Minu1',
            icon: 'assets/icons/user.svg',
            subMenu: [
              {
                label: 'Home',
                icon: 'assets/icons/user.svg',
                click: () => {
                  this.router.navigate(['home']);
                },
              },
              {
                label: 'Users',
                icon: 'assets/icons/user.svg',
                click: () => {
                  this.router.navigate(['user']);
                },
              },
            ]
          },
          {
            label: 'Users',
            icon: 'assets/icons/user.svg',
            click: () => {
              this.router.navigate(['user']);
            },
          },
        ]
      },
    ];
  }

  ngOnInit(): void {}

  getPaddingClassByDepth(depth: number){
    return ` pl-[${(depth + 1) * 10}px] `
  }
}

type MenuItem = {
  label: string;
  icon?: string;
  click?: Function;
  badge?: Badge;
  subMenu?: MenuItem[]
};

type Badge = {};
