import React, { Fragment } from 'react'
import styled from 'styled-components'
import HeaderAction from './HeaderAction'
import HeaderLogo from './HeaderLogo'
import HeaderSearch from './HeaderSearch'

const ContentHeader = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1024px;
  display: flex;
  align-items: center;
`

const Header = styled.header`
  background-color: ${(props) => props.background || '#FFFFFF'};
  height: 60px;
  border-bottom: 1px solid #dbdbdb;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function HeaderComponent() {
  return (
    <Fragment>
      <Header>
        <ContentHeader>
          <HeaderLogo />
          <HeaderSearch />
          <HeaderAction />
        </ContentHeader>
      </Header>
    </Fragment>
  )
}
