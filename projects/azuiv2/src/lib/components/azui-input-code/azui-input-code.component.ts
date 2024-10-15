import { CommonModule } from '@angular/common';
import { Component, forwardRef, HostListener, Input, QueryList, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AzuiInputGroupComponent } from '../azui-input/azui-input-group/azui-input-group.component';
import { AzuiInputModule } from '../azui-input/azui-input.module';
import { ValidateRegexDirective } from '../../directives/azui-input-code/validate-regex.directive';

@Component({
    selector: 'azui-input-code',
    standalone: true,
    imports: [
        CommonModule,
        AzuiInputModule,
        ValidateRegexDirective
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AzuiInputCodeComponent),
            multi: true

        },
    ],
    templateUrl: './azui-input-code.component.html',
    styleUrls: ['./azui-input-code.component.scss'],
})

export class AzuiInputCodeComponent implements ControlValueAccessor {

    @ViewChildren(AzuiInputGroupComponent)
    inputs!: QueryList<AzuiInputGroupComponent>;
    @Input() length!: number;
    @Input() patronValidacion: 'alfanumerico' | 'numerico' = 'alfanumerico';
    @Input() divideEach = 0;
    @Input() codigoValido = true;
    @Input() width = '52px';
    @Input() height = '70px';


    public isDisabled: boolean = false;
    public value: string = '';
    public onChangeIs?: (value: string) => {};
    public onTouchedIs?: () => void;

    @HostListener('paste', ['$event'])
    onPaste(e: ClipboardEvent): void {
        const items = e.clipboardData?.getData('text');
        const regex = new RegExp(ValidateRegexDirective.regexMap[this.patronValidacion]);
        if (typeof items !== 'string' || !regex.test(items)) return;
        e.preventDefault();
        requestAnimationFrame(() => {
            this.writeValue(items);
        });
    }

    writeValue(value: string): void {
        this.value = value;
        this.setAllValues(this.value);
    }
    registerOnChange(fn: any): void {
        this.onChangeIs = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouchedIs = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    ngAfterViewInit(): void {
        this.inputs.toArray()[0].input!.elementRef.nativeElement.select();
        this.inputs.toArray()[0].input!.elementRef.nativeElement.focus();
        this.inputs.toArray().slice(1).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
        this.setAllValues(this.value);
    }

    onWrite(i: number, valor: string, event: KeyboardEvent): void {

        if (event.key !== 'Backspace') {
            this.value = this.getAllValues();
            this.onChangeIs?.(this.value);
            if (i !== this.length - 1 && valor.length === 1) {
                this.inputs.toArray()[i].input!.elementRef.nativeElement.classList.add('type-text');
                this.inputs.toArray()[i + 1].input!.elementRef.nativeElement.disabled = false;
                this.inputs.toArray()[i + 1].input!.elementRef.nativeElement.focus();
                this.inputs.toArray().slice(i + 2).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
                this.inputs.toArray().slice(0, i + 1).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
            }
        }
    }

    onBackSpace(i: number): void {
        let remainingInputs = this.getRemainingInputs();
        this.value = this.getAllValues();
        this.onChangeIs?.(this.value);
        if (i > 0) {
            this.inputs.toArray()[i].input!.elementRef.nativeElement.value = '';
            this.inputs.toArray()[i].input!.elementRef.nativeElement.classList.remove('type-text');
            this.inputs.toArray()[i - 1].input!.elementRef.nativeElement.disabled = false;
            this.inputs.toArray()[i - 1].input!.elementRef.nativeElement.focus();
            this.inputs.toArray().slice(i).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
        }
        if (i == 0 && remainingInputs === this.length) {
            this.inputs.toArray()[i].input!.elementRef.nativeElement.focus();
        }
    }




    getRemainingInputs(): number {
        return this.inputs.toArray().filter(input => input.input!.elementRef.nativeElement.value == '').length
    }


    getAllValues(): string {
        return this.inputs.toArray().map(input => input.input!.elementRef.nativeElement.value).join('');
    }

    setAllValues(value: string | null | undefined): void {
        const values = (value ?? '').split('');
        if (values.length === this.length && this.inputs) {
            this.inputs.toArray().forEach((input, i) => {
                input.input!.elementRef.nativeElement.value = values[i];
                if (i !== this.length) {
                    input.input!.elementRef.nativeElement.classList.add('type-text-slow');
                }
            });
            this.inputs.toArray()[this.length - 1].input!.elementRef.nativeElement.disabled = false;
            this.inputs.toArray()[this.length - 1].input!.elementRef.nativeElement.focus();
            this.inputs.toArray().slice(0, this.length - 1).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
        } else if (this.inputs && values.length === 0) {
            this.inputs.toArray().forEach(input => {
                input.input!.elementRef.nativeElement.value = '';
                input.input!.elementRef.nativeElement.classList.remove('type-text-slow');
            });
            this.inputs.toArray()[0].input!.elementRef.nativeElement.focus();
            this.inputs.toArray().slice(1).forEach(input => input.input!.elementRef.nativeElement.disabled = true);
        } else if (this.inputs && values.length < this.length) {
            this.inputs.toArray().forEach((input, i) => {
                input.input!.elementRef.nativeElement.value = values[i] || '';
                if (values[i]) {
                    input.input!.elementRef.nativeElement.classList.add('type-text-slow');
                } else {
                    input.input!.elementRef.nativeElement.classList.remove('type-text-slow');
                }
            });
            this.inputs.toArray()[0].input!.elementRef.nativeElement.disabled = true;
            this.inputs.toArray()[values.length].input!.elementRef.nativeElement.disabled = false;
            this.inputs.toArray()[values.length].input!.elementRef.nativeElement.focus();
        }
    }








}
