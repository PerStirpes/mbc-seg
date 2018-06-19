export default () => content => () => (
  <main>
    <article>{content}</article>
    <style jsx>{`
      article {
        line-height: 1.25;
      }
    `}</style>
  </main>
);
