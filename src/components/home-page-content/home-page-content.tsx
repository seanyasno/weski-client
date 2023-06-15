import React, {useContext} from 'react';
import {AccommondationList, SearchBar} from '@/components';
import _ from 'lodash';
import {SearchContext} from '@/contexts';

export const HomePageContent: React.FC = () => {
    const {data, destination, startDate, endDate, groupSize} = useContext(SearchContext);

    return (
        <>
            <SearchBar/>

            {
                data && _.isArray(data) && data.length > 0 &&
                <AccommondationList
                    accommondations={data}
                    destination={destination}
                    fromDate={startDate}
                    toDate={endDate}
                    groupSize={groupSize}
                />
            }
        </>
    );
}
