Feature: Main page test

    Feature Main page content must works correctly

    Background:
        Given User is located in main page 
    Scenario: Test of main page links in footer
        When User clicks on any links in footer
        Then All links works correctly and user is located on last clicked link
    Scenario: 'Powerfull product' section test
        When User clicks on link in 'Powerfull product' section
        Then All links works corretly and user is located on main page
    Scenario: Side panel test
        When User clicks on side panel and click on links
        Then All links works corretly and side panel is visible with all links

