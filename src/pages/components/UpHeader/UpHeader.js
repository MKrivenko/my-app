import React, { Component } from 'react';
import logo from "../../../assetc/logo.png";
import Navigation from "../navigation/Navigation";
import { Image, Button, Menu, Header, Icon, Input } from 'semantic-ui-react'

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

const InputSearchIconElement = () => (
    <Input className='search-element' icon={<Icon name='search' color='olive' inverted circular link />} placeholder='Search tipsters' />
)

export default class UpHeader extends Component {
    state = {
    }
    render () {
        return (
            <header>
                <div className="App-header">
                    <Logo/>
                    <div className="container">
                        <Navigation />
                    </div>
                    <MenuButtons/>
                </div>
                <div className="sub-header">
                    <div className="container">
                        <div className="sub-header-container">
                            <div className="row">
                                <ul className="breadcrumbs">
                                    <li>bet2earn</li>
                                    <li><a href="#">/ tipsters</a></li>
                                </ul>
                            </div>
                            <div className="row flex v-centered between">
                                <div className='flex v-centered'>
                                    <Header as='h1'>Tipsters</Header>
                                    <ul className="filter-top">
                                        <li className='active'><a href="#">All</a></li>
                                        <li><a href="#">Free</a></li>
                                        <li><a href="#">Premium</a></li>
                                    </ul>
                                </div>
                                <InputSearchIconElement />

                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}