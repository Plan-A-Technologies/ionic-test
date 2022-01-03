import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../model/country';
import { CountryHoliday } from '../model/country-holiday';

@Injectable({
  providedIn: 'root'
})
export class HolidaysService {

  findCountries(): Observable<Country[]> {
    return of([]);
  }

  findCountryHolidays(country: string): Observable<CountryHoliday[]> {
    return of([]);
  }

}

type CountryApiResponse = {
  countries: Country[];
};

type CountryHolidaysApiResponse = {
  holidays: CountryHoliday[];
};
