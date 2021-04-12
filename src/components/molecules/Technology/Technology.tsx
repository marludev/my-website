import React from 'react'
import { ItemTechnology, Title } from '@/components/atoms'
import { dataCardsTechnology } from '@/data'

const Technology = () => {
  const dataTitle = {
    title: 'Manejo diversas tecnologias',
    subTitle: 'tecnologias',
  }
  return (
    <section className="py-16 lg:py-32">
      <div className="px-6">
        <Title dataTitle={dataTitle} />
      </div>
      <div className="flex flex-row mt-10 overflow-x-scroll md:overflow-visible md:flex-wrap xl:flex-nowrap">
        {dataCardsTechnology.map(dataCard => (
          <ItemTechnology key={dataCard.title} dataCard={dataCard} />
        ))}
      </div>
    </section>
  )
}

export { Technology }
