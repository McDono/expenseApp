import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
	public selectedExpense = {};
	public expenses = [
		{id: 1, type: "meal", description: "Dinner with a client", cost: 75},
		{id: 2, type: "meal", description: "Lunch at airport", cost: 15},
		{id: 1, type: "lodging", description: "Hotel at convention", cost: 200}
	];

constructor() {}

}
