import React from 'react'
import { Title, ItemEduction } from '@/components/atoms'
import { studies } from '@/data'
const Education = () => {
  return (
    <section className="container px-6 py-16">
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <div className="mb-10">
            <Title subTitle="Cursos realizados" title="Cursos" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studies.courses.map(course => (
                <React.Fragment key={course.name}>
                  <ItemEduction image={course.image} name={course.name} />
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="mb-10">
            <Title subTitle="Carreras culminadas" title="Carreras" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {studies.careers.map(careers => (
                <React.Fragment key={careers.name}>
                  <ItemEduction image={careers.image} name={careers.name} />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Education }
