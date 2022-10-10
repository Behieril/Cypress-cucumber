Feature: Forgot password page

    Feature Forgot password page will work properly.

    Background:
        Given A web browser is at the forgot password page
    Scenario: Success reset of the password
        When A user enters the email "roman.bobokov@gmail.com" and clicks on the resrt password button
        Then The message 'We have accepted your password reset request. If you have a Telnyx account and are unable to reset your password successfully, please contact support for assistance.' should be visible