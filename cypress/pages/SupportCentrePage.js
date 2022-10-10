export class SupportCenter{
    BackToMain(){
        cy.get('.breadcrumb > :nth-child(1) > a').click()
    }
    SearchField(Text){
        cy.get('.search__input').type(Text)
    }
    FirstSearchResult(){
        cy.get(':nth-child(2) > .search__article').click()
    }
    GettingStarted(){
        cy.get(':nth-child(1) > .paper').click()
    }
    ConfigurationGuides(){
        cy.get(':nth-child(2) > .paper').click()
    }
    MessagingArticlesandGuides(){
        cy.get(':nth-child(3) > .paper').click()
    }
    VoiceandFax(){
        cy.get(':nth-child(4) > .paper').click()
    }
    PortingArticlesandGuides(){
        cy.get(':nth-child(5) > .paper').click()
    }
    BilingPricing(){
        cy.get(':nth-child(6) > .paper').click()
    }
    Programmableireless(){
        cy.get(':nth-child(7) > .paper').click()
    }
    ToursandVideos(){
        cy.get(':nth-child(8) > .paper').click()
    }
    FAQsaboutTelnyx(){
        cy.get(':nth-child(9) > .paper').click()
    }
    InternationalDIDRequirements(){
        cy.get(':nth-child(10) > .paper').click()
    }
    BulkEditNumbers(){
        cy.get(':nth-child(11) > .paper').click()
    }
    ReportingArticlesAndGuides(){
        cy.get(':nth-child(12) > .paper').click()
    }
    EverethingSIP(){
        cy.get(':nth-child(13) > .paper').click()
    }
    ProgrammableApplications(){
        cy.get(':nth-child(14) > .paper').click()
    }
    ReferenceMaterial(){
        cy.get(':nth-child(15) > .paper').click()
    }
}