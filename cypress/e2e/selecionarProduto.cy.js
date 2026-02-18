describe('Selecionar Produtos', () => {
  const massa = require('../fixtures/massa')
  
  //vai abrir o navegador
  beforeEach(()=> {
    cy.visit('/')// abre o browser na url informada em cypress.cofig
  })
    
  it('Selecionar a Mocila', () => {
    cy.title()
        .should('eq', 'Swag Labs')
    cy.get('input[data-test="username"]')
       .type('standard_user')

    cy.get('#password')
        .type('secret_sauce')

    cy.get('input[name="login-button"]')
        .click()

    cy.get('[data-test="title"]')
        .should('have.text', 'Products')

    cy.get('[data-test="inventory-item-sauce-labs-backpack-img"]')
        .click()

    cy.get('[data-test="back-to-products"]')
        .should('have.text', 'Back to products')

    cy.get('[data-test="inventory-item-name"]') 
        .should('have.text', 'Sauce Labs Backpack')   

    cy.get('[data-test="inventory-item-price"]')
        .should('have.text', '$29.99')

    cy.get('#add-to-cart')
        .click()

    cy.get('a.shopping_cart_link')
        .should('have.text', '1')
        .click()

    cy.get('span.title')
        .should('have.text', 'Your Cart')

    cy.get('[data-test="inventory-item-name"]') 
        .should('have.text', 'Sauce Labs Backpack')

    cy.get('[data-test="inventory-item-price"]')
        .should('have.text', '$29.99')

    cy.get('div.cart_quantity')
        .should('have.text','1')
  })
massa.array.forEach(({username, productName, productPrice})=> {
  it(`Selecionar ${productName} - Usuario: ${username}`, () => {
    cy.title()
        .should('eq', 'Swag Labs')
    cy.get('input[data-test="username"]')
       .type(username)

    cy.get('#password')
        .type('secret_sauce')

    cy.get('input[name="login-button"]')
        .click()

    cy.get('[data-test="title"]')
        .should('have.text', 'Products')

    cy.contains('.inventory_item_name', productName)
        .click()

    cy.get('[data-test="back-to-products"]')
        .should('have.text', 'Back to products')

    cy.get('[data-test="inventory-item-name"]') 
        .should('have.text', productName)   

    cy.get('[data-test="inventory-item-price"]')
        .should('have.text', productPrice)

    cy.get('#add-to-cart')
        .click()

    cy.get('a.shopping_cart_link')
        .should('have.text', '1')
        .click()

    cy.get('span.title')
        .should('have.text', 'Your Cart')

    cy.get('[data-test="inventory-item-name"]') 
        .should('have.text', productName)

    cy.get('[data-test="inventory-item-price"]')
        .should('have.text', productPrice)

    cy.get('div.cart_quantity')
        .should('have.text','1')
  })
})
/*
  afterEach(()=>{
    cy.get('#remove-sauce-labs-backpack')
      .click()

    cy.get('#react-burger-menu-btn')
        .click()

    cy.get('[data-test="logout-sidebar-link"]')
        .click()

    cy.get('[data-test="login-button"]')
        .should('be.visible')
    
  })
*/
  })