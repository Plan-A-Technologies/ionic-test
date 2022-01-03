import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HolidaysService } from './holidays.service';

describe('HolidaysService', () => {
  let service: HolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(HolidaysService);
  });

  it('find countries should return brazil', done => {
    service.findCountries().subscribe(response => {
      expect(response.some(r => r.code === 'BR')).toBeTruthy();
      done();
    });
  });

  it('find holidays by country code equal to brazil should Carnival', done => {
    service.findCountryHolidays('BR').subscribe(response => {
      expect(response.some(r => r.name === 'Carnival')).toBeTruthy();
      done();
    });
  });

});
