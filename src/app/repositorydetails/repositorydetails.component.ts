import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';

interface GitResponseUser {
  name: string;
  login: string;
  location: string;
  bio: string;
  avatar_url: string;
}

interface GitResponseRepos {
  name: string;
  owner: {
    url: string;
  };
  description: string;
  created_at: Date;
  language: string;
}

@Component({
  selector: 'app-repositorydetails',
  templateUrl: './repositorydetails.component.html',
  styleUrls: ['./repositorydetails.component.css'],
})
export class RepositorydetailsComponent implements OnInit {
  baseUrl = 'https://api.github.com/users';
  gitUserInfo: GitResponseUser = null;
  gitRepos: GitResponseRepos = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.update(params.get('user'));
    });
  }

  update(userParam) {
    let user = this.http.get<GitResponseUser>(`${this.baseUrl}/${userParam}`);
    let repos = this.http.get<GitResponseRepos>(
      `${this.baseUrl}/${userParam}/repos`
    );
    forkJoin([user, repos]).subscribe((res) => {
      // res[0] é as informações do usuário
      // res[1] é as informações do reposotório
      this.gitUserInfo = res[0];
      this.gitRepos = res[1];
    });
  }
}
