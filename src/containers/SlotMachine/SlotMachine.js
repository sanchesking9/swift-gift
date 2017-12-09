import React, { Component } from 'react';
import { SlotMachineWrapper } from './styles';
import { Slot } from "../../components";

export default class SlotMachine extends Component {
    render() {
        return <SlotMachineWrapper>
            <Slot />
        </SlotMachineWrapper>;
    }
}
