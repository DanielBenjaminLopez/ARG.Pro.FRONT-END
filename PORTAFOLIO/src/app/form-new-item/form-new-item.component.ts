import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-new-item',
  templateUrl: './form-new-item.component.html',
  styleUrls: ['./form-new-item.component.css'],
})
export class FormNewItemComponent {
  @Input() label!: string;
  @Input() className = 'btn-primary';
  @Output() newItemEvent=new EventEmitter<string>()

  onAddNewItem(item: string): void {
    console.log('item ->', item);
    this.newItemEvent.emit(item)
  }
}
