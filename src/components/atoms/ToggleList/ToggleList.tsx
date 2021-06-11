import React from 'react'
import { BsArrowUpShort } from 'react-icons/bs'
import { IProps } from './type'

const ToggleList: React.FC<IProps> = ({ question, response }) => {
  const [toggle, setToggle] = React.useState(false)
  const containerToggle = React.useRef<HTMLDivElement>(null)
  const height = containerToggle?.current?.scrollHeight

  return (
    <div className="w-full my-6">
      <div className="pl-10">
        <button
          className="flex items-center w-full cursor-pointer select-none focus:outline-none"
          onClick={() => setToggle(!toggle)}
          aria-label="Open/Close question"
        >
          <h4 className="w-full mt-2 mb-4 text-xl tracking-wide text-left">
            {question}
          </h4>
          <BsArrowUpShort
            size="50"
            className={`transform text-custom-primary transition-all duration-300 ml-auto ${
              !toggle && 'rotate-180'
            }`}
          />
        </button>
        <div
          ref={containerToggle}
          className={`overflow-hidden transition-all duration-300`}
          style={{ height: `${toggle ? `${height}px` : 0}` }}
        >
          <p className="pb-4 text-lg border-b-2 border-custom-primary">
            {response}
          </p>
        </div>
      </div>
    </div>
  )
}

export { ToggleList }
