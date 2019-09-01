import {shallow} from "enzyme/build";
import React from "react";
import {PlacesView} from "../../app/components/places/PlacesView";

describe("places view component", () => {
    it("should render without crashing", () => {
        const component = shallow(<PlacesView/>);
        expect(component.find('.container').exists()).toBe(true);
    });
});