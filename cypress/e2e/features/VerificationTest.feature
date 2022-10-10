Feature: Resend verification 

    Feature Resend verification mail

    Background:
        Given User should be on verification page
    Scenario: User must take verification mail
        When User input their email
        Then User must see notification
