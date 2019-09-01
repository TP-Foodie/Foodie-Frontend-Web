import React from "react";
import {mount, shallow} from "enzyme";
import {PlacesContainer} from "../../app/components/places/PlacesContainer";
import httpResources from "../../app/http/httpResources";
import {aPlace, successfulResponseWith} from "../support/factory";

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

        it ("should fetch places", () => {
            mount(<PlacesContainer/>);
            expect(httpResources.places).toHaveBeenCalled();
        });

        it ("should set data", async () => {
            const places = [aPlace(), aPlace()];
            httpResources.places = successfulResponseWith(places);

            const component = shallow(<PlacesContainer/>);
            await component.instance().componentDidMount();

            expect(component.find('.places_view').prop('places')).toEqual(places);
        });
    });
});