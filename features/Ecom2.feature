@validation 
Feature: Ecommerce login
  Scenario Outline: login into Ecom2 site
    Given As a newuser I can login into website with "<username>" and "<Password>"
    Then log failed 
    Examples:
      | username                    | Password   |
      | nmohan5                     | test@123A  | 
       |mohan16                      |test@321   |