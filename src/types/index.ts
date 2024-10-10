export type TResponseFromServer<T> = {
    success: boolean;
    message: string;
    result: T;
}


export interface Trip {
    _id:string
    title: string;
    from: string;
    availableSeats:number;
    budget: number;
    destination: string;
    photos: string[];
    startDate: string;
    endDate:string;
    slug: string;
    details: string;
}

export type TDestinationResponse ={
    _id:string;
    destination: string;
    slug: string;
    trips?: string[]
}