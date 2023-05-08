import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'

function SignedIn({handleSignOut}) {
  return (
    <div>
      <Menu.Item>
        <Image avatar spaced="right" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" />
        <Dropdown pointing="top left" text='Oğuz'>
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"/>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out" onClick={handleSignOut}/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  )
}

export default SignedIn