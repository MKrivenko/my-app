import React, { Component } from 'react';
import logo from "../../../assetc/logo.png";
import twitter from "../../../assetc/icon-06.png";
import telegram from "../../../assetc/icon-07.png";
import masterCard from "../../../assetc/img-06.png";
import payPal from "../../../assetc/img-07.png";
import visa from "../../../assetc/img-08.png";
import skrill from "../../../assetc/img-09.png";
import appStore from "../../../assetc/img-10.png";
import googlePlay from "../../../assetc/img-11.png";
import { Image, Button, Header, List } from 'semantic-ui-react'

const Twitter = () => (
    <a href='https://twitter.com' >
        <Image src={twitter} />
        <span>Twitter</span>
    </a>
)
const Telegram = () => (
    <a href='https://telegram.org' >
        <Image src={telegram} />
        <span>Telegram</span>
    </a>
)

export default class Footer extends Component {
    state = {
    }
    render () {
        return (
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="flex between mdirection">
                            <div className="footer-col">
                                <Image
                                    src={logo}
                                    as='a'
                                    className='footer-logo'
                                    href='/'
                                />
                                <ul className="social">
                                    <li><Twitter/></li>
                                    <li><Telegram/></li>
                                </ul>
                                <Header as='h3'>USE YOUR EMAIL</Header>
                                <Button>Subscribe</Button>

                            </div>
                            <div className="footer-col">
                                <Header as='h3'>GENERAL LINKS</Header>
                                <List>
                                    <List.Item>
                                        <List.Content><a href="/">Best Sellers</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href="/">Premium Tipsters</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href="/">Free tipsters</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href='/'>Contact</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href='/'>Privacy Policy</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href='/'>General conditions</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href='/'>Cookies Policy</a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href='/'>Betting Tips</a></List.Content>
                                    </List.Item>
                                </List>
                            </div>
                            <div className="footer-col">
                                <Header as='h3'>SECURE PAYMENT</Header>
                                <ul className="payment">
                                    <li><a href="/"><Image src={masterCard} /></a></li>
                                    <li><a href="/"><Image src={payPal} /></a></li>
                                    <li><a href="/"><Image src={visa} /></a></li>
                                    <li><a href="/"><Image src={skrill} /></a></li>
                                </ul>
                                <Header as='h3'>GET IN TOUCH</Header>
                                <a className='mailto' href="mailto:info@bet2earn.com">info@bet2earn.com</a>


                            </div>
                            <div className="footer-col download-col">
                                <Header as='h3'>DOWNLOAD OUR APP</Header>
                                <List>
                                    <List.Item>
                                        <List.Content><a href="/"><Image src={appStore} /></a></List.Content>
                                    </List.Item>
                                    <List.Item>
                                        <List.Content><a href="/"><Image src={googlePlay} /></a></List.Content>
                                    </List.Item>
                                </List>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="footer-bottom">
                    <span>Coperight bet2earn.com 2018. All rights reserved.</span>
                </div>
            </footer>
        )
    }
}