import React from 'react';
import { mount } from "enzyme";
import NotFound from '../NotFound';

describe("test <NotFound />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<NotFound />);
    });
    it('should correct render <NotFound />', () => {
        expect(wrapper.find(NotFound).length).toBe(1);
    });
});
