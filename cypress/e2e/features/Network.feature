Feature: Network page test
    Background:
        Given User is located in Network page 
    Scenario: Network page content
        When User is located in Network page and check content
        Then All content must be visible and user must go to Pricing page