import { Component } from '@angular/core';
import { ApiService } from './providers/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public text: string;
  public textVerified: string;
  public isPalindrome: boolean;
  public hasResult: boolean;

  constructor(
    private apiService: ApiService
  ) { }

  onChangeText() {
    this.apiService.verifyIsPalindrome(this.text).then(_ => {
      this.isPalindrome = true;
      this.hasResult = true;
    }, (err) => {
      if (err.status === 400) {
        this.isPalindrome = false;
        this.hasResult = true;
      } else {
        this.onClearResult();
      }
    });
    this.textVerified = JSON.parse(JSON.stringify(this.text));
  }

  onClearResult() {
    this.hasResult = false;
  }
}
