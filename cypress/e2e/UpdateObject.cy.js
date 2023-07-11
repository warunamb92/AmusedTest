/// <reference types="cypress" />


describe("Update the Object-PUT Method", function () {
  beforeEach(function () {
    cy.defineApiEndpoint(); //call the end point command ----Command.js 
  });


  before(function () {
    cy.fixture('/UpdateObject_APIData.json').then(function (UpdateObjectData) {         // call fixture file APIData Json 

      this.UpdateObjectData = UpdateObjectData;
    })
  })


  it("Update an object", function () {

    cy.request({
      method: 'PUT',
      url:'https://api.restful-api.dev/objects/ff808181893962f3018945cde992055a', // call env endpoint url in the command of defineApiEndpoint
      body: this.UpdateObjectData
    }).then((response) => {

      // validate the response status code

      expect(response.status).to.eq(200);

      // validate the created object response 


    })

  })



})
