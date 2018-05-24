import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Request to know if the word is a palindrome
   *
   * @param text to be verified
   */
  verifyIsPalindrome(text: string) {
    return this.http.post(this.apiUrl, { text: text });
  }
}
