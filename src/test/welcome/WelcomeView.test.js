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
            component = shallow(<WelcomeView/>);
        });

        it ("should render a title", () => {
            expect(component.find('h1').text()).toEqual("Bienvenido al sitio de administracion de Foodie")
        });
    });
});