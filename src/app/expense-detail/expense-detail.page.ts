import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {

	expense = this.expenseService.selectedExpense;

  constructor(private expenseService : ExpenseService,
							private router: Router) { }

  ngOnInit() {
		console.log(this.expense);
  }

	deleteExpense() {
		console.log("Deleting expense");
		console.log(this.expense);
		this.expenseService.deleteExpense(this.expense)
			.then(data => {
				this.router.navigateByUrl("/list");
			})
			.catch(error => {
				console.error(error);
			});
	}

}
