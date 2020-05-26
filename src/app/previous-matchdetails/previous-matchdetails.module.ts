import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { NgxStarsModule } from 'ngx-stars';
import { PreviousMatchdetailsPageRoutingModule } from './previous-matchdetails-routing.module';
import { SharedModule } from "../shared/shared.module";
import { PreviousMatchdetailsPage } from './previous-matchdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
	SharedModule,
    IonicModule,
    PreviousMatchdetailsPageRoutingModule,
    NgxStarsModule
  ],
  declarations: [PreviousMatchdetailsPage]
})
export class PreviousMatchdetailsPageModule {}
