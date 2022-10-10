export class MainPage{
    CookiesSkip(){
        cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1').click()
    }
    SignUp(){
        cy.get('.sc-14c941d7-5.sc-14c941d7-6 > .sc-5d3a275a-0 > .sc-5d3a275a-1').click()
    }
    EmailField(){
        cy.get('.sc-876fcb71-2').type(Math.random().toString(36).substring(2, 35)+"@gmail.com")
    }
    TryForFreeButtonClick(){
        cy.contains('Try for free').click()
    }
    LogInButtonClick(){
        cy.get('.sc-ee0ec023-2 > :nth-child(6)').click()
        
    }
    MessagingAPI(){
        cy.get(':nth-child(1) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    VideoAPI(){
        cy.get(':nth-child(2) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    Wireless(){
        cy.get(':nth-child(3) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    VoiceAPIlink(){
        cy.get(':nth-child(4) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    ElasticSIPTrunking(){
        cy.get(':nth-child(5) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    Storage(){
        cy.get(':nth-child(6) > .sc-3e56386e-4 > .sc-3e56386e-5').click()
    }
    MainPageButton(){
        cy.get('.sc-2ef1384a-0').click()
    }
    SupportCenterLink(){
        cy.get('.sc-ee0ec023-2 > :nth-child(5)').click()
    }
    Footer(){
        cy.get('.sc-7b6c9f9b-3').scrollIntoView({ easing: 'linear' })
    }
    CallControll(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    ProgrammableSMS(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    WhatsAppAPI(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    SecureFaxing(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(5) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    WirelessCellularIoT(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(6) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    NumberLookup(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(7) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    GlobalNumbers(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(8) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    VerifyAPI(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    SeeAllProducts(){
        cy.get('[data-e2e="Footer--navItem-products"] > div > .sc-7b6c9f9b-6 > :nth-child(10) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    DeveloperDocs(){
        cy.get('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(1) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    Blog(){
        cy.get('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    ResourceHub(){
        cy.get('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    ReleaseNotes(){
        cy.get('[data-e2e="Footer--navItem-resources"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    ElasticSIP(){
        cy.get('[data-e2e="Footer--navItem-pricing"] > div > .sc-7b6c9f9b-6 > :nth-child(1) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()

    }
    SMSAPI(){
        cy.get('[data-e2e="Footer--navItem-pricing"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    VoiceAPI(){
        cy.get('[data-e2e="Footer--navItem-pricing"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    WirelessPricing(){
        cy.get('[data-e2e="Footer--navItem-pricing"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    AboutUs(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(1) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    Careers(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(2) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    DataPrivacy(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(3) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    SupportCenter(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(4) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    ReportAbuse(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(5) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    PrivacyPolicy(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(6) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    CookiePolicy(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(7) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    AcceptableUsePolicy(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(8) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    WebsiteTerms(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(9) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    WebsiteEnforcement(){
        cy.get('[data-e2e="Footer--navItem-company"] > div > .sc-7b6c9f9b-6 > :nth-child(10) > .sc-f97529d6-0 > .sc-6c41f57a-0 > span').click()
    }
    SideBarButton(){
        cy.get('.sc-14c941d7-8').click()
    }
    Products(){
       cy.get('.sc-6ef4e600-19 > :nth-child(1)').click
    }
    Solutions(){
        cy.get(':nth-child(2) > .sc-6ef4e600-12').click()
    }
    Resources(){
        cy.get(':nth-child(4) > .sc-6ef4e600-12').click()
    }
    Company(){
        cy.get(':nth-child(5) > .sc-6ef4e600-12').click()
    }
    Network(){
        cy.get('.sc-f97529d6-0 > .sc-6ef4e600-12').click()
    }
    Pricing(){
        cy.get(':nth-child(6) > .sc-6ef4e600-12').click()
    }
    BackButton(){
        cy.get('.sc-6ef4e600-20').click()
    }
}