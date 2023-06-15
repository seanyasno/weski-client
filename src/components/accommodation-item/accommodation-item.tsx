import {Accommodation} from '@/types';
import React, {useMemo} from 'react';
import styled from '@emotion/styled';
import {Box, Divider, Rating, Stack, Typography} from '@mui/material';
import {IoLocationOutline} from 'react-icons/io5';
import Image from 'next/image';
import {destinations} from '@/config';

export const StyledContainer = styled.div`
  background: #FFFFFF;
  border: 1px solid #E0E3EB;
  border-radius: 12px;
  padding: 20px;
  max-width: 900px;
`;

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
        <StyledContainer>
            {/*<Image*/}
            {/*    src={accommodation.hotelDescriptiveContent.images[0].url}*/}
            {/*    alt={'hotel image'}*/}
            {/*    width={380}*/}
            {/*/>*/}
            <Stack rowGap={'8px'}>
                <Typography fontSize={'1.125rem'} fontWeight={500}>{accommodation.HotelName}</Typography>
                <Rating value={Number(accommodation.HotelInfo.Rating)} max={5} size={'small'}/>
                <Stack direction={'row'} alignItems={'center'} columnGap={'4px'}>
                    <IoLocationOutline color={'#525D7A'}/>
                    <Typography color={'#525D7A'} fontSize={'0.875rem'} fontWeight={400}>{currentDestination?.name}</Typography>
                </Stack>
                <Divider/>
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
        </StyledContainer>
    );
};
