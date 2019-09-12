import React from 'react';
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

export class UserDetailButton extends React.Component{
    static propTypes = {
        href: PropTypes.any.isRequired,
        label: PropTypes.any.isRequired
    };

    render(){
        return (
            <Button className={"detail_btn"} 
                href={this.props.href} 
                color={"primary"}>
                    {this.props.label}
            </Button>
        )
    }
}