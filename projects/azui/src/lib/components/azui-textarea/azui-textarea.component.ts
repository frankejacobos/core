import { CommonModule } from '@angular/common';
import {
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'azui-textarea-group',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './azui-textarea.component.html',
  styleUrls: ['./azui-textarea.component.scss'],
})
export class AzuiTextareaComponent implements OnDestroy {
  @Input()
  label?: string;

  @Input()
  maxLength?: number;

  @ContentChild('azuitextarea')
  textarea?: ElementRef<HTMLTextAreaElement>;

  hasFocus = false;
  isDisabled = false;
  hasError = false;
  charCount = 0;

  focusEvent = () => {
    this.hasFocus = true;
  };

  blurEvent = () => {
    this.hasFocus = false;
  };

  inputEvent = () => {
    this.charCount;
    this.setValueCharCount();
  };

  setValueCharCount() {
    if (!this.textarea || !this.textarea.nativeElement.value) {
      this.charCount = 0;
      return;
    }

    this.charCount = this.textarea.nativeElement.value.length;
  }

  ngAfterContentInit(): void {
    if (!this.textarea) return;

    this.textarea.nativeElement.placeholder = ' ';
    this.setValueCharCount();
    this.textarea.nativeElement.addEventListener(
      'focus',
      this.focusEvent,
      false
    );
    this.textarea.nativeElement.addEventListener(
      'input',
      this.inputEvent,
      false
    );
    this.textarea.nativeElement.addEventListener('blur', this.blurEvent, false);
  }

  ngOnDestroy(): void {
    this.textarea?.nativeElement.removeEventListener(
      'focus',
      this.focusEvent,
      false
    );
    this.textarea?.nativeElement.removeEventListener(
      'input',
      this.inputEvent,
      false
    );
    this.textarea?.nativeElement.removeEventListener(
      'blur',
      this.blurEvent,
      false
    );
  }
}
