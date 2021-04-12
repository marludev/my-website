import React from 'react'
import { Title, ItemEduction } from '@/components/atoms'

const Education = () => {
  const dataTitle = {
    title: 'Educación Previa',
    subTitle: 'Estudios',
  }

  const courses = [
    {
      id: '1',
      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '2',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '3',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '4',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '5',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '6',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '7',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '8',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '9',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
    {
      id: '10',

      name: 'Diseño Web Profesional El Curso Completo,Práctico y desde 0.',
      platform: 'udemy',
      hours: '40 HRS',
    },
  ]
  return (
    <section className="container px-6 py-16 lg:py-32">
      <div className="flex flex-wrap w-full">
        <div className="w-full md:w-1/2 md:pr-10 md:py-6">
          <div className="mb-10">
            <Title dataTitle={dataTitle} />
          </div>
          {courses.map((course, index) => {
            const maxLength = Math.ceil(courses.length / 2) - 1
            if (index <= maxLength)
              return (
                <ItemEduction
                  course={course}
                  maxLength={maxLength}
                  index={index}
                  key={course.id}
                />
              )
          })}
        </div>
        <div className="w-full md:w-1/2 md:pr-10 md:py-6">
          {courses.map((course, index) => {
            const minLength = Math.ceil(courses.length / 2) - 1
            const maxLength = courses.length - 1
            if (minLength < index)
              return (
                <ItemEduction
                  course={course}
                  maxLength={maxLength}
                  index={index}
                  key={course.id}
                />
              )
          })}
        </div>
      </div>
    </section>
  )
}

export { Education }
