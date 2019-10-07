import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../services/expense.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.page.html',
  styleUrls: ['./expense-detail.page.scss'],
})
export class ExpenseDetailPage implements OnInit {

	expense = this.expenseService.selectedExpense;

  constructor(private expenseService : ExpenseService,
							private router: Router,
							private alertController: AlertController) { }

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

	async presentDeleteAlert() {
		// var delete = false;
	 const alert = await this.alertController.create({
		 header: 'Deleting comfirmation',
		 message: 'Are you sure to want to delete this expense <strong>definitively</strong> ?',
		 buttons: [
			 {
				 text: "Cancel",
				 role: "cancel",
				 cssClass: "secondary",
				 handler: () => {
					 console.log("Delete request cancelled");
				 }
			 }, {
				 text: "Delete",
				 cssClass: "primary",
				 handler: () => {
					 // delete = true;
					 this.deleteExpense();
				 }
			 }
		 ]
	 });

	 await alert.present();
 }

}
