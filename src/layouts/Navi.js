import React, { useState } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from "./CartSummary"
import SingedOut from './SingedOut'
import SignedIn from './SignedIn'
import { NavLink, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
 
function Navi() {
  const {cartItems} = useSelector(state => state.cart)
  const [isAuthenticated, setisAuthenticated] = useState(false)
  const navigate = useNavigate()

  function handleSignOut() {
    setisAuthenticated(false)
    navigate('/')
  }

  function handleSignIn() {
    setisAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item
            name='home'
            as={NavLink}
            to="/"
          />

          <Menu.Menu position='right'>
            {cartItems.length >0&&<CartSummary />}
            {isAuthenticated ? <SignedIn handleSignOut={handleSignOut} /> : <SingedOut handleSignIn={handleSignIn} />}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}

export default Navi