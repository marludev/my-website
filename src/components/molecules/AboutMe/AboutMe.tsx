import React from 'react'
import { Title } from '@/components/atoms'
import { aboutMe } from '@/data'
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
        {aboutMe.map(text => (
          <React.Fragment key={text[0]}>
            <p className="my-4">{text[1]}</p>
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export { AboutMe }
