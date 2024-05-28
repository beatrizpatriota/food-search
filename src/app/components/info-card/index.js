import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const InfoCard = (props) => {
    const { data } = props;
    const noInfo = 'No information provided'

    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h4" component="h4">
                    {data.applicant || noInfo}
                </Typography>
                <p>Address: {data.address || noInfo}</p>
                <p>Location description: {data.locationdescription || noInfo}</p>
                <p>Food Items: 
                    <ul>
                    {data.fooditems.split(':').map(food => <li>{food}</li>)}
                    </ul></p>
                <p>Facility Type: {data.facilitytype || noInfo}</p>
                <p>Days/Hours: {data.dayshours || noInfo}</p>
            </CardContent>
        </Card>
    );
};

export default InfoCard;