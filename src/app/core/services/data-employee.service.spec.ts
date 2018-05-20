import { DataEmployeeService } from './data-employee.service';
import { TestBed, inject } from '@angular/core/testing';

describe('DataEmployeeService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ DataEmployeeService ]
		});
	});

	it(
		'should be created',
		inject([ DataEmployeeService ], (service: DataEmployeeService) => {
			expect(service).toBeTruthy();
		})
	);
});
