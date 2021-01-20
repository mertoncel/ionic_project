import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BudgetComponent} from './budget.component';
import {RouterModule} from '@angular/router';
import {AccountComponent} from '../account/account.component';
import {IonicModule} from '@ionic/angular';



@NgModule({
  declarations: [BudgetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BudgetComponent}]),
    IonicModule
  ]
})
export class BudgetModule { }
