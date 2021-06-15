import React from 'react'
import { TextField } from '@/components/molecules'
import { Title } from '@/components/atoms'
import { BsArrowRightShort } from 'react-icons/bs'
import kwesforms from 'kwesforms'

const Form = () => {
  React.useEffect(() => {
    kwesforms.init()
  }, [])
  const [dataForm, setDataForm] = React.useState({
    name: '',
    email: '',
    message: '',
  })
  const handleInput = (e: React.FormEvent<EventTarget>) => {
    const target = e.target as HTMLInputElement
    setDataForm(prev => ({
      ...prev,
      [target.name]: target.value,
    }))
  }
  return (
    <section className="p-6 py-16 lg:p-0">
      <Title title="Contactame" />
      <form
        lang="es"
        action="https://kwes.io/api/foreign/forms/OBBBkO7gzjrcximOaAYR"
        method="POST"
        className="flex flex-wrap max-w-6xl mx-auto kwes-form"
      >
        <TextField
          name="name"
          onChange={handleInput}
          type="text"
          value={dataForm.name}
          label="Nombre"
          className="w-full py-4 lg:px-4 lg:pl-0 lg:w-1/2"
          autoComplete="name"
        />
        <TextField
          name="email"
          onChange={handleInput}
          type="email"
          value={dataForm.email}
          label="Correo"
          className="w-full py-4 lg:px-4 lg:pr-0 lg:w-1/2"
          autoComplete="email"
        />
        <TextField
          name="message"
          onChange={handleInput}
          value={dataForm.message}
          label="Mensaje"
          className="w-full py-4 lg:px-0"
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
