import React from 'react';
import { mount } from "enzyme";
import { Gifts } from '../Gifts';
import { Gift } from '../../../components';

const MOCK = {
    gotCategories: false,
    getCategories() {
        MOCK.gotCategories = true;
    },
    categories: {
        list: [{}, {}]
    }
};

describe("test <Gifts />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(<Gifts {...MOCK} />);
    });
    it('should correct render <Gifts />', () => {
        expect(wrapper.find(Gifts).length).toBe(1);
    });

    it('should get categories', () => {
        expect(MOCK.gotCategories).toBe(true);
    });

    it('should correct render list of <Gift />', () => {
        expect(wrapper.find(Gift).length).toBe(2);
    });
});
