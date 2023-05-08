import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

function SingedOut({handleSignIn}) {
    return (
        <div>
            <Menu.Item>
                <Button primary onClick={handleSignIn}>Giriş Yap</Button>
                <Button primary style={{marginLeft:".5em"}}>Kayıt Ol</Button>
            </Menu.Item>

        </div>
    )
}

export default SingedOut