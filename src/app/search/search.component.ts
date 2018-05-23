import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public searchText;
  public searchResult;
  public  searchCount;

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    
  }

  onKeyup(event) {
    this.searchText = event.target.value;
  }

  getUsers() {
    this._githubService.getUser(this.searchText)
      .subscribe(
        response => {
          this.searchResult = response;
          this.searchCount = response.total_count;
         // console.log(response);
        }
      );
  }
 
}
