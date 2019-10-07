import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
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

  constructor(	private expenseService: ExpenseService,
								private router: Router) { }

	ngOnInit() {
  }

  ionViewWillEnter() {
		var form = document.querySelector("form");
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			console.log("Form submitted");
			this.addExpense();
		});
  }

	addExpense() {
		console.log("New Expense");
		console.log(this.newExpense);
		this.expenseService.addExpense(this.newExpense)
			.then(data => {
				console.log("DATA : ");
				console.log(data);
				this.sleep(5000);
				this.router.navigateByUrl("/list");
			})
			.catch(error => {
				// throw new Error("Something went badly wrong!");
				console.error(error);
			});
	}

	inputCheck() {
		return (this.newExpense.description == "");
	}

	sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
}
