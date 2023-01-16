Feature: End to End Ecommerce validation

    Application Regression

@Regression
Scenario: Ecommerce products delivery
Given I open Ecommerce page
When I add items to Cart
And I Validate the total prices
Then select the country, submit and verify Thankyou

@Smoke
Scenario: Filling the form to shop
Given I open Ecommerce page
When I fill the form details 
|name | gender|
|bobz | Male|
Then I validate the forms behaviour
And select the Shop Page