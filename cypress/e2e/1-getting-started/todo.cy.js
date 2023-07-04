/// <reference types="cypress" />
import 'cypress-iframe'

describe("Connexion_OpenCruise",()=>(
  it('Connexion_Admin',()=>{
      cy.visit('https://opencruise-ok.sogeti-center.cloud/')
      cy.get(':nth-child(2) > .form-control').type('ananannn@mail')
      cy.get(':nth-child(3) > .form-control').type('Wxcvbn9090')
      cy.get('.btn').click()
  })
))
describe("Inscriprion_Sur_OpenCruise",()=>(
  it('Inscription_Particulier',()=>{
    cy.visit('https://opencruise-ok.sogeti-center.cloud/')
    cy.get('a').click()
    cy.get('.container-fluid > :nth-child(1) > :nth-child(2) > :nth-child(1) > .signup-form > .container > .pt-4 > :nth-child(1) > .form-group > .form-control').type('aqzsedrf')
    cy.get('.ng-invalid.ng-dirty > .signup-form > .container > .pt-4 > :nth-child(2) > .form-control').type('Aqwxszed850')
    
  })

))