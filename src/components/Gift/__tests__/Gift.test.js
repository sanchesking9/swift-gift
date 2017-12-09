import React from 'react';
import { mount } from 'enzyme';
import Gift from '../Gift';

const MOCK = {
    data: {
        name: 'test'
    }
};

describe("test <Gift />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Gift {...MOCK} />);
    });
    it('should correct render <Gift />', () => {
        expect(wrapper.find(Gift).length).toBe(1);
    });
});
