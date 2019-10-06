import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {

	expense = this.expenseService.selectedExpense;

  constructor(private expenseService : ExpenseService) { }

  ngOnInit() {
		console.log(this.expense);
  }

}
