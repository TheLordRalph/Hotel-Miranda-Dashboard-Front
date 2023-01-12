describe('Login', () => {
  
  let data;

  before(() => {
    cy.visit('http://localhost:3000/')
    cy.fixture('example').then((json) => {
      data = json;
    })
  });
  
  it('Enter the home', () => {
    cy.loginAdmin('prueba@gmail.com', 'prueba123')
    cy.loginAdmin(data.email, data.pass)
  });
})