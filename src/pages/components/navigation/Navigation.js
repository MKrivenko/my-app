import React, { Component } from 'react'
import './Navigation.scss';
import { Dropdown, Menu } from 'semantic-ui-react'

export default class MenuExampleText extends Component {
    state = { activeItem: 'Betting tips' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu text>
                <Menu.Item
                    name='Betting tips'
                    active={activeItem === 'Betting tips'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Gambler Corner'
                    active={activeItem === 'Gambler Corner'}
                    onClick={this.handleItemClick}
                />
                <Dropdown text='Tipsters' pointing className='link item'>
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
                <Menu.Item
                    name='Betting League'
                    active={activeItem === 'Betting League'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Odds comparisor and events'
                    active={activeItem === 'Odds comparisor and events'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='VIP'
                    active={activeItem === 'VIP'}
                    onClick={this.handleItemClick}
                />
                <Menu.Item
                    name='Blog'
                    active={activeItem === 'Blog'}
                    onClick={this.handleItemClick}
                />
            </Menu>
        )
    }
}
