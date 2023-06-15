import React, {useContext} from 'react';
import {AccommondationList, SearchBar} from '@/components';
import _ from 'lodash';
import {useHotelsSearch} from '@/hooks';
import {SearchContext} from '@/contexts';

export const HomePageContent: React.FC = () => {
    const {searchFormik} = useContext(SearchContext);
    const {destination, startDate, endDate, groupSize} = searchFormik.values;
    const hotels = useHotelsSearch(destination, startDate, endDate, groupSize);

    return (
        <>
            <SearchBar/>

            {
                hotels && _.isArray(hotels) &&
                <AccommondationList accommondations={hotels} fromDate={startDate} toDate={endDate} groupSize={groupSize}/>
            }
        </>
    );
}
