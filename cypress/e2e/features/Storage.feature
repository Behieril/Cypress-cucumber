Feature: Storage page test

     Background:
        Given User go to the storage page
    Scenario: Profile tabs visibility
        When User scrolls to Frequently Asked Questions about Telnyx Storage
        Then All span should work properly
