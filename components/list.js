const OL = ({ children }) => (
  <ol>
    {children}

    <style jsx>{`
      ol {
        list-style: decimal;
        margin: 30px 0;
        padding: 0 0 0 22px;
      }
    `}</style>
  </ol>
)

const UL = ({ children }) => (
  <ul>
    {children}

    <style jsx>{`
      ul {
        margin: 15px 0;
        list-style-type: none;
        padding: 0 0 0 18px;
      }
    `}</style>
  </ul>
)

const LI = ({ children }) => (
  <li>
    {children}
    <style jsx>{`
      li {
        margin-bottom: 5px;
        padding-left: 20px;
        line-height: 20px;
      }
      li:before {
        content: '-';
        color: #ababab;
        position: absolute;
        margin-left: -20px;
      }
    `}</style>
  </li>
)

export { OL, UL, LI }
