import { Component, inject, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { InfoPopoverComponent } from './info-popover/info-popover.component';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  swiper?: Swiper;
  isFooterPopoverOpen = false;
  isHeaderPopoverOpen = false;

  popoverController = inject(PopoverController);

  ngOnInit() {
    this.swiper = new Swiper('.swiper', {
      pagination: {
        el: '.swiper-pagination',
      },
      zoom: true,
    });
  }

  async changeSlide(v: number) {
    this.swiper?.slideNext(400);
  }

  async showInfoPopover(ev: any, from: string) {
    const popover = await this.popoverController.create({
      component: InfoPopoverComponent,
      event: ev,
      translucent: true,
      componentProps: {
        listHeader: `Popover Controller in ${from}`,
      },
      cssClass: 'popover-width',
    });
    return popover.present();
  }
}
