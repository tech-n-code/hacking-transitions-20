import React from 'react'
import CohortNav from './CohortNav'

describe('<CohortNav />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CohortNav />)
  })
})