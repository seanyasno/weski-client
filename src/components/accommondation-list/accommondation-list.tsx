import React from 'react';
import {Accommodation} from '@/types';
import {Box, Stack, Typography} from '@mui/material';
import _ from 'lodash';
import {AccommodationItem} from '@/components';

type Props = {
    accommondations: Accommodation[];
    fromDate: string;
    toDate: string;
    groupSize: number;
}

export const AccommondationList = (props: Props) => {
    const {accommondations, fromDate, toDate, groupSize} = props;

    return (
        <Box sx={{
            padding: '40px 80px'
        }}>
            <Stack rowGap={'4px'} marginBottom={'40px'}>
                <Typography fontSize={'1.75rem'} fontWeight={400} component="h1">Select your ski trip</Typography>
                <Typography color={'#525D7A'} fontSize={'1rem'} fontWeight={400}>{accommondations.length} ski trips
                    options • {fromDate} - {toDate} • {groupSize} people
                </Typography>
            </Stack>

            <Stack
                rowGap={'20px'}>
                {
                    accommondations && _.isArray(accommondations) && accommondations.map((accommodation, index) =>
                        <AccommodationItem
                            accommodation={accommodation}
                            key={index}/>)
                }
            </Stack>
        </Box>
    );
};
