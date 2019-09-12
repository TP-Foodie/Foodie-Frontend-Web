import React from "react";
import {mount, shallow} from "enzyme";
import {UserDetailContainer} from "../../app/components/users/UserDetailContainer";
import httpResources from "../../app/http/httpResources";
import {anError, aUser, failedResponseWith, successfulResponseWith} from "../support/factory";
import {handleError} from "../../app/handlers/handleError";

jest.mock("../../app/http/httpResources", () => {
    return {
        users: jest.fn()
    }
});

jest.mock("../../app/handlers/handleError");

describe("user detail container component", () => {
    it ("should render without crashing", () => {
        const component = shallow(<UserDetailContainer/>);
        expect(component.find('.container').exists()).toBe(true);
    });

    describe("init cycle", () => {
        const match_val = {
            "params": {
                "user_id" : 1
            }                
        }
        it ("should fetch users", () => {
            mount(<UserDetailContainer match={match_val}/>);
            expect(httpResources.users).toHaveBeenCalled();
        });

        it ("should set data", async () => {
            const user = aUser();
            httpResources.users = successfulResponseWith(user);
            const component = shallow(<UserDetailContainer match={match_val}/>);
            await component.instance().componentDidMount();
            expect(component.find('.user_detail').prop('user')).toEqual(user);
        });

        it ("should handle error if any", async () => {
            const error = anError();
            httpResources.users = failedResponseWith(error);

            const component = shallow(<UserDetailContainer match={match_val}/>);
            await component.instance().componentDidMount();

            expect(handleError).toHaveBeenCalledWith(error);
        })
    });
});