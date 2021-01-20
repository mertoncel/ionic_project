import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RoutingScope} from '@angular/cli/lib/config/schema';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {IonicModule} from '@ionic/angular';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: DashboardComponent}]),
    IonicModule,
      SharedModule
  ]
})
export class DashboardModule { }
