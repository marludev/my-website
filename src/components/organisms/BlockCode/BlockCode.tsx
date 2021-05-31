import React from 'react'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import nightOwl from 'prism-react-renderer/themes/nightOwl'
import { IProps } from './type'

export const CodeBlock: React.FC<IProps> = ({ className, code }) => {
  const language: Language = className?.replace('language-', '') as Language

  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={nightOwl}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} p-4 my-4 rounded-md`} style={style}>
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
  )
}

export default CodeBlock
