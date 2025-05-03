import * as Yup from 'yup'

export const booksValidationSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    author: Yup.string().required('Author is required'),
    publishYear: Yup.number().required('Publish year is required'),
})