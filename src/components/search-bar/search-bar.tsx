import React, {useContext} from 'react';
import {AppBar, Button, MenuItem, Select, Stack, Toolbar} from '@mui/material';
import {destinations} from '@/config';
import {SearchContext} from '@/contexts';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';
import {SingleInputDateRangeField} from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import {BsSearch} from 'react-icons/bs';
import dayjs from 'dayjs';
import Image from 'next/image';

export const SearchBar: React.FC = () => {
    const {searchFormik} = useContext(SearchContext);
    const {values, handleChange, handleSubmit, setFieldValue} = searchFormik;

    return (
        <AppBar
            position={'static'}
            sx={{
                padding: '20px 50px',

            }}>
            <form onSubmit={handleSubmit}>
                <Toolbar>
                    <Image
                        src={'/assets/Vector.svg'}
                        alt={'WeSki Logo'}
                        width={126}
                        height={20}
                        style={{
                            marginRight: '80px',
                        }}
                    />

                    <Stack
                        direction={'row'}
                        justifyContent={'flex-end'}
                        width={'100%'}
                        columnGap={'12px'}
                        >
                        <Select
                            name={'destination'}
                            onChange={handleChange}
                            value={values.destination}
                            sx={{
                                minWidth: '228px'
                            }}
                            size={'small'}
                        >
                            {destinations.map((destination, index) =>
                                <MenuItem key={index} value={destination.id}>{destination.name}</MenuItem>
                            )}
                        </Select>
                        <Select
                            name={'groupSize'}
                            onChange={handleChange}
                            value={values.groupSize}
                            sx={{
                                minWidth: '228px'
                            }}
                            size={'small'}
                        >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                        </Select>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateRangePicker
                                slots={{field: SingleInputDateRangeField}}
                                sx={{
                                    width: '228px'
                                }}
                                size={'small'}
                                onChange={([fromDate, toDate]) => {
                                    setFieldValue('startDate', dayjs(fromDate).format('MM/DD/YYYY'));
                                    setFieldValue('endDate', dayjs(toDate).format('MM/DD/YYYY'));
                                }}
                            />
                        </LocalizationProvider>

                        <Button
                            variant={'outlined'}
                            type={'submit'}
                            startIcon={<BsSearch/>}
                            sx={{
                                minWidth: '120px'
                            }}
                        >
                            Search
                        </Button>
                    </Stack>
                </Toolbar>
            </form>
        </AppBar>
    );
};
