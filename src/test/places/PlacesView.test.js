import {shallow} from "enzyme/build";
import React from "react";
import {PlacesView} from "../../app/components/places/PlacesView";
import {aPlace} from "../support/factory";

describe("places view component", () => {
    let props;
    let render;

    beforeEach(() => {
        props = {
            places: [aPlace()]
        };

        render = props => shallow(<PlacesView {...props}/>);
    });

    it("should render without crashing", () => {
        const component = render(props);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("elements", () => {
        let component;

        beforeEach(() => {
            component = render(props);
        });

        it ("should render a list", () => {
            expect(component.find('.places_list').exists()).toBeTruthy();
        });

        it ("should render each place name", () => {
            // eslint-disable-next-line no-unused-vars
            for (const place of props.places) {
                expect(component.find(`.${place.name}`).exists()).toBeTruthy();
            }
        });
    });
});