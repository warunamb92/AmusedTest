/// <reference types="cypress" />


describe("Update the Object-PUT Method", function () {
  beforeEach(function () {
    cy.defineApiEndpoint(); //call the end point command ----Command.js 
  });


  before(function () {
    cy.fixture('/UpdateObjectRequestData.json').then(function (UpdateObjectData) {         // call fixture file APIData Json 

      this.UpdateObjectData = UpdateObjectData;
    })

    cy.fixture('/UpdateObjectResponseData.json').then(function (UpdatedResponseObjectData) {         // call fixture file APIData Json 

      this.UpdatedResponseObjectData = UpdatedResponseObjectData;
    })



  })


  it("Update an object", function () {

    cy.request({
      method: 'PUT',
      url:'https://api.restful-api.dev/objects/ff808181893962f3018945cde992055a', // call env endpoint url in the command of defineApiEndpoint
      body: this.UpdateObjectData
    }).then((response) => {

     

      expect(response.status).to.eq(200); // validate the response status code
      expect(response.body.name).to.eq(this.UpdatedResponseObjectData.name)    // validate name 
      expect(response.body.data.year).to.deep.equal(this.UpdatedResponseObjectData.year); // validate year
      expect(response.body.data.price).to.deep.equal(this.UpdatedResponseObjectData.price); // validate price
      expect(response.body.data.color).to.deep.equal(this.UpdatedResponseObjectData.color);// validate color 
      


    })

  })



})
