import React from 'react'
import { CardTechnology, Title } from '@/components/atoms'
import { dataCardsTechnology } from '@/data'

const CardsTechnologys = () => {
  return (
    <section className="py-16">
      <Title title="Manejo diversas tecnologias" subTitle="tecnologias" />
      <div className="flex flex-wrap">
        {dataCardsTechnology.map(dataCard => (
          <CardTechnology key={dataCard.title} dataCard={dataCard} />
        ))}
      </div>
    </section>
  )
}

export { CardsTechnologys }