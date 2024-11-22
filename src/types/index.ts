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
export type TReview = {
	rating: number;
	message: string;
};
export type TTripResponse = {
	_id: string;
	availAbleSeats: number;
	rating: number;
	reviews: TReview[];
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

export type TLoginRequest ={
	email: string;
	password: string;
}