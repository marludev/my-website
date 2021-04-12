import React from 'react'
import { Title } from '@/components/atoms'
const AboutMe = () => {
  const dataTitle = {
    title: 'Hablando un poco de mis origenes',
    subTitle: 'Sobre mi',
  }
  return (
    <section className="flex flex-wrap justify-between p-6 my-10 transform lg:-translate-y-32 lg:p-0">
      <div className="grid order-last w-full grid-cols-2 grid-rows-6 mt-10 lg:mt-0 h-96 lg:h-screen lg:order-first lg:w-6/12">
        <div className="row-start-1 row-end-5 bg-custom-primary"></div>
        <div className="row-span-2 row-start-5"></div>
        <div className="row-span-2 row-start-3 bg-custom-tertiary"></div>
        <div className="row-span-2 row-start-5 bg-gray-200"></div>
      </div>
      <div className="w-full mt-auto text-lg tracking-wide text-white lg:w-5/12">
        <Title dataTitle={dataTitle} />
        <p className="my-4">
          Como seguía diciendo, desde que tengo uso de razón me ha llamado la
          atención las computadoras, el hardware, software y como ambos se
          complementan para trabajar al unísono.
        </p>
        <p className="my-4">
          Muchos años atrás cuando aun existía Messenger de Microsoft, comencé
          experimentando con una vieja pc la cual dañe un par de veces (tal vez
          un poco mas que un par). experimentaba haciendo pequeños scripts en
          Windows. allí comencé a interactuar con la CMD.
        </p>
        <p className="my-4">
          En la secundaria, me llegue a destacar bastante en computación. allí
          me enseñaron un poco de protocolos http, diagramas de flujo, HTML y
          CSS.
        </p>
        <p className="my-4">
          Poco tiempo después de graduarme con la incertidumbre de no saber que
          estudiar, comencé a ver algunos videos que me parecían interesantes de
          programación, recuerdo que una persona me dio ese empujón para
          comenzar a estudiar programación y gracias a varios compañeros y esa
          persona hoy en día he incursionado como desarrollador web y móvil,
          trabajando tanto de backend como en frontend.
        </p>
      </div>
    </section>
  )
}

export { AboutMe }
