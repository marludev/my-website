import React from 'react'
import Markdown from 'react-markdown'
import Image from 'next/image'
import { Title } from '@/components/atoms'
import { aboutMe } from '@/data'
import me from '/public/profile.png'

const AboutMe = () => {
  return (
    <section className="flex flex-wrap justify-between px-6 py-16 lg:px-0">
      <div className="relative grid order-last w-full grid-cols-6 grid-rows-6 gap-4 mt-10 lg:mt-0 xl:order-first xl:w-6/12 lg:p-5">
        <div className="col-span-2 row-span-2 rounded-lg p-7 bg-custom-primary" />
        <div className="col-span-1 row-span-2 rounded-lg p-7 bg-custom-tertiary" />
        <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg p-7" />
        <div className="col-span-1 row-span-3 rounded-lg p-7 bg-custom-primary" />
        <div className="col-span-3 row-span-3 rounded-lg p-7 bg-custom-tertiary" />
        <div className="col-span-1 row-span-1 bg-gray-200 rounded-lg p-7" />
        <div className="col-span-2 row-span-2 rounded-lg p-7 bg-custom-primary" />
        <div className="col-span-1 row-span-2 rounded-lg p-7 bg-custom-tertiary" />
        <div className="col-span-2 row-span-2 bg-gray-200 rounded-lg p-7" />
        <div className="col-span-1 row-span-2 rounded-lg p-7 bg-custom-primary" />
        <div className="col-span-3 row-span-2 rounded-lg p-7 bg-custom-tertiary" />
        <figure className="absolute inset-0 flex items-center justify-center">
          <Image src={me} alt="photo author" placeholder="blur" />
        </figure>
      </div>
      <div className="w-full mt-auto text-white xl:w-6/12 lg:p-5">
        <Title
          title={'Hablando un poco de mis origenes'}
          subTitle={'Sobre mi'}
        />
        <Markdown className="my-4 tracking-wide prose-lg ">{aboutMe}</Markdown>
      </div>
    </section>
  )
}

export { AboutMe }
