import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PaymentService } from './app.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    moduleId: module.id
})
export class AppComponent {
    name = 'Greg Luo';

    constructor(
        private fb: FormBuilder,
        private stockService: PaymentService
    ) { }

    paymentDetailForm = this.fb.group({
        BSB: '',
        AccountNumber: '',
        AccountName: '',
        Reference: '',
        PaymentAmount: ''
    })

    onSubmit() {
        this.stockService.addPayment(this.paymentDetailForm.value).subscribe();
        console.log('Submit:', this.paymentDetailForm.value);
    }
}
