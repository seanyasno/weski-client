import {HotelDescriptiveContent, HotelInfo, PricesInfo} from '@/types';

export type Accommodation = {
    HotelCode: string;
    HotelName: string;
    HotelDescriptiveContent: HotelDescriptiveContent;
    HotelInfo: HotelInfo;
    PricesInfo: PricesInfo;
}
