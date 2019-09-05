import React from "react";
import {mount, shallow} from "enzyme";
import {PlacesContainer} from "../../app/components/places/PlacesContainer";
import httpResources from "../../app/http/httpResources";
import {anError, aPlace, failedResponseWith, successfulResponseWith} from "../support/factory";
import {handleError} from "../../app/handlers/handleError";

jest.mock("../../app/http/httpResources", () => {
    return {
        places: jest.fn()
    }
});

jest.mock("../../app/handlers/handleError");

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

        it ("should handle error if any", async () => {
            const error = anError();
            httpResources.places = failedResponseWith(error);

            const component = shallow(<PlacesContainer/>);
            await component.instance().componentDidMount();

            expect(handleError).toHaveBeenCalledWith(error);
        })
    });
});