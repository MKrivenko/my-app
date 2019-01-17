import React, { Component } from 'react';
import UpHeader from "../components/UpHeader/UpHeader";
import Footer from "../components/Footer/Footer";
import { Header, Dropdown, Icon, Input, Image, Button } from 'semantic-ui-react'

import ava from "../../assetc/photo-01.png";
import ava2 from "../../assetc/photo-02.png";
import img01 from "../../assetc/img-01.png";
import img02 from "../../assetc/img-02.png";
import img03 from "../../assetc/img-03.png";
import img04 from "../../assetc/img-04.png";
import img05 from "../../assetc/img-05.png";
import img06 from "../../assetc/icon-04.png";
import img07 from "../../assetc/icon-05.png";

const Avatar = () => (
    <img src={ava} alt={"avatar"}/>
)
const Avatar2 = () => (
    <img src={ava2} alt={"avatar"}/>
)
const Img01 = () => (
    <img src={img01} alt={"img"}/>
)
const Img02 = () => (
    <Image
        src={img02}
        as='a'
        size='small'
        href='http://google.com'
        target='_blank'
    />
)
const Img03 = () => (
    <Image
        src={img03}
        as='a'
        size='small'
        href='http://google.com'
        target='_blank'
    />
)
const Img04 = () => (
    <Image
        src={img04}
        as='a'
        size='small'
        href='http://google.com'
        target='_blank'
    />
)
const Img05 = () => (
    <Image
        src={img05}
        as='a'
        size='small'
        href='http://google.com'
        target='_blank'
    />
)

//import { sports } from '../common'
//import { league } from '../common'
//import { bookmaker } from '../common'

// ---------------- Sports Dropdown -------------
const sports = [
   {
       key: 'futbol',
       text: (
            <span>
                <Icon name='futbol' /> Football
            </span>
       ),
       value: 'Football',
   },
    {
        key: 'baseball',
        text: (
            <span>
                <Icon name='baseball ball' /> Baseball
            </span>
        ),
        value: 'Baseball',
    },
 ]

const DropdownSports = () => (
    <Dropdown placeholder='Select sports' search fluid selection options={sports} defaultValue={sports[0].value} />
)

// ---------------- league Dropdown -------------
const league = [
    { key: '1', text: 'World Cup', value: 'World Cup' },
    { key: '2', text: 'CBA', value: 'CBA' },
    { key: '3', text: 'Bundesliga woomen', value: 'Bundesliga woomen' }
    ]

const DropdownLeague = () => (
    <Dropdown placeholder='Select League' clearable fluid search selection options={league} defaultValue={league[0].value} />
)

// ---------------- bookmaker Dropdown -------------
const bookmaker = [
    { key: '1', text: 'bet365', value: 'bet365' },
    { key: '2', text: 'betfair', value: 'betfair' }
    ]

const DropdownBookmaker = () => (
    <Dropdown placeholder='Select bookmaker' clearable fluid search selection options={bookmaker} defaultValue={bookmaker[0].value} />
)

// ---------------- picks Dropdown -------------
const picks = [
    { key: '1', text: '> 10', value: '> 10' },
    { key: '2', text: '> 100', value: '> 100' }
    ]

const DropdownPicks = () => (
    <Dropdown placeholder='picks' fluid search selection options={picks} defaultValue={picks[0].value} />
)

// ---------------- units Dropdown -------------
const units = [
    { key: '1', text: '> 10', value: '> 10' },
    { key: '2', text: '> 100', value: '> 100' }
]

const DropdownUnits = () => (
    <Dropdown placeholder='units' fluid search selection options={units} defaultValue={units[0].value} />
)

// ---------------- Yield Dropdown -------------
const Yield = [
    { key: '1', text: '> 10', value: '> 10' },
    { key: '2', text: '> 100', value: '> 100' }
]

const DropdownYield = () => (
    <Dropdown placeholder='yield' fluid search selection options={Yield} defaultValue={Yield[0].value} />
)

// ---------------- period Dropdown -------------
const period = [
    { key: '1', text: 'Last Month', value: 'Last Month' },
    { key: '2', text: 'Last Year', value: 'Last Year' },
    ]

const DropdownPeriod = () => (
    <Dropdown placeholder='Select period' fluid search selection options={period} defaultValue={period[0].value} />
)
// ---------------- Order by Dropdown -------------
//import { order } from '../common'
const order = [
   {
     text: 'Number of followers',
     value: 'Number of followers',
   },
    {
        text: 'Number of',
        value: 'Number of',
    }
 ]

const DropdownOrder = () => (
    <Header as='h4'>Order by{' '}
        <Dropdown inline options={order} defaultValue={order[0].value} />
    </Header>
)

// ---------------- tipster actions  -------------


export default class Tipsters extends Component {
    state = {
    }

    render () {
        return (
            <div className='holder'>
                <UpHeader />
                <div className='content-box'>
                    <div className="container">
                        <div className="filters mdirection">
                            <div className="sports">
                                <label>Sports</label>
                                <DropdownSports/>
                            </div>
                            <div className="league">
                                <label>League</label>
                                <DropdownLeague/>
                            </div>
                            <div className="bookmaker">
                                <label>Bookmaker</label>
                                <DropdownBookmaker/>
                            </div>
                            <div className="picks">
                                <label>Picks</label>
                                <DropdownPicks/>
                            </div>
                            <div className="units">
                                <label>Units</label>
                                <DropdownUnits/>
                            </div>
                            <div className="yield">
                                <label>Yield</label>
                                <DropdownYield/>
                            </div>
                            <div className="period">
                                <label>Period</label>
                                <DropdownPeriod/>
                            </div>
                        </div>
                        <div className="row flex v-centered between content-header">
                            <Header as='h3'>743 Tipsters</Header>
                            <DropdownOrder/>
                        </div>
                        <div className="bunner mdirection">
                            <Header as='h3'>Word Cup Starts in</Header>
                            <div>
                             <Input disabled placeholder='00' />
                             <Input disabled placeholder='12' />
                             <Input disabled placeholder='45' />
                            </div>
                        </div>
                        <div className="tipster">
                            <div className='tipster-info'>
                                <div className="tipster-ava">
                                    <Avatar/>
                                    <div className="marked"></div>
                                </div>
                                <div className="tipster-description">
                                    <Header as='h2'>Anje Keizer</Header>
                                    <p>Football, tennnis, baseball</p>
                                    <ul>
                                        <li><Img02/></li>
                                        <li><Img03/></li>
                                        <li><Img04/></li>
                                    </ul>
                                </div>
                                
                            </div>
                            <div className='tipster-actions'>
                                <div className="diagram">
                                    <Img01/>
                                </div>
                                <div>
                                    <strong>7.45%</strong>
                                </div>
                                <div>
                                    <strong>851</strong>
                                </div>
                                <div>
                                    <strong>58.96</strong>
                                </div>
                                <div>
                                    <span>Free</span>
                                </div>
                                <div className="actions">
                                    <Button color='red'>Get Tips</Button>
                                    <a href="/" className='email'>email</a>
                                    <a href="/" className='menu'>menu</a>
                                    <a href="/" className='user'>user</a>
                                </div>
                            </div>
                        </div>
                        <div className="tipster">
                            <div className='tipster-info'>
                                <div className="tipster-ava">
                                    <Avatar2/>
                                </div>
                                <div className="tipster-description">
                                    <Header as='h2'>
                                        Sang Young-Il
                                        <div className='best-tipster' data-tooltip="Best tipster">
                                            <img src={img06} alt={"Best tipster"}/>
                                        </div>
                                    </Header>
                                    <p>Football, tennnis, baseball</p>
                                    <ul>
                                        <li><Img04/></li>
                                        <li><Img05/></li>
                                        <li><Img02/></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='tipster-actions'>
                                <div className="diagram">
                                    <Img01/>
                                </div>
                                <div>
                                    <strong className='red'>-13.51%</strong>
                                </div>
                                <div>
                                    <strong>851</strong>
                                </div>
                                <div>
                                    <strong>58.96</strong>
                                </div>
                                <div>
                                    <span className='grey'>60 / mth.</span>
                                    <span>$25 / mth.</span>
                                </div>
                                <div className="actions">
                                    <Button color='red'>Get Tips</Button>
                                    <a href="/" className='email'>email</a>
                                    <a href="/" className='menu'>menu</a>
                                    <a href="/" className='user'>user</a>
                                </div>
                            </div>
                        </div>
                        <div className="tipster">
                            <div className='tipster-info'>
                                <div className="tipster-ava">
                                    <Avatar2/>
                                </div>
                                <div className="tipster-description">
                                    <Header as='h2'>
                                        Sang Young-Il
                                        <div className='fast-tipster' data-tooltip="Fast tipster">
                                            <img src={img07} alt={"Fast tipster"}/>
                                        </div>
                                    </Header>
                                    <p>Football, tennnis, baseball</p>
                                    <ul>
                                        <li><Img04/></li>
                                        <li><Img05/></li>
                                        <li><Img02/></li>
                                    </ul>
                                </div>

                            </div>
                            <div className='tipster-actions'>
                                <div className="diagram">
                                    <Img01/>
                                </div>
                                <div>
                                    <strong className='red'>-13.51%</strong>
                                </div>
                                <div>
                                    <strong>851</strong>
                                </div>
                                <div>
                                    <strong>58.96</strong>
                                </div>
                                <div>
                                    <span className='grey'>60 / mth.</span>
                                    <span>$25 / mth.</span>
                                </div>
                                <div className="actions">
                                    <Button color='red'>Get Tips</Button>
                                    <a href="/" className='email'>email</a>
                                    <a href="/" className='menu'>menu</a>
                                    <a href="/" className='user'>user</a>
                                </div>
                            </div>
                        </div>
                        <ul className="date-filter">
                            <li><a href="/">Last Month</a></li>
                            <li><a href="/">Last 3 Months</a></li>
                            <li><a href="/">Last Year</a></li>
                            <li><a href="/">Current Month</a></li>
                        </ul>
                        <div className="flex centered">
                            <Button>Upload more</Button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}