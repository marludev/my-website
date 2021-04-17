import React from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { TextField } from '@/components/molecules'
import { Title } from '@/components/atoms'
import { BsArrowRightShort } from 'react-icons/bs'
const Form = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Nombre muy corto')
      .max(50, 'Nombre muy largo')
      .required('Campo obligatorio'),
    lastName: Yup.string()
      .min(2, 'Apellido muy corto')
      .max(50, 'Apellido muy largo')
      .required('Campo obligatorio'),
    message: Yup.string()
      .min(5, 'Mensaje muy corto')
      .max(256, 'Mensaje muy largo')
      .required('Campo obligatorio'),
    email: Yup.string().email('Correo invalido').required('Campo obligatorio'),
  })
  const dataTitle = { title: 'Contactame' }
  return (
    <section className="p-6 py-16 lg:py-32 lg:p-0">
      <Title dataTitle={dataTitle} />
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false)
            console.log(values)
          }, 3000)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="flex flex-wrap" onSubmit={handleSubmit}>
            <TextField
              name="firstName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.firstName}
              label="Nombre"
              error={errors.firstName && touched.firstName && errors.firstName}
              className="w-full py-4 lg:px-4 lg:pl-0 lg:w-1/2"
            />
            <TextField
              name="lastName"
              onBlur={handleBlur}
              onChange={handleChange}
              type="text"
              value={values.lastName}
              label="Apellido"
              error={errors.lastName && touched.lastName && errors.lastName}
              className="w-full py-4 lg:px-4 lg:pr-0 lg:w-1/2"
            />
            <TextField
              name="email"
              onBlur={handleBlur}
              onChange={handleChange}
              type="email"
              value={values.email}
              label="Correo"
              error={errors.email && touched.email && errors.email}
              className="w-full py-4 lg:px-4 lg:pl-0 lg:w-1/2"
            />
            <TextField
              name="message"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.message}
              label="Mensaje"
              error={errors.message && touched.message && errors.message}
              className="w-full py-4 lg:px-0"
            />
            <div className="flex justify-end w-full">
              <button
                className="block p-4 my-4 text-lg font-semibold text-black transition-all duration-300 shadow-xl sm:inline-block bg-opacity-90 bg-custom-primary hover:bg-opacity-100"
                type="submit"
                disabled={isSubmitting}
              >
                <span className="flex">
                  Enviar
                  <BsArrowRightShort size="30" className="text-black" />
                </span>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </section>
  )
}

export { Form }
