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
	userId: string;
	tripId: string;
	comment: string;
	rating: number;
};

export type TReviewsResponse = {
	_id: string;
	userId: {
		_id: string;
		name: string;
		avatar: string;
	};
	createdAt: string;
	updatedAt: string;
} & TReviewRequest;

export type TMyTripList = {
	_id: string;
	title: string;
	from: string;
	availAbleSeats: number;
	budget: number;
	startDate: string;
	endDate: string;
};

// start of get incoming requests type

export type TGetMyIncomingRequests = {
	_id: string;
	title: string;
	availAbleSeats: number;
	startDate: string; // ISO string
	endDate: string; // ISO string
	buddyRequest: BuddyRequest[];
};

type BuddyRequest = {
	_id: string;
	user: User;
	people: number;
	status: "PENDING" | "APPROVED" | "REJECTED"; // Enumerated status
	totalCost: number;
};

type User = {
	_id: string;
	name: string;
};

// get outgoing request
export type TOutGoingResponse = {
	_id: string;
	trip: {
		_id: string;
		title: string;
		startDate: string; // ISO string format for date
		endDate: string; // ISO string format for date
		user: {
			_id: string;
			name: string;
		};
	};
	status: "APPROVED" | "PENDING" | "REJECTED"; // Include other possible statuses if needed
};
