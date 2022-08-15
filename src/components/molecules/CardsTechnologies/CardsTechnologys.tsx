import React from 'react'
import { CardTechnology, Title } from '@/components/atoms'
import { dataCardsTechnology } from '@/data'

const CardsTechnologies = () => {
  return (
    <section className="py-16">
      <div className="px-6">
        <Title title="Manejo diversas tecnologias" subTitle="tecnologias" />
      </div>
      <div className="flex flex-wrap">
        {dataCardsTechnology.map(dataCard => (
          <CardTechnology key={dataCard.title} dataCard={dataCard} />
        ))}
      </div>
    </section>
  )
}

export { CardsTechnologies }
