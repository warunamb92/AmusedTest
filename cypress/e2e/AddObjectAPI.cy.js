/// <reference types="cypress" />



// Add object 
let Objectid;
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

            Objectid = response.body.id;


        
        })
        

    })
})


//-------------- in here created Object id will capture and it will be deleted
describe("Delete the Object-Delete Method", function () {
 

  it("Delete exists Object", function () {

    cy.request({
      method: 'DELETE',
      url:'https://api.restful-api.dev/objects/'+Objectid, // call env endpoint url in the command of defineApiEndpoint
   
    }).then((response) => {


      expect(response.status).to.eq(200); // validate the response status code
      expect(response.body.message).to.equal("Object with id = "+Objectid+" has been deleted.");

    

    })


 

 
  })
})