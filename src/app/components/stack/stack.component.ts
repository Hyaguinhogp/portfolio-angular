import { Component, Input } from '@angular/core';
import { IStack } from 'src/app/app-interfaces';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.sass']
})
export class StackComponent {
  @Input() stackObject: IStack = {} as IStack;
  isNameActive: boolean = false;

  activeName() {
    this.isNameActive = true;
  }

  desactiveName() {
    this.isNameActive = false;
  }
}
