import { Component } from '@angular/core';
import { ApiService } from './providers/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string;
  public isPalindrome: boolean;
  public hasResult: boolean;

  constructor(
    private apiService: ApiService
  ) { }

  onChangeText() {
    this.apiService.verifyIsPalindrome(this.text).then(_ => {
      this.isPalindrome = true;
      this.onShowResult();
    }, (err) => {
      if (err.status === 400) {
        this.isPalindrome = false;
        this.onShowResult();
      } else {
        this.onClearResult();
      }
    });
  }

  onShowResult() {
    this.hasResult = true;
  }

  onClearResult() {
    this.hasResult = false;
  }
}
