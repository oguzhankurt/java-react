import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, FormField, Label } from 'semantic-ui-react'
import * as Yup from "yup"
import KodlamaIoTextInput from '../utilities/customFormControls/KodlamaIoTextInput'

function ProductAdd() {
    const initialValues = {
        produdctName: "",
        unitPrice: 0
    }

    const schema = Yup.object({
        productName: Yup.string().required("Ürün adı gerekli!"),
        unitPrice: Yup.number().required("Fiyat bilgisi gerekli!")
    })

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {

            }}
        >
            <Form className='ui form'>
                <KodlamaIoTextInput name='productName' placeholder='Ürün Adı'/>
                <KodlamaIoTextInput name='unitPrice' placeholder='Ürün Fiyatı'/>
                <Button type='submit' color='green'>Submit</Button>
            </Form>
        </Formik>
    )
}

export default ProductAdd