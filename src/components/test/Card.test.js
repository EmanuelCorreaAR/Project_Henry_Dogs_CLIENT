import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Card from "/Users/macintosh/Documents/WebFT30a/PI-Dogs-main/client/src/components/assets/helpers/Card.jsx";

configure({ adapter: new Adapter() });

describe("<Card/>", () => {
    let wrapper;
    let max_weight;
    beforeEach(() => {
        max_weight = 30;
        wrapper = mount(<Card max_weight={max_weight} />);
    });

    it('deberia renderizar un "div" que contenga el "max_weight" que recibe por props', () => {
        expect(wrapper.contains(<div>{max_weight}</div>)).toEqual(true);
    });
});