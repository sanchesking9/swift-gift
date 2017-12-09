import React, { Component } from 'react';
import {
    GiftWrapper
} from './styles';

export default class Gift extends Component {

    render() {
        const {data} = this.props;
        return <GiftWrapper background={data.background_color}>
            {data.image_url && <img src={data.image_url} alt="gift" />}
            <span dangerouslySetInnerHTML={{__html: data.name}} />
        </GiftWrapper>;
    }
}
