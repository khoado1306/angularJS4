import { Component, OnInit } from '@angular/core';
import { AccountService } from 'app/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }
  accounts: { name: string, status: string }[] = [];
  /**
   *
   */
  constructor(private accountService: AccountService) {  }
}
