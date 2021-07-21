import { Component, OnInit } from '@angular/core';
import { Repo } from 'src/app/Services/DTOs/Repo';
import { GithubService } from 'src/app/Services/github.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public repoList: Array<Repo> = [];
  private nickname: string = 'Aelthas02';

  constructor(
    private githubService: GithubService
  ) { }

  public ngOnInit(): void {
    this.getGithubRepos();
  }

  private async getGithubRepos(): Promise<void> {
    await this.githubService.getRepoList(this.nickname).subscribe(
      success => this.repoList = success,
      error => console.log(error)
    );
  }

}
