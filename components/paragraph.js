export default ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        font-size: 14px;
        line-height: 20px;
        margin: 5px 0;
      }
    `}</style>
  </p>
);
