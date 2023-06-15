import {useEffect, useState} from 'react';

export const useHotelsSearch = (skiSite: number, fromDate: string, toDate: string, groupSize: number) => {
    const [data, setData] = useState([]);

    const url = `http://localhost:3333/api/search?skiSite=${skiSite.toString()}&fromDate=${fromDate}&toDate=${toDate}&groupSize=${groupSize.toString()}`;

    useEffect(() => {
        const eventSource = new EventSource(url);

        eventSource.addEventListener('message', (event) => {
            const newData = JSON.parse(event.data);
            setData(newData);
        });

        eventSource.onerror = (error) => {
            console.error('EventSource error:', error);
        };

        return () => {
            eventSource.close();
        };
    }, [url]);

    return data;
}
