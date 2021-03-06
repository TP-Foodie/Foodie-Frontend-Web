import React from "react";
import {shallow} from "enzyme";
import {LoginView} from "../../app/components/auth/LoginView";

describe("login view component", () => {
    let props;

    beforeEach(() => {
        props = {
            errors: {}
        }
    })
    it ("should render without crashing", () => {
        const component = shallow(<LoginView {...props}/>);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("elements", () => {
        let component;

        beforeEach(() => {
            component = shallow(<LoginView {...props}/>);
        });

        it ("should render login button", () => {
            expect(component.find('.login_btn').exists()).toBe(true);
        });
    });
});