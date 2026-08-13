Feature: Ecommerce order
 @Regression 
  Scenario Outline: Play the order in Ecommerce site
    Given As a user I can login into website with "<username>" and "<Password>"
    When Select a product "<productname>" from page and add in to cart
    Then order get placed and confirm the order

    Examples:
      | username                    | Password   | productname     |
      | mohannagarajan16@gmail.com  | test@123A  | iphone 13 pro   |


@validation 

  Scenario Outline: login into Ecom2 site
    Given As a newuser I can login into website with "<username>" and "<Password>"
    Then log failed 
    Examples:
      | username                    | Password   |
      | nmohan5                     | test@123A  | 
       |mohan16                      |test@321   |