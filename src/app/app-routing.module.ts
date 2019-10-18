import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from "./search/search.component";
import {RealtimeComponent} from "./realtime/realtime.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  { path: '', redirectTo: '/realtime', pathMatch: 'full' },
  {path: 'search', component: SearchComponent},
  {path: 'realtime', component: RealtimeComponent},
  {path: 'test', component: TestComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
