import React from "react";
import Typography from '@material-ui/core/Typography';
import {styles} from "../../styles/common";

const NO_CONTENT_TITLE = "Nada por aqui..."

export const NoContent = () => {
    return (
		<div>
            <Typography variant={"h2"} align={"center"} style={styles.no_content}>{NO_CONTENT_TITLE}</Typography>
        </div>
    );
}
