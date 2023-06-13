import React from 'react'
import Appointments from './Appointments'

describe('<Appointments />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Appointments />)
  })
})