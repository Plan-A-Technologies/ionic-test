import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { CountryHolidaysPage } from '../country-holidays/country-holidays.page';
import { HolidaysService } from '../services/holidays.service';
import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let page: any;
  let holidaysService: HolidaysServiceMock;
  let location: Location;

  beforeEach(waitForAsync(() => {
    holidaysService = new HolidaysServiceMock();

    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        RouterTestingModule.withRoutes([
          {path: 'countries/:id/holidays', component: CountryHolidaysPage}
        ]),
      ]
    })
    .overrideProvider(HolidaysService, {useValue: holidaysService})
    .compileComponents();

    fixture = TestBed.createComponent(HomePage);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  }));

  it('given page init, then search countries', () => {
    expect(holidaysService.foundCountries).toBeTruthy();
  });

  it('given countries loaded, then show countries list', () => {
    expect(page.querySelectorAll('.country').length).toEqual(110);
  });

  it('given countries loaded, when user clicks on country, then go to country holidays page', done => {
    page.querySelector('#BR').click();
    fixture.detectChanges();

    setTimeout(() => {
      expect(location.path()).toEqual('/countries/BR/holidays');
      done();
    }, 100);
  });

  class HolidaysServiceMock {
    foundCountries = false;

    findCountries() {
      this.foundCountries = true;
      return of([
        {
            code: 'AD',
            name: 'Andorra'
        },
        {
            code: 'AL',
            name: 'Albania'
        },
        {
            code: 'AR',
            name: 'Argentina'
        },
        {
            code: 'AT',
            name: 'Austria'
        },
        {
            code: 'AU',
            name: 'Australia'
        },
        {
            code: 'AX',
            name: 'Åland Islands'
        },
        {
            code: 'BA',
            name: 'Bosnia and Herzegovina'
        },
        {
            code: 'BB',
            name: 'Barbados'
        },
        {
            code: 'BE',
            name: 'Belgium'
        },
        {
            code: 'BG',
            name: 'Bulgaria'
        },
        {
            code: 'BJ',
            name: 'Benin'
        },
        {
            code: 'BO',
            name: 'Bolivia'
        },
        {
            code: 'BR',
            name: 'Brazil'
        },
        {
            code: 'BS',
            name: 'Bahamas'
        },
        {
            code: 'BW',
            name: 'Botswana'
        },
        {
            code: 'BY',
            name: 'Belarus'
        },
        {
            code: 'BZ',
            name: 'Belize'
        },
        {
            code: 'CA',
            name: 'Canada'
        },
        {
            code: 'CH',
            name: 'Switzerland'
        },
        {
            code: 'CL',
            name: 'Chile'
        },
        {
            code: 'CN',
            name: 'China'
        },
        {
            code: 'CO',
            name: 'Colombia'
        },
        {
            code: 'CR',
            name: 'Costa Rica'
        },
        {
            code: 'CU',
            name: 'Cuba'
        },
        {
            code: 'CY',
            name: 'Cyprus'
        },
        {
            code: 'CZ',
            name: 'Czechia'
        },
        {
            code: 'DE',
            name: 'Germany'
        },
        {
            code: 'DK',
            name: 'Denmark'
        },
        {
            code: 'DO',
            name: 'Dominican Republic'
        },
        {
            code: 'EC',
            name: 'Ecuador'
        },
        {
            code: 'EE',
            name: 'Estonia'
        },
        {
            code: 'EG',
            name: 'Egypt'
        },
        {
            code: 'ES',
            name: 'Spain'
        },
        {
            code: 'FI',
            name: 'Finland'
        },
        {
            code: 'FO',
            name: 'Faroe Islands'
        },
        {
            code: 'FR',
            name: 'France'
        },
        {
            code: 'GA',
            name: 'Gabon'
        },
        {
            code: 'GB',
            name: 'United Kingdom'
        },
        {
            code: 'GD',
            name: 'Grenada'
        },
        {
            code: 'GG',
            name: 'Guernsey'
        },
        {
            code: 'GI',
            name: 'Gibraltar'
        },
        {
            code: 'GL',
            name: 'Greenland'
        },
        {
            code: 'GM',
            name: 'Gambia'
        },
        {
            code: 'GR',
            name: 'Greece'
        },
        {
            code: 'GT',
            name: 'Guatemala'
        },
        {
            code: 'GY',
            name: 'Guyana'
        },
        {
            code: 'HN',
            name: 'Honduras'
        },
        {
            code: 'HR',
            name: 'Croatia'
        },
        {
            code: 'HT',
            name: 'Haiti'
        },
        {
            code: 'HU',
            name: 'Hungary'
        },
        {
            code: 'ID',
            name: 'Indonesia'
        },
        {
            code: 'IE',
            name: 'Ireland'
        },
        {
            code: 'IM',
            name: 'Isle of Man'
        },
        {
            code: 'IS',
            name: 'Iceland'
        },
        {
            code: 'IT',
            name: 'Italy'
        },
        {
            code: 'JE',
            name: 'Jersey'
        },
        {
            code: 'JM',
            name: 'Jamaica'
        },
        {
            code: 'JP',
            name: 'Japan'
        },
        {
            code: 'KR',
            name: 'South Korea'
        },
        {
            code: 'LI',
            name: 'Liechtenstein'
        },
        {
            code: 'LS',
            name: 'Lesotho'
        },
        {
            code: 'LT',
            name: 'Lithuania'
        },
        {
            code: 'LU',
            name: 'Luxembourg'
        },
        {
            code: 'LV',
            name: 'Latvia'
        },
        {
            code: 'MA',
            name: 'Morocco'
        },
        {
            code: 'MC',
            name: 'Monaco'
        },
        {
            code: 'MD',
            name: 'Moldova'
        },
        {
            code: 'ME',
            name: 'Montenegro'
        },
        {
            code: 'MG',
            name: 'Madagascar'
        },
        {
            code: 'MK',
            name: 'North Macedonia'
        },
        {
            code: 'MN',
            name: 'Mongolia'
        },
        {
            code: 'MS',
            name: 'Montserrat'
        },
        {
            code: 'MT',
            name: 'Malta'
        },
        {
            code: 'MX',
            name: 'Mexico'
        },
        {
            code: 'MZ',
            name: 'Mozambique'
        },
        {
            code: 'NA',
            name: 'Namibia'
        },
        {
            code: 'NE',
            name: 'Niger'
        },
        {
            code: 'NG',
            name: 'Nigeria'
        },
        {
            code: 'NI',
            name: 'Nicaragua'
        },
        {
            code: 'NL',
            name: 'Netherlands'
        },
        {
            code: 'NO',
            name: 'Norway'
        },
        {
            code: 'NZ',
            name: 'New Zealand'
        },
        {
            code: 'PA',
            name: 'Panama'
        },
        {
            code: 'PE',
            name: 'Peru'
        },
        {
            code: 'PG',
            name: 'Papua New Guinea'
        },
        {
            code: 'PL',
            name: 'Poland'
        },
        {
            code: 'PR',
            name: 'Puerto Rico'
        },
        {
            code: 'PT',
            name: 'Portugal'
        },
        {
            code: 'PY',
            name: 'Paraguay'
        },
        {
            code: 'RO',
            name: 'Romania'
        },
        {
            code: 'RS',
            name: 'Serbia'
        },
        {
            code: 'RU',
            name: 'Russia'
        },
        {
            code: 'SE',
            name: 'Sweden'
        },
        {
            code: 'SG',
            name: 'Singapore'
        },
        {
            code: 'SI',
            name: 'Slovenia'
        },
        {
            code: 'SJ',
            name: 'Svalbard and Jan Mayen'
        },
        {
            code: 'SK',
            name: 'Slovakia'
        },
        {
            code: 'SM',
            name: 'San Marino'
        },
        {
            code: 'SR',
            name: 'Suriname'
        },
        {
            code: 'SV',
            name: 'El Salvador'
        },
        {
            code: 'TN',
            name: 'Tunisia'
        },
        {
            code: 'TR',
            name: 'Turkey'
        },
        {
            code: 'UA',
            name: 'Ukraine'
        },
        {
            code: 'US',
            name: 'United States'
        },
        {
            code: 'UY',
            name: 'Uruguay'
        },
        {
            code: 'VA',
            name: 'Vatican City'
        },
        {
            code: 'VE',
            name: 'Venezuela'
        },
        {
            code: 'VN',
            name: 'Vietnam'
        },
        {
            code: 'ZA',
            name: 'South Africa'
        },
        {
            code: 'ZW',
            name: 'Zimbabwe'
        }
      ]);
    }
  }

});
