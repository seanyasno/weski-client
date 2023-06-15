import {Accommodation} from '@/types';
import React, {useMemo} from 'react';
import {Box, Divider, Rating, Stack, Typography} from '@mui/material';
import {IoLocationOutline} from 'react-icons/io5';
import {destinations} from '@/config';

type Props = {
    accommodation: Accommodation;
    destination: number;
}

export const AccommodationItem = (props: Props) => {
    const {accommodation} = props;

    const currency = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const currentDestination = useMemo(() => destinations.find(destination => destination.id === props.destination), [props.destination]);

    return (
        <Box sx={{
            background: '#FFFFFF',
            border: '1px solid #E0E3EB',
            borderRadius: '12px',
            padding: '20px',
            maxWidth: '600px',
        }}>
            <Stack rowGap={'8px'}>
                <Typography fontSize={'1.125rem'} fontWeight={500}>{accommodation.HotelName}</Typography>
                <Rating value={Number(accommodation.HotelInfo.Rating)} max={5} size={'small'}/>
                <Stack direction={'row'} alignItems={'center'} columnGap={'4px'}>
                    <IoLocationOutline color={'#525D7A'}/>
                    <Typography color={'#525D7A'} fontSize={'0.875rem'} fontWeight={400}>{currentDestination?.name}</Typography>
                </Stack>
                <Divider sx={{
                    marginTop: '60px',
                }}/>
                <Stack direction={'row'} justifyContent={'flex-end'} columnGap={'4px'} alignItems={'baseline'}>
                    <Typography
                        display={'inline'}
                        fontWeight={500}
                        fontSize={'1.125rem'}
                        color={'#000F33'}
                    >
                        {currency.format(accommodation.PricesInfo.AmountBeforeTax)}
                    </Typography>
                    <Typography
                        display={'inline'}
                        color={'#525D7A'}
                        fontSize={'0.875rem'}
                    >
                        /per person
                    </Typography>
                </Stack>
            </Stack>
        </Box>
    );
};
