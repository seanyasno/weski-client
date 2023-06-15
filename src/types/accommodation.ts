import {HotelDescriptiveContent, HotelInfo, PricesInfo} from '@/types';

export type Accommodation = {
    hotelCode: string;
    hotelName: string;
    hotelDescriptiveContent: HotelDescriptiveContent;
    hotelInfo: HotelInfo;
    PricesInfo: PricesInfo;
}
