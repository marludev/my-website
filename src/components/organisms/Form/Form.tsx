import React from 'react'
import { TextField } from '@/components/molecules'
import { Title } from '@/components/atoms'
import { BsArrowRightShort } from 'react-icons/bs'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(3, 'El nombre debe tener al menos 3 caracteres'),
  subject: z.string().min(5, 'El asunto debe tener al menos 5 caracteres'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
})

type Inputs = z.infer<typeof schema>

const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
    <section className="p-6 py-16 my-16 lg:p-0">
      <Title
        title="¡Hablemos!"
        subTitle="Si estás interesado en mi trabajo o tienes alguna inquietud, no dudes en escribirme!"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-wrap max-w-2xl p-6 mx-auto rounded-lg "
      >
        <div className="w-full py-4 ">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Nombre" className="w-full " />
            )}
          />
          {errors.name && (
            <p className="mt-3 text-sm font-semibold text-red-400">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="w-full py-4 ">
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <TextField {...field} label="Asunto" className="w-full" />
            )}
          />
          {errors.subject && (
            <p className="mt-3 text-sm font-semibold text-red-400">
              {errors.subject.message}
            </p>
          )}
        </div>
        <div className="w-full py-4 lg:px-0">
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mensaje"
                className="w-full"
                rows={3}
              />
            )}
          />
          {errors.message && (
            <p className="mt-3 text-sm font-semibold text-red-400">
              {errors.message.message}
            </p>
          )}
        </div>

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
