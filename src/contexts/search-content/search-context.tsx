import {createContext, PropsWithChildren} from 'react';
import dayjs from 'dayjs';
import React from 'react';
import {FormikProps, useFormik} from 'formik';
import {SearchForm} from '@/types';

type ContextProps = {
    searchFormik: FormikProps<SearchForm>;
}

export const SearchContext = createContext<ContextProps>({
    searchFormik: undefined,
});

export const SearchProvider: React.FC<PropsWithChildren> = (props) => {
    const {children} = props;

    const searchFormik = useFormik<SearchForm>({
        initialValues: {
            destination: 1,
            groupSize: 1,
            startDate: dayjs().format('MM/DD/YYYY'),
            endDate: dayjs().add(1, 'day').format('MM/DD/YYYY')
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <SearchContext.Provider value={{
            searchFormik,
        }}>
            {children}
        </SearchContext.Provider>
    );
};
