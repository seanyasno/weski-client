import {createContext, PropsWithChildren, useState} from 'react';
import dayjs from 'dayjs';
import React from 'react';
import {FormikProps, useFormik} from 'formik';
import {Accommodation, SearchForm} from '@/types';

type ContextProps = {
    searchFormik: FormikProps<SearchForm>;

    destination: number;
    startDate: string;
    endDate: string;
    groupSize: number;
    data: Accommodation[];
}

export const SearchContext = createContext<ContextProps>({
    searchFormik: undefined,
});

export const SearchProvider: React.FC<PropsWithChildren> = (props) => {
    const {children} = props;
    const [destination, setDestination] = useState(1);
    const [startDate, setStartDate] = useState(dayjs().format('MM/DD/YYYY'));
    const [endDate, setEndDate] = useState(dayjs().add(1, 'day').format('MM/DD/YYYY'));
    const [groupSize, setGroupSize] = useState(1);
    const [data, setData] = useState([]);

    const searchFormik = useFormik<SearchForm>({
        initialValues: {
            destination: 1,
            groupSize: 1,
            startDate: dayjs().format('MM/DD/YYYY'),
            endDate: dayjs().add(1, 'day').format('MM/DD/YYYY')
        },
        onSubmit: ({destination, startDate, endDate, groupSize}) => {
            const url = `http://localhost:3333/api/search?skiSite=${destination.toString()}&fromDate=${startDate}&toDate=${endDate}&groupSize=${groupSize.toString()}`;
            const eventSource = new EventSource(url);

            eventSource.addEventListener('message', (event) => {
                const newData = JSON.parse(event.data);
                setData(newData);
                setDestination(destination);
                setStartDate(startDate);
                setEndDate(endDate);
                setGroupSize(groupSize);
            });

            eventSource.onerror = (error) => {
                console.error('EventSource error:', error);
            };
        }
    });

    return (
        <SearchContext.Provider value={{
            searchFormik,
            data,
            destination,
            startDate,
            endDate,
            groupSize
        }}>
            {children}
        </SearchContext.Provider>
    );
};
