import React from "react";
import {mount, shallow} from "enzyme";
import {UsersContainer} from "../../app/components/users/UsersContainer";
import httpResources from "../../app/http/httpResources";
import {anError, aUser, failedResponseWith, successfulResponseWith} from "../support/factory";
import {handleError} from "../../app/handlers/handleError";

jest.mock("../../app/http/httpResources", () => {
    return {
        users: jest.fn()
    }
});

jest.mock("../../app/handlers/handleError");

describe("users container component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<UsersContainer/>);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("init cycle", () => {

        it ("should fetch users", () => {
            mount(<UsersContainer/>);
            expect(httpResources.users).toHaveBeenCalled();
        });

        it ("should set data", async () => {
            const users = [aUser(), aUser()];
            httpResources.users = successfulResponseWith(users);

            const component = shallow(<UsersContainer/>);
            await component.instance().componentDidMount();

            expect(component.find('.users_view').prop('users')).toEqual(users);
        });

        it ("should handle error if any", async () => {
            const error = anError();
            httpResources.users = failedResponseWith(error);

            const component = shallow(<UsersContainer/>);
            await component.instance().componentDidMount();

            expect(handleError).toHaveBeenCalledWith(error);
        })
    });
});