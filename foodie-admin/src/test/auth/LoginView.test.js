import React from "react";
import {shallow} from "enzyme";
import {LoginView} from "../../app/components/auth/LoginView";

describe("login view component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<LoginView/>);
        expect(component).toMatchSnapshot();
    });
});