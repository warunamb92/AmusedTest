/// <reference types="cypress" />
//Retrive object data from the test API
describe('Retrive Data from the Amused Test API', function () {

  before(function(){
    cy.fixture('/API_data.json').then(function (APIResponseData) {         // call fixture file APIData Json 

      this.APIResponseData = APIResponseData;
    })
  })

  beforeEach(function () {
    cy.defineApiEndpoint(); //call the end point command ----Command.js 
  });


  it('Get All Objects-Check Status Code', function () {
    cy.request({
      method: 'GET',
      url: Cypress.env('apiEndpoint') // call env endpoint url in the command of defineApiEndpoint
    }).then((response) => {
      // verify the status code is 200 
      expect(response.status).to.eq(200); 

      //validate response body 
      const _response = response.body; // store response body into the variable
      expect(_response).to.have.length(13);

      // Validate properties and values of specific objects-------------------------------this has been done using the fixture file called API_data json file 
      const _firstObject = _response[0]; // taking the first object and read the data
      expect(_firstObject).to.have.property('id',this.APIResponseData.id);
      expect(_firstObject).to.have.property('name',this.APIResponseData.name);
      expect(_firstObject.data).to.deep.equal({
        color: this.APIResponseData.color,
        capacity: this.APIResponseData.capacity
      });

      // Validate properties and values of second objects

      const _scenondObject = _response[1];
      expect(_scenondObject).to.have.property('id', '2');
      expect(_scenondObject).to.have.property('name', 'Apple iPhone 12 Mini, 256GB, Blue');
      expect(_scenondObject.data).to.be.null;

      const _third = _response[3];
      expect(_third).to.have.property('id', '4');
      expect(_third).to.have.property('name', 'Apple iPhone 11, 64GB');
      expect(_third.data).to.deep.equal({
        price: 389.99,
        color: 'Purple'
      });

      // Validate properties and values of nineth objects

      const _nineObject = _response[8];
      expect(_nineObject.data).to.deep.equal({

        Color: "Red",
        Description: "High-performance wireless noise cancelling headphones"
      });

    })


  })
})
