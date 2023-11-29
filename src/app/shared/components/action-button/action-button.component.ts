import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'action-button',
  templateUrl: './action-button.component.html',
  styleUrl: './action-button.component.scss'
})
export class ActionButtonComponent {
  @Input() text: string = '';
  @Output() messageEvent = new EventEmitter<null>();

  public sendMessage() {
    this.messageEvent.emit();
  }
}
