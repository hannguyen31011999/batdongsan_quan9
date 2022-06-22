import React, { Fragment } from 'react'
import styled from 'styled-components'

const Logo = styled.div`
  flex: 1;
  h2 {
    height: 100%;
  }
`
const Link = styled.a`
  font-size: 24px;
  font-weight: 700;
  font-style: italic;
  text-decoration: none;
  color: ${(props) => props.color || '#000'};
`

export default function HeaderLogo() {
  return (
    <Fragment>
      <Logo>
        <Link href="">Instagram</Link>
      </Logo>
    </Fragment>
  )
}
