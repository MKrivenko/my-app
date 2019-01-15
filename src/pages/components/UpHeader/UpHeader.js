import React, { Component } from 'react';
import logo from "../../../assetc/logo.png";
import Navigation from "../navigation/Navigation";
import { Button, Menu } from 'semantic-ui-react'
import { Image } from 'semantic-ui-react'

const LINKS = [
    { label: 'signup', to: 'signup' },
    { label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];

const Logo = () => (
    <Image
        src={logo}
        as='a'
        className='app-logo'
        href='/'
    />
)

const MenuButtons = () => (
    <Menu secondary>
        <Menu.Item>
            <Button>Log-in</Button>
        </Menu.Item>

        <Menu.Item>
            <Button color='olive'>Sign up</Button>
        </Menu.Item>
    </Menu>
)

export default class UpHeader extends Component {
    state = {
    }
    render () {
        return (
            <header className="App-header">
                <Logo/>
                <div className="container">
                    <Navigation links={LINKS} />
                </div>
                <MenuButtons/>
            </header>
        )
    }
}