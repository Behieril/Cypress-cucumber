Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the login page
    Scenario: Success Login
        When A user enters the email "roman.bobokov@gmail.com", the password "rp%-afu#2-9GmgE", and clicks on the login button
        Then the URL will be on main page
        Scenario: Incorrect Username Login
        When A user provides incorrect credentials, and clicks on the login button
            | username | password        |
            |testName@gmail.com |rp%-afu#2-9GmgE |
        Then The error message 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' should be visible
    Scenario: Incorrect Password Login
        When A user provides incorrect credentials, and clicks on the login button
            | username               | password     |
            |roman.bobokov@gmail.com |testPassword |
        Then The error message 'That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.' should be visible

