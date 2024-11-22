"use client"

import React from 'react'
import {  FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form'

type TMFormProps ={
    children: React.ReactNode;
    onSubmit: SubmitHandler< FieldValues>

}

export default function TMForm({children, onSubmit}: TMFormProps) {
    const method = useForm();


  return (
    <FormProvider {...method} >
        <form  onSubmit={method.handleSubmit(onSubmit)}>
            {children}
        </form>
    </FormProvider>
  )
}
