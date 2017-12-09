import React from 'react';
import { mount } from "enzyme";
import SlotMachine from '../SlotMachine';

describe("test <SlotMachine />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<SlotMachine />);
    });
    it('should correct render <SlotMachine />', () => {
        expect(wrapper.find(SlotMachine).length).toBe(1);
    });
});
