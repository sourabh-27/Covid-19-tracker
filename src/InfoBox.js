import React from 'react';
import './InfoBox.css';
import { Card, CardContent, Typography } from "@material-ui/core";

function Infobox({title, cases, isRed, active, total, ...props}) {
    return (
        <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
            <CardContent>
                {/* Title, i.e Active, Recovered, Death */}
                <Typography className="infoBox__title" color="textSecondary">
                    { title }
                </Typography>

                {/* No. of daily cases 120k+ */}
                <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>{ cases }</h2>

                {/* 1.2M Total */}
                <Typography className="infoBox__total" color="textSecondary">
                    { total } Total
                </Typography>

            </CardContent>
        </Card>
    )
}

export default Infobox
