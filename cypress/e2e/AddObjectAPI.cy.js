/// <reference types="cypress" />



// Add object 

describe("Add Object-POST Method",function(){

    beforeEach(function () {
        cy.defineApiEndpoint(); //call the end point command ----Command.js 
      });

      
  before(function(){
    cy.fixture('/CreateObject_APIData.json').then(function (CreateObjectData) {         // call fixture file APIData Json 

      this.CreateObjectData = CreateObjectData;
    })
  })

    
    it("Add an object",function(){

        cy.request({
        method:'POST',
        url: Cypress.env('apiEndpoint'), // call env endpoint url in the command of defineApiEndpoint
        body:this.CreateObjectData
        }).then((response)=>{

            // validate the response status code

            expect(response.status).to.eq(200); 

            // validate the created object response 
            expect(response.body.name).to.eq(this.CreateObjectData.name)    // validate name 
            expect(response.body.data.year).to.deep.equal(this.CreateObjectData._year);// validate year 
            expect(response.body.data.price).to.deep.equal(this.CreateObjectData._price);// validate price 
        
        })

    })
})