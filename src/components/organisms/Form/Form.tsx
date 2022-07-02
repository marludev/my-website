import React from 'react'
import { TextField } from '@/components/molecules'
import { Title } from '@/components/atoms'
import { BsArrowRightShort } from 'react-icons/bs'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string(),
  subject: z.string(),
  message: z.string(),
})

type Inputs = z.infer<typeof schema>

const Form = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      subject: '',
      message: '',
    },
  })
  const onSubmit: SubmitHandler<Inputs> = data => {
    const email = 'luisgmp1997@gmail.com'
    document.location = `mailto:${email}?subject=${data.subject}&body=${data.message}`
  }

  return (
    <section className="p-6 py-16 lg:p-0">
      <Title title="Contactame" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap max-w-6xl mx-auto kwes-form"
      >
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Nombre"
              className="w-full py-4 lg:px-4 lg:pl-0 lg:w-1/2"
            />
          )}
        />

        <Controller
          name="subject"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Asunto"
              className="w-full py-4 lg:px-4 lg:pr-0 lg:w-1/2"
            />
          )}
        />

        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              label="Mensaje"
              className="w-full py-4 lg:px-0"
              rows={3}
            />
          )}
        />

        <div className="flex justify-end w-full">
          <button
            className="block p-4 my-4 text-lg font-semibold text-black transition-all duration-300 rounded-lg shadow-xl sm:inline-block bg-opacity-90 bg-custom-primary hover:bg-opacity-100"
            type="submit"
          >
            <span className="flex">
              Enviar
              <BsArrowRightShort size="30" className="text-black" />
            </span>
          </button>
        </div>
      </form>
    </section>
  )
}

export { Form }
