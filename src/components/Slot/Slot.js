import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {
    SlotWrapper,
    SlotNumbers,
    SlotRound,
    SlotDotsRound,
    SlotLight,
    SlotSpinner,
    SpinnerLabel,
    PopupWrapper,
    Popup,
    PopupButton
} from './styles';

export default class Slot extends Component {
    constructor() {
        super();
        this.state = {
            on: false,
            open: false
        };
    }
    start = () => {
        this.setState({on: true});
        setTimeout(() => {
            this.setState({open: true});
        }, 4050);
    };
    render() {
        const { open, on } = this.state;
        return <SlotWrapper>
            <SlotNumbers spin={on} />
            <SlotRound />
            <SlotDotsRound />
            <SlotLight />
            <SlotSpinner onClick={this.start}>
                <SpinnerLabel spin={on}  />
            </SlotSpinner>
            {open && <PopupWrapper>
                <Popup>
                    You won 100!
                    <Link to="/gifts" ><PopupButton>Gifts</PopupButton></Link>
                </Popup>
            </PopupWrapper>}
        </SlotWrapper>;
    }
}
