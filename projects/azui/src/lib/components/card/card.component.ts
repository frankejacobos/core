import { Component, Input } from '@angular/core';

@Component({
  selector: 'az-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  contentClass: string = '';

  title: string = "hi there from azui's card";
}
