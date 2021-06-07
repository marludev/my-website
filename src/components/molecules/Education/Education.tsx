import React from 'react'
import { Title, ItemEduction } from '@/components/atoms'
import { coursesPlatzi } from '@/data'
const Education = () => {
  return (
    <section className="container px-6 py-16">
      <div className="flex flex-wrap w-full">
        <div className="w-full">
          <div className="mb-10">
            <Title title="Educación Previa" subTitle="Estudios" />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coursesPlatzi.map(course => (
                <React.Fragment key={course.courseName}>
                  <ItemEduction
                    courseImg={course.courseImg}
                    courseName={course.courseName}
                  />
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
