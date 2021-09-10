import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OneThemeComponent } from './navigation/newsIT/one-theme.component';
import { TwoThemeComponent } from './navigation/eventsIT/two-theme.component';
import { DetailsNewsComponent } from './navigation/detailsNewsPage/details.component';
import { DetailsEventComponent } from './navigation/detailsEventsPage/details.component';


const routes: Routes = [
  {
    path: 'themeOne', component: OneThemeComponent
  },
  {
    path: 'themeOne/:id', component: DetailsNewsComponent
  },
  { path: 'themeTwo', component: TwoThemeComponent },
  {
    path: 'themeTwo/:id', component: DetailsEventComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
