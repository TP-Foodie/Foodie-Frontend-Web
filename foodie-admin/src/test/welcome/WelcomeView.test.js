import React from "react";
import {shallow} from "enzyme";
import {WelcomeView} from "../../app/components/welcome/WelcomeView";

describe("login view component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<WelcomeView/>);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("elements", () => {
        let component;

        beforeEach(() => {
            component = shallow(<LoginView/>);
        });
    });
});