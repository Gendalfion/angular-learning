import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JournalEntryListComponent} from './journal-entry-list/journal-entry-list.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {JournalEntryComponent} from './journal-entry/journal-entry.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'journal', component: JournalEntryListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'journal/entry/:id', component: JournalEntryComponent},
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
