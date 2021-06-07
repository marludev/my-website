import React from 'react'
import { Title } from '@/components/atoms'
import { aboutMe } from '@/data'
const AboutMe = () => {
  return (
    <section className="flex flex-wrap justify-between px-6 py-16 lg:px-0">
      <div className="grid order-last w-full grid-cols-2 grid-rows-6 mt-10 lg:mt-0 lg:order-first lg:w-6/12">
        <div className="row-start-1 row-end-5 bg-custom-primary"></div>
        <div className="row-span-2 row-start-5"></div>
        <div className="row-span-2 row-start-3 bg-custom-tertiary"></div>
        <div className="row-span-2 row-start-5 bg-gray-200"></div>
      </div>
      <div className="w-full mt-auto text-lg tracking-wide text-white lg:w-5/12">
        <Title
          title={'Hablando un poco de mis origenes'}
          subTitle={'Sobre mi'}
        />
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
