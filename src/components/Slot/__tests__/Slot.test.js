import React from 'react';
import { mount } from 'enzyme';
import Slot from '../Slot';

describe("test <Slot />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Slot />);
    });
    it('should correct render <Slot />', () => {
        expect(wrapper.find(Slot).length).toBe(1);
    });
});
