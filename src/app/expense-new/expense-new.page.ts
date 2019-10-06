import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-new',
  templateUrl: './expense-new.page.html',
  styleUrls: ['./expense-new.page.scss'],
})
export class ExpenseNewPage implements OnInit {
	newExpense = {
		type: "",
		description: "",
		cost: 0
	};

  constructor(	private expenseService: ExpenseService
								private router: Router) { }

  ngOnInit() {
  }

	addExpense() {
		console.log(this.newExpense);
		this.expenseService.addExpense(this.newExpense)
			.then(data => {
				console.log(data);
				this.router.navigateByUrl("/list");
			})
			.catch(error => {
				console.log(error);
			});
	}

	inputCheck() {
		return (this.newExpense.description == "");
	}

}
