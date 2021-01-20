import {Component, OnDestroy, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {AddExpenseComponent} from '../../shared/components/add-expense/add-expense.component';
import {DataService} from '../../services/data/data.service';
import {ExpenseInterface} from '../../interface/expenseinterface';
import {SubscriptionLike} from 'rxjs';
import {ActionService} from '../../services/action/action.service';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {

    expenses: ExpenseInterface[];
    subscription: SubscriptionLike;

    constructor(
        private modalController: ModalController,
        private dataService: DataService,
        private actionsService: ActionService,
    ) {
        this.actionsService.getTodayExpensesFromLocal().then(value => this.expenses = value);

    }

    ngOnInit() {
        this.subscription = this.dataService.getExpensesSubscription();
        this.dataService.getExpensesSubscription()
            .subscribe({
                next: (expense) => {
                    if (!this.expenses) {
                        this.expenses = [];
                    }
                    if (expense != null) {
                        this.expenses.push(expense);
                    }
                },
                error: (err) => {
                },
                complete: () => {
                }
            });
    }

    async presentModal() {
        const modal = await this.modalController.create({
            component: AddExpenseComponent
        });
        return await modal.present();
    }

    ngOnDestroy(): void {
    }


}
