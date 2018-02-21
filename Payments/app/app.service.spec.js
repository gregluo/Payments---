"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/platform-browser-dynamic/testing");
require("rxjs/add/observable/of");
var app_service_1 = require("./app.service");
testing_1.TestBed.initTestEnvironment(testing_2.BrowserDynamicTestingModule, testing_2.platformBrowserDynamicTesting());
describe('Test PaymentService', function () {
    var service;
    var http;
    beforeEach(function () {
        var bed = testing_1.TestBed.configureTestingModule({
            providers: [
                app_service_1.PaymentService,
                { provide: http_1.Http }
            ]
        });
        http = bed.get(http_1.Http);
        service = bed.get(app_service_1.PaymentService);
    });
    it('should post payment', function () {
        var formData = {
            "BSB": "233",
            "AccountNumber": "333",
            "AccountName": "433",
            "Reference": "",
            "PaymentAmount": ""
        };
        service.addPayment(formData)
            .subscribe(function (result) {
            expect(result.length).toBe(2);
        });
    });
});
//# sourceMappingURL=app.service.spec.js.map