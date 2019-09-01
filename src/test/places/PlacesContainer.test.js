import React from "react";
import {shallow} from "enzyme";
import {PlacesContainer} from "../../app/components/places/PlacesContainer";

describe("places container component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<PlacesContainer/>);
        expect(component.find('.container').exists()).toBe(true);
    });
});