import App, { Container } from 'next/app';
import React from 'react';
import AppNavigation from '../components/nav';
import AppFooter from '../components/FooterApp';

const secret_message = [
  `Append one of these /_src to the end of the root url to see the source`,
];

for (const info of secret_message) {
  console.log(info);
  console.log('%c⚠️', 'font-size: 3em');
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <div>
          <AppNavigation />
          <Component {...pageProps} />
          ` <AppFooter />
        </div>
        <style jsx global>{`
          html,
          body {
            height: 100%;
            font-family: 'SF Display', sans-serif;
            margin: 0;
            -webkit-font-smoothing: antialiased;
          }

          main {
            padding: 30px;
            box-sizing: border-box;
            position: relative;
            min-height: 100%;
          }
          article {
            margin: 0 auto;
            word-wrap: break-word;
            hyphens: auto;
            max-width: 720px;
          }
          a {
            text-decoration: none;
            color: #067df7;
          }
          a:hover {
            color: #3db077;
            border-color: #3db077;
            transition: color 250ms 50ms ease-in-out;
          }

          a:visited,
          a:active {
            text-decoration: none;
          }
          table {
            margin: auto;
          }
          table td,
          table th {
            padding-left: 40px;
            padding-right: 40px;
          }

          @media (min-width: 768px) {
            main {
              padding: 20px;
            }
          }
        `}</style>
      </Container>
    );
  }
}
