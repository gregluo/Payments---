import { Http, Response, ResponseOptions } from '@angular/http';
import { TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { PaymentService } from './app.service';

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe('Test PaymentService', () => {
    let service: PaymentService;
    let http: Http;

    beforeEach(() => {
        const bed = TestBed.configureTestingModule({
            providers: [
                PaymentService,
                { provide: Http }
            ]
        });
        http = bed.get(Http);
        service = bed.get(PaymentService);
    });

    it('should post payment', () => {
        let formData = {
            "BSB": "233",
            "AccountNumber": "333",
            "AccountName": "433",
            "Reference": "",
            "PaymentAmount": ""
        }; 

        service.addPayment(formData)
            .subscribe((result) => {
                expect(result.length).toBe(2);
            });
    });
});