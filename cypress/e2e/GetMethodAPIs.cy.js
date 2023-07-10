/// <reference types="cypress" />
//Retrive object data from the test API
describe('Retrive Data from the Amused Test API',function() {

  beforeEach(function() {
    cy.defineApiEndpoint(); //call the end point command 
  });
  it('Get All Objects', function() { 
    cy.request({
      method: 'GET',
      url: Cypress.env('apiEndpoint') // call env endpoint url in the command of defineApiEndpoint
    }).then((response) => {
      expect(response.status).to.eq(200);
    
    });
})

})
