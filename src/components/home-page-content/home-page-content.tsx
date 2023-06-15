import React, {useContext} from 'react';
import {AccommondationList, SearchBar} from '@/components';
import _ from 'lodash';
import {useHotelsSearch} from '@/hooks';
import {SearchContext} from '@/contexts';

export const HomePageContent: React.FC = () => {
    const {searchFormik, data, destination, startDate, endDate, groupSize} = useContext(SearchContext);
    // const {destination, startDate, endDate, groupSize} = searchFormik.values;

    return (
        <>
            <SearchBar/>

            {
                data && _.isArray(data) &&
                <AccommondationList
                    accommondations={data}
                    fromDate={startDate}
                    toDate={endDate}
                    groupSize={groupSize}
                />
            }
        </>
    );
}
