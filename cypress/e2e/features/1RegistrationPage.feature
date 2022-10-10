Feature: Registration test without CAPTHA

    Feature Registration process should be work fine

    Background:
        Given A web browser is at the main page
    Scenario: Success registration from main page
        When A user enters the email "roman.bobokov@gmail.com" and clicks on try free button then enter correct credentials
        Then Registration must be finished
    Scenario: Success registration
        When A user click on SignUp and enter correct credentials
        Then Registration must be finished
