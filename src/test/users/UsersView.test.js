import {shallow} from "enzyme/build";
import React from "react";
import {UsersView} from "../../app/components/users/UsersView";
import {aUser} from "../support/factory";

describe("users view component", () => {
    let props;
    let render;

    beforeEach(() => {
        props = {
            users: [aUser()]
        };

        render = props => shallow(<UsersView {...props}/>);
    });

    describe("elements", () => {
        let component;

        beforeEach(() => {
            component = render(props);
        });


        it("should render without crashing", () => {
            expect(component.find('.container').exists()).toBe(true);
        });

        it ("should render each user name", () => {
            // eslint-disable-next-line no-unused-vars
            for (const user of props.users) {
                expect(component.find(`.${user.name}`).exists()).toBeTruthy();
            }
        });

        it ("should render a list", () => {
            expect(component.find('.users_list').exists()).toBeTruthy();
        });
    });
});