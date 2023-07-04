import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-popover',
  templateUrl: './info-popover.component.html',
  styleUrls: ['./info-popover.component.scss'],
})
export class InfoPopoverComponent {
  @Input() listHeader!: string;
}
