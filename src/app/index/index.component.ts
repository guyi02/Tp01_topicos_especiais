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
    name: 'Guilherme2',
    image: 'https://avatars0.githubusercontent.com/u/13474328?v=4',
    linkGit: 'guyi02',
  },
  {
    name: 'Guilherme3',
    image: 'https://avatars0.githubusercontent.com/u/13474328?v=4',
    linkGit: 'guyi02',
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
