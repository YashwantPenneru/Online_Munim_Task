import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { StockComponent } from './components/stock/stock.component';
import { ReportComponent } from './components/report/report.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoansComponent } from './components/loans/loans.component';
import { ExpensesComponent } from './components/expenses/expenses.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CustomersComponent } from './components/customers/customers.component';

export const routes: Routes = [
    {path:'dashboard',component:DashboardComponent},
    {path:'header',component:HeaderComponent},
    {path:'stock',component:StockComponent},
    {path:'report',component:ReportComponent},
    {path:'orders',component:OrdersComponent},
    {path:'customers',component:CustomersComponent},
    {path:'loans',component:LoansComponent},
    {path:'expenses',component:ExpensesComponent},
    {path:'settings',component:SettingsComponent},
    {path:'',redirectTo:'',pathMatch:'full'}
];
