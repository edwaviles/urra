import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HttpClientModule  } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,IvyCarouselModule,HttpClientModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
