Feature: Support center test

    Feature Support center test 

    Background:
        Given User should be on main page
    Scenario: Support center link test
        When User clicks on Support Center link on main page
        Then User should be in 'Getting Started' page
    Scenario: Success registration from main page
        When User type in search field 'Type' and click on first result
        Then User must be in first result page