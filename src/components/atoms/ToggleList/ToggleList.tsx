import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import { IProps } from './type'
export {} from '@/data'

const ToggleList: React.FC<IProps> = ({ question, response }) => {
  const [toggle, setToggle] = React.useState(false)
  const containerToggle = React.useRef<HTMLDivElement>(null)
  const height = containerToggle?.current?.scrollHeight

  return (
    <div className="w-full my-6">
      <div className="pl-10">
        <div
          className="flex items-center cursor-pointer select-none"
          onClick={() => setToggle(!toggle)}
        >
          <h4 className="w-full mt-2 mb-4 text-xl">{question}</h4>
          <BsArrowUpShort
            size="50"
            className={`transform text-custom-primary transition-all duration-300 ml-auto ${
              !toggle && 'rotate-180'
            }`}
          />
        </div>
        <div
          ref={containerToggle}
          className={`overflow-hidden transition-all duration-300`}
          style={{ height: `${toggle ? `${height}px` : 0}` }}
        >
          <p>{response}</p>
        </div>
      </div>
    </div>
  )
}

export { ToggleList }
