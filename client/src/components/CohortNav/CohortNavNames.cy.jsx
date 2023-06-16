import React from 'react'
import CohortNavNames from './CohortNavNames'

describe('<CohortNavNames />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CohortNavNames />)
  })
})