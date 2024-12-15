"use client";

import React from "react";
import {
	FieldValues,
	FormProvider,
	SubmitHandler,
	useForm,
} from "react-hook-form";

type TFormConfig = {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	defaultValues?: Record<string, any>;
};
type TMFormProps = {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FieldValues>;
} & TFormConfig;

export default function TMForm({
	children,
	onSubmit,
	defaultValues,
}: TMFormProps) {
	const formConfig: TFormConfig = {};

	if (defaultValues) {
		formConfig["defaultValues"] = defaultValues;
	}
	const method = useForm(formConfig);

	const submit: SubmitHandler<FieldValues> = (data) => {
		onSubmit(data);
		method.reset();
	};
	return (
		<FormProvider {...method}>
			<form onSubmit={method.handleSubmit(submit)}>{children}</form>
		</FormProvider>
	);
}
