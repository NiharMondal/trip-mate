
export type TResponseFromServer<T> = {
	success: boolean;
	message: string;
	result: T;
};

export type TTrip = {
	title: string;
	from: string;
	destination: string;
	maxGuests: number;
	budget: number;
	photos: string[];
	startDate: string;
	endDate: string;
	details: string;
};

export type TTripResponse = {
	_id: string;
	availAbleSeats: number;
	rating: number;
	reviews: TReviewsResponse[];
	isDeleted: boolean;
	slug: string;
} & TTrip;

export type TDestination = {
	destination: string;
	shortInfo: string;
};

export type TDestinationResponse = {
	_id: string;
	destination: string;
	shortInfo: string;
	slug: string;
	trips?: string[];
};

export type TLoginRequest = {
	email: string;
	password: string;
};

export type TBookingRequest = {
	user: string;
	trip: string;
	people: number;
	totalCost: number;
};
export type TBookingResponse = {
	_id: string;
	status: string;
} & TBookingRequest;


export type TReviewRequest = {
	userId:string;
	tripId:string;
	comment: string;
	rating:number;
}


export type TReviewsResponse = {
	_id:string;
	userId:{
		_id: string;
		name:string;
		avatar: string;
	},
	createdAt:string;
	updatedAt:string
} & TReviewRequest;