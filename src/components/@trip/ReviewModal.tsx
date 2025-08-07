"use client";

import useFetchUser from "@/lib/loadUser";
import { useGiveReviewMutation } from "@/redux/api/review.api";
import { TReviewRequest } from "@/types";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { Rating } from "@smastrom/react-rating";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import SubmitBtn from "../@ui/SubmitBtn";

export default function ReviewModal({ tripId }: { tripId: string }) {
	const router = useRouter();

	const { user } = useFetchUser();
	const [giveReview, { isLoading }] = useGiveReviewMutation();
	const { register, handleSubmit } = useForm<TReviewRequest>();
	const [rating, setRating] = useState(5);

	const [isOpen, setIsOpen] = useState(false);

	function open() {
		setIsOpen(true);
	}

	function close() {
		setIsOpen(false);
	}

	const submitReview: SubmitHandler<TReviewRequest> = async (data) => {
		//checking: if user is not logged in then push to login page
		if (!user?.id) {
			return router.push("/login");
		}
		data.rating = rating;
		data.tripId = tripId;
		data.userId = user?.id;

		try {
			const res = await giveReview(data).unwrap();
			if (res.success) {
				toast.success("Review submitted successfully");
				close();
			}
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			toast.error(error.data.message);
		}
	};

	return (
		<div className="bg-white">
			<Button onClick={open} className="btn btn-primary text-white">
				Write Review
			</Button>

			<Dialog
				open={isOpen}
				as="div"
				className="relative z-10 focus:outline-none"
				onClose={close}
			>
				<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4">
						<DialogPanel
							transition
							className="w-full max-w-md rounded-xl bg-black p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
						>
							<DialogTitle
								as="h3"
								className="text-lg font-semibold text-white"
							>
								Write a review for this trip
							</DialogTitle>

							<form
								className="space-y-4 text-white mt-5"
								onSubmit={handleSubmit(submitReview)}
							>
								<div className="flex flex-col">
									<label htmlFor="rating" className="mb-2">
										Select Rating *
										<pre className="text-xs">
											By default rating is 5
										</pre>
									</label>
									<Rating
										style={{
											color: "yellow",
											maxWidth: "120px",
										}}
										value={rating}
										onChange={setRating}
									/>
								</div>
								<div className="flex flex-col">
									<label htmlFor="comment" className=" mb-2">
										Write something about trip *
									</label>
									<textarea
										{...register("comment", {
											required: true,
										})}
										name="comment"
										id="comment"
										rows={5}
										className="outline-none text-black p-2 rounded-md"
										placeholder="Write your review here...."
									></textarea>
								</div>
								<div>
									<SubmitBtn
										loading={isLoading}
										className="btn btn-secondary bg-accent hover:bg-accent/90"
									>
										Submit Review
									</SubmitBtn>
								</div>
							</form>
						</DialogPanel>
					</div>
				</div>
			</Dialog>
		</div>
	);
}
