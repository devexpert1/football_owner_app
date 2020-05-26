import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxStarsModule } from 'ngx-stars';
import { UpcomingMatchdetailsPageRoutingModule } from './upcoming-matchdetails-routing.module';
import { SharedModule } from "../shared/shared.module";
import { UpcomingMatchdetailsPage } from './upcoming-matchdetails.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	SharedModule,
    UpcomingMatchdetailsPageRoutingModule,
    NgxStarsModule
  ],
  declarations: [UpcomingMatchdetailsPage],
  entryComponents: []
})
export class UpcomingMatchdetailsPageModule {}
