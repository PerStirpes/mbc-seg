export const H1 = ({ children }) => (
  <Wrapper>
    <h1>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h1 {
          text-align: center;
          font-weight: 650;
          font-size: 23px;
          line-height: 1ch;
        }
      `}</style>
    </h1>
  </Wrapper>
)

export const H2 = ({ children }) => (
  <Wrapper>
    <h2>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h2 {
          text-align: center;
          font-weight: 700;
          font-size: 18px;
          line-height: 1ch;
        }
      `}</style>
    </h2>
  </Wrapper>
)

export const H3 = ({ children }) => (
  <Wrapper>
    <h3>
      <Anchor content={children} />
      {children}

      <style jsx>{`
        h3 {
          text-align: center;
          font-weight: 650;
          font-size: 15px;
          line-height: 1ch;
        }
      `}</style>
    </h3>
  </Wrapper>
)
const Anchor = ({ content }) => {
  let id = content

  return (
    <span>
      <a href={`#${id}`} id={id}>
        #
      </a>
      <style jsx>
        {`
          span {
            position: absolute;
            margin-left: -15px;
            width: 15px;
          }

          a {
            text-decoration: none;
            color: #4492ff;
            padding-top: 30px;
            visibility: hidden;
          }

          a:focus {
            outline: none;
          }
        `}
      </style>
    </span>
  )
}

const Wrapper = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div:hover :global(a) {
        visibility: visible;
      }
    `}</style>
  </div>
)
