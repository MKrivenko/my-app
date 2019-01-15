import React, { Component } from 'react';
import UpHeader from "../components/UpHeader/UpHeader";
import {Header} from "semantic-ui-react";

export default class Home extends Component {
    state = {
    }

    render () {
        return (
            <div>
                <UpHeader />
                <div className='body'>
                    <Header as='h1'>Home Page</Header>
                </div>

            </div>
        )
    }
}