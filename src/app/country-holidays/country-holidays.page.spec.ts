import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { HolidaysService } from '../services/holidays.service';
import { CountryHolidaysPage } from './country-holidays.page';

describe('CountryHolidaysPage', () => {
  let component: CountryHolidaysPage;
  let fixture: ComponentFixture<CountryHolidaysPage>;
  let holidaysService: HolidaysServiceMock;
  let activatedRoute: ActivatedRoute;
  let page: any;

  beforeEach(waitForAsync(() => {
    holidaysService = new HolidaysServiceMock();

    TestBed.configureTestingModule({
      declarations: [ CountryHolidaysPage ],
      imports: [
        IonicModule.forRoot(),
        HttpClientModule,
        RouterTestingModule
      ]
    })
    .overrideProvider(ActivatedRoute, {useValue: {
      snapshot: {
        paramMap: {
          get(param: string) {
            if (param == "id") {
              return "BR"
            }
          }
        },
        params: {
          id: "BR"
        }
      }
    }})
    .overrideProvider(HolidaysService, {useValue: holidaysService})
    .compileComponents();

    fixture = TestBed.createComponent(CountryHolidaysPage);
    activatedRoute = TestBed.get(ActivatedRoute);

    component = fixture.componentInstance;
    page = fixture.debugElement.nativeElement;

    fixture.detectChanges();
  }));

  it('given page init, then search country holidays using page param', () => {
    expect(holidaysService._foundHolidaysWithCountry).toEqual("BR");
  });

  it('given page init, then search country holidays', () => {
    expect(holidaysService._foundHolidays).toBeTruthy();
  });

  it('given holidays loaded, then show country holidays list', () => {
    expect(page.querySelectorAll(".holiday").length).toEqual(12);
  });

  it('given holidays loaded, then show carnaval on list', () => {
    expect(page.querySelector("#Carnival")).not.toBeNull();
  });

  class HolidaysServiceMock {
    _foundHolidays = false;
    _foundHolidaysWithCountry = "";

    findCountryHolidays(country: string) {
      this._foundHolidays = true;
      this._foundHolidaysWithCountry = country;

      return of([
        {
          "date": "2022-01-01",
          "name": "New Year's Day",
          "local_name": "Confraternização Universal",
          "country_code": "BR",
          "regions": [],
          "types": [
            "Public"
          ]
        },
        {
          "date": "2022-03-01",
          "name": "Carnival",
          "local_name": "Carnaval",
          "country_code": "BR",
          "regions": [],
          "types": [
            "Public"
          ]
        },
        {
          "date": "2022-04-15",
          "name": "Good Friday",
          "local_name": "Sexta feira Santa",
          "country_code": "BR",
          "regions": [],
          "types": [
            "Public"
          ]
        },
        {
          "date": "2022-04-17",
          "name": "Easter Sunday",
          "local_name": "Domingo de Pascoa",
          "country_code": "BR",
          "regions": [],
          "types": [
            "Public"
          ]
        },
        {
            "date": "2022-04-21",
            "name": "Tiradentes",
            "local_name": "Dia de Tiradentes",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-05-01",
            "name": "Labour Day",
            "local_name": "Dia do Trabalhador",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-06-16",
            "name": "Corpus Christi",
            "local_name": "Corpus Christi",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-09-07",
            "name": "Independence Day",
            "local_name": "Dia da Independência",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-10-12",
            "name": "Children's Day",
            "local_name": "Nossa Senhora Aparecida",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-11-02",
            "name": "Day of the Dead",
            "local_name": "Dia de Finados",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-11-15",
            "name": "Republic Proclamation Day",
            "local_name": "Proclamação da República",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        },
        {
            "date": "2022-12-25",
            "name": "Christmas Day",
            "local_name": "Natal",
            "country_code": "BR",
            "regions": [],
            "types": [
                "Public"
            ]
        }
      ])
    }
  }

});
