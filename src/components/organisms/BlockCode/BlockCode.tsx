import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/okaidia'
import { IProps } from './type'

export const CodeBlock: React.FC<IProps> = ({ data }): JSX.Element => {
  return (
    <div className="my-10 font-mono">
      {data.titleCode && (
        <div className="px-6 py-2 border-b border-gray-600 rounded-t-xl bg-custom-code">
          <p className="text-gray-200">{data.titleCode}</p>
        </div>
      )}
      <Highlight
        {...defaultProps}
        code={data.code}
        language={data.extension}
        theme={nightOwl}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={`${className} overflow-x-auto py-4 px-6 rounded-b-xl`}
            style={{ ...style, backgroundColor: '#2D2A55' }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {i + 1 !== tokens.length &&
                  line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlock
