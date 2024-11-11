export type TResponseFromServer<T> = {
	success: boolean;
	message: string;
	result: T;
};

export type TTrip = {
	title: string;
	from: string;
	destination: string;
	availableSeats: number;
	budget: number;
	photos: string[];
	startDate: string;
	endDate: string;
	details: string;
};
export type TResponseTrip = {
	_id: string;
	isDeleted: boolean;
	slug: string;
} & TTrip;


export type TDestination = {
	destination:string;
	shortInfo:string;
	
}
export type TDestinationResponse = {
	_id: string;
	destination: string;
	shortInfo: string;
	slug: string;
	trips?: string[];
};
