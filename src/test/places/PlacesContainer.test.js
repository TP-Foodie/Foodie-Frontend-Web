import React from "react";
import {mount, shallow} from "enzyme";
import {PlacesContainer} from "../../app/components/places/PlacesContainer";
import httpResources from "../../app/http/httpResources";

jest.mock("../../app/http/httpResources", () => {
    return {
        places: jest.fn()
    }
});

describe("places container component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<PlacesContainer/>);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("init cycle", () => {

        beforeEach(() => {
            mount(<PlacesContainer/>)
        });

        it ("should fetch places", () => {
            expect(httpResources.places).toHaveBeenCalled();
        });
    });
});