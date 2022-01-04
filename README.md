# Ionic Coding Challenge
This is NOT a timed challenge, this is a best practices challenge.
Think about: Interfaces vs Classes, Dry Principles, Solid Principles etc.

Complete and push this before the interview.

## Instructions:

### Login page (/login):
Implement a login form using FormGroup/FormBuilder with the following:
1. Email address (required and valid email address). Its form control name should be "email";
2. A Password field (required and at least 6 character long). Its form control name should be "password";
3. A button that only gets enabled when the form is valid. Its id should be "login";
4. When the user clicks on the enabled button, then go to the home page.
5. That button should not have its type equal to submit.

### Home page (/home):
Implement a home page that lists all the countries that come from the API listed on https://m3o.com/holidays/api#List.
You will need to create an account on that API in order to use it.
1. The API should be called when the page inits using the HolidaysService already created, but not implemented;
2. Each country element should have the id equal to the country code (as id="<country.code>") and the class 'holiday' (as class="country");
3. When you click on one of the countries, redirect to the country holidays page

### Country holidays page (/countries/:id/holidays):
Implement a country holidays page that lists all the holidays for a country that come from the API listed on https://m3o.com/holidays/api#List.
You will need to create an account on that API in order to use it.
1. The API should be called when the page inits using the HolidaysService already created, but not implemented: You need to use the activatedRoute.snapshot.paramMap in order to get access to the page param;
2. Each country holiday element should have the id equal to the holiday name (as id="<holiday.name>") and the class 'holiday' (as class="holiday");
3. This page should have a back button that takes the user back to the home page

## Differentials

A good UI, commented code and using angular features that were not required are differentials.

<!-- ## Further Instructions -->

# Commands

Install the project: npm install

Run the project: npm start

Run the project unit tests: npm test
