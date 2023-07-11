/// <reference types="cypress" />

const cypress = require("cypress");

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
        Method:'POST',
        url:cypress.env('apiEndpoint'),
        body:this.CreateObjectData
        }).then((response)=>{

            expect(response.status).to.eq(200); 

        })

    })
})