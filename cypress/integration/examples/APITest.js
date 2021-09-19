describe('CRUD happy path test', function(){
    beforeEach(function() {
        cy.visit('https://reqres.in/')
    })


  it('Test GET Request(Read)', () => {
    cy.request('https://reqres.in/api/users?page=2')
         .then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.data[2]).to.have.property('last_name', 'Funke')
    })
})


    it('Test POST Request(Create)', () => {
        cy.request({
             method: "POST",
             url: "https://reqres.in/api/users",
             body: {
                 "name" : "morpheus",
                 "job":"leader"
             }
        }).then((response) => { 
                expect(response.body).has.property("name","morpheus")
                expect(response.body).has.property("job","leader")
        })
  })


  it('Test PUT Request(Update)', () => {
    cy.request({
         method: "PUT",
         url: "https://reqres.in/api/users",
         body: {
             "name" : "morpheus",
             "job":"zion"
         }
    }).then((response) => { 
            expect(response.body).has.property("name","morpheus")
            expect(response.body).has.property("job","zion resident")//Aserting negative scenario
    })
})


it('Test DELETE Request(Delete)', () => {
    cy.request({
         method: "DELETE",
         url: "https://reqres.in/api/users/2"
    }).then((response) => { 
            expect(response.body).to.be.empty
            expect(response.status).to.equal(204)
    })
})
})