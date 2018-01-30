/// <reference types="cypress" />
import { add } from '../support/add';

// brings type definition from @types/chai
declare const expect: Chai.ExpectStatic;

describe('TypeScript', () => {
  it('works', () => {
    // note TypeScript definition
    const x = 42;
    expect(x).to.equal(42);
  });

  it('checks shape of an object', () => {
    const object = {
      age: 21,
      name: 'Joe'
    };
    expect(object).to.have.all.keys('name', 'age');
  });

  it('uses cy commands', () => {
    cy.wrap({}).should('deep.eq', {});
  });

  it('should display welcome message', () => {
    cy.visit('/');
    cy.get('h1').should('contain', 'Welcome to app!');
  });

  // enable once we release updated TypeScript definitions
  it('has Cypress object type definition', () => {
    expect(Cypress.version).to.be.a('string');
  });

  // wrong code on purpose to type check our definitions
  // it('can visit website', () => {
  //   cy.boo()
  // })
  it('adds numbers', () => {
    expect(add(2, 3)).to.equal(5);
  });

  it('uses custom command cy.foo()', () => {
    cy.foo().should('be.equal', 'foo');
  });
});
