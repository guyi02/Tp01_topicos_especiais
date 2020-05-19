import { Component, OnInit } from '@angular/core';

interface User {
  name: string;
  image: string;
  linkGit: string;
}

const UserArray = [
  {
    name: 'Guilherme',
    image: 'https://avatars0.githubusercontent.com/u/13474328?v=4',
    linkGit: 'guyi02',
  },
  {
    name: 'Gabi',
    image: 'https://avatars3.githubusercontent.com/u/38729864?v=4',
    linkGit: 'gabriellicorrea',
  },
  {
    name: 'Lara',
    image: 'https://avatars2.githubusercontent.com/u/48126123?v=4',
    linkGit: 'laraflau',
  },
];

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  arrUsers: User[] = [];
  userParam: User = null;
  constructor() {}

  ngOnInit(): void {
    this.arrUsers = UserArray;
  }

  onClickFunc(user) {
    this.userParam = user;
  }
}
