import React from 'react'
import UserEducationTooltip from './UserEducationTooltip'

describe('<UserEducationTooltip />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<UserEducationTooltip />)
  })
})