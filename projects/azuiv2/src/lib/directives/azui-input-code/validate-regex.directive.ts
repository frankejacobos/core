import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[validateRegexDirective]',
  standalone: true,
})
export class ValidateRegexDirective {
  @Input() regex: 'numerico' | 'alfanumerico' = 'numerico'; 
  private static forbiddenKeys = [
    'ArrowLeft',
    'ArrowRight',
    'ArrowUp',
    'ArrowDown',
    'Backspace',
    'Tab',
    'Alt',
    'Shift',
    'Control',
    'Enter',
    'Delete',
    'Meta',
  ];

  public static regexMap = {
    numerico: '^[0-9]*$',
    alfanumerico: '^[a-zA-Z0-9]*$',
  };

  constructor(
    private readonly _el: ElementRef,
  ) {}

  @HostListener('keydown', ['$event']) onKeyDown(event: any) {
    if (
      (event.keyCode == 67 && event.ctrlKey === true) ||
      (event.keyCode == 86 && event.ctrlKey === true) ||
      (event.keyCode == 88 && event.ctrlKey === true)
    ) {
      return;
    }

    let value: string = event.target.value + event.key;

    if (ValidateRegexDirective.forbiddenKeys.includes(event.key)) return;

    let re = new RegExp(ValidateRegexDirective.regexMap[this.regex]);

    if (!re.test(value)) event.preventDefault();
  }

  @HostListener('keyup', ['$event']) onKeyUp(event: any) {
    let value: string = event.target.value;
    const valueReplaced = value.replace(new RegExp(`[^${ValidateRegexDirective.regexMap[this.regex]}]`, 'g'), '');

    (this._el.nativeElement as HTMLInputElement).value = valueReplaced;
    event.preventDefault();
  }
}
