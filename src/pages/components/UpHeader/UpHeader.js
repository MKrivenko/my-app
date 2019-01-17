import React, { Component } from 'react';
import logo from "../../../assetc/logo.png";
import Navigation from "../Navigation/Navigation";
import { Image, Button, Menu, Header, Icon, Input, Dropdown, Responsive } from 'semantic-ui-react'

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
                        <Responsive minWidth={1348}>
                            <Navigation />
                        </Responsive>
                        <Responsive maxWidth={1347}>
                            <Dropdown icon='content'>
                                <Dropdown.Menu>
                                    <Responsive maxWidth={767}>
                                    <Dropdown.Item><Button>Log-in</Button><Button color='olive'>Sign up</Button></Dropdown.Item>
                                    </Responsive>
                                    <Dropdown.Item>Betting tips</Dropdown.Item>
                                    <Dropdown.Item>Gambler Corner</Dropdown.Item>
                                    <Dropdown text='Tipsters' className='link item'>
                                        <Dropdown.Menu>
                                            <Dropdown.Header>Categories</Dropdown.Header>
                                            <Dropdown.Item>Home Goods</Dropdown.Item>
                                            <Dropdown.Item>Bedroom</Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Header>Order</Dropdown.Header>
                                            <Dropdown.Item>Status</Dropdown.Item>
                                            <Dropdown.Item>Cancellations</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown.Item>Betting League</Dropdown.Item>
                                    <Dropdown.Item>Odds comparisor and events</Dropdown.Item>
                                    <Dropdown.Item>VIP</Dropdown.Item>
                                    <Dropdown.Item>Blog</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Responsive>
                    </div>
                    <Responsive minWidth={768}>
                    <MenuButtons/>
                    </Responsive>
                </div>
                <div className="sub-header">
                    <div className="container">
                        <div className="sub-header-container">
                            <div className="row">
                                <ul className="breadcrumbs">
                                    <li>bet2earn</li>
                                    <li><a href="/">/ tipsters</a></li>
                                </ul>
                            </div>
                            <div className="row flex v-centered between mdirection">
                                <div className='flex v-centered mdirection'>
                                    <Header as='h1'>Tipsters</Header>
                                    <ul className="filter-top">
                                        <li className='active'><a href="/">All</a></li>
                                        <li><a href="/">Free</a></li>
                                        <li><a href="/">Premium</a></li>
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