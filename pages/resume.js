import Post from '../layouts/post'
import HR from '../components/hr'
import P from '../components/paragraph'
import { H1, H2, H3 } from '../components/heading'
import { UL, LI } from '../components/list'

export default Post()(
  <div>
    <article>
      <H1>Matt Barraza-Carl</H1>

      <HR />
      <P>
        Experience building support tools on top of REST API backend services,
        assisting developers integrating mobile SDKs and troubleshooting REST
        API issues. Documentation writer, and support provider via, email, chat,
        twitter, and phone. Thorough understanding of web services: HTTP
        protocols, JSON, and debug tools. Familiar with iOS and Android
        development.
      </P>
      <H2>Professional Experience</H2>
      <HR />
      <P>
        <b>
          <a target="_blank" href="https://www.helpshift.com/">
            HelpShift,{' '}
          </a>
          Support Engineer{' '}
        </b>

        <span style={{ float: 'right' }}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/100%2BBush%2BSt%2B%2523950,%2BSan%2BFrancisco,%2BCA%2B94104/@37.7915206,-122.4020527,17z/data%3D!3m1!4b1!4m5!3m4!1s0x808580623e4dd56b:0xd7571de97d7a669f!8m2!3d37.7915206!4d-122.399864"
          >
            San Francisco, CA
          </a>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/900%2BMiddlefield%2BRd%2BFloor%2B2,%2BRedwood%2BCity,%2BCA%2B94063/@37.4851521,-122.2318006,17z/data%3D!3m1!4b1!4m5!3m4!1s0x808fa3ad3ddfdcc1:0x784202c3b24f4e60!8m2!3d37.4851521!4d-122.2296119"
          />{' '}
          March 2018 – June 2018
        </span>
      </P>
      <UL>
        <LI>
          Responsible for daily tier 1 &amp; 2 ticket triage, analyzing log
          files, HTTP traffic, filing JIRA for bugs in SDK, web chat, &amp; web
          app{' '}
        </LI>

        <LI>
          Scoped UX demos using HTML/CSS for Epic Games &amp; Chatbooks at sales
          team request to help with negotiations
        </LI>

        <LI>
          Integrated several webhook monitoring service notifications into
          Slack: new tickets, Mailgun, JIRA{' '}
        </LI>

        <LI>
          Wrote a node.js script that calls API ticket issue endpoint, filters
          based on tags and exports ticket issues to csv files
        </LI>
      </UL>
      <P>
        <b>
          <a target="_blank" href="https://www.wealthfront.com">
            Wealthfront
          </a>
          , Client Support Services
        </b>
        <span style={{ float: 'right' }}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/900%2BMiddlefield%2BRd%2BFloor%2B2,%2BRedwood%2BCity,%2BCA%2B94063/@37.4851521,-122.2318006,17z/data%3D!3m1!4b1!4m5!3m4!1s0x808fa3ad3ddfdcc1:0x784202c3b24f4e60!8m2!3d37.4851521!4d-122.2296119"
          >
            Redwood City, CA
          </a>{' '}
          Jan 2015 – Sept 2016
        </span>
      </P>
      <UL>
        <LI>
          Wrote SQL queries to fetch stock portfolios, incoming assets transfers
          and other miscellaneous data
        </LI>
        <LI>
          <a target="_blank" href="https://learn.wealthfront.com/">
            Revised and authored help center documentation based on trends
          </a>
        </LI>
        <LI>
          <a target="_blank" href="https://support.wealthfront.com/hc/en-us">
            Integrated instant search feature to provide article suggestions as
            a user types into the search box
          </a>
        </LI>
        <LI>
          Responsible for daily brokerage operation functions, unreconciled
          exception reports, trading, asset settlements
        </LI>
        <LI>
          <a
            target="_blank"
            href="http://eng.wealthfront.com/2017/08/24/a-wealthfront-acats-odyssey/"
          >
            Partnered with engineering to improve incoming stock transfers
            process time to invest metric by 31%
          </a>
        </LI>
        <LI>
          <a
            target="_blank"
            href="https://twitter.com/Wealthfront/with_replies"
          >
            Social Media: on-call, impromptu executive meetups brainstorming
            resolutions to issues communicated via Twitter
          </a>
        </LI>
      </UL>
      <P>
        <b>
          <a target="_blank" href="https://www.usaa.com/">
            USAA
          </a>
          , Wealth Management Services
        </b>
        <span style={{ float: 'right' }}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/USAA/@33.7192711,-112.1134293,17z/data%3D!3m1!4b1!4m5!3m4!1s0x872b65bbbd96662f:0x4032a82a49f59b15!8m2!3d33.7192711!4d-112.1112406"
          >
            Phoenix, AZ{' '}
          </a>{' '}
          Dec 2013 – Jan 2015
        </span>
      </P>
      <UL>
        <LI>
          Investment service operations including identified client needs,
          resolved issues, and executed trades
        </LI>
      </UL>
      <P>
        <b>
          <a target="_blank" href="https://investor.vanguard.com/home/">
            Vanguard,
          </a>{' '}
          Brokerage Trading Associate{' '}
        </b>
        <span style={{ float: 'right' }}>
          <a
            target="_blank"
            href="https://www.google.com/maps/place/The%2BVanguard%2BGroup/@33.614946,-111.8981587,17z/data%3D!3m1!4b1!4m5!3m4!1s0x872b75ae2c28f1a7:0xaf79966277a8da71!8m2!3d33.614946!4d-111.89597"
          >
            Scottsdale, AZ{' '}
          </a>{' '}
          May 2011 – Dec 2013
        </span>
      </P>
      <UL>
        <LI>
          Evaluated client needs, placed trades, and ensured
          applications/documents were compliant with industry regulations{' '}
        </LI>
      </UL>
      <H2>Professional Projects &amp; Open Source Contributions</H2>
      <HR />
      <UL>
        <LI>
          Developed a Node.js GDPR ticket redaction tool for Nickelodeon
          automating processing of customers right to be forgotten
        </LI>
        <LI>
          Client profile Zendesk app @Wealthfront: Ticket sidebar displays
          customer profile and recent tickets. GET requests to internal API
          &amp; Zendesk API fetching customer profile and 5 most recent tickets.
          Posts data into widget
        </LI>
        <LI>
          <a target="_blank" href="https://github.com/zeit/hyper/pull/2293">
            zeit/hyper #2293
          </a>
          : Exports desktop app config to issue report template Built-in error
          reporting, desktop app auto-fills issues template directly to GitHub
          repo
        </LI>
        <LI>
          <a
            target="_blank"
            href="https://github.com/zeit/now-desktop/pull/388"
          >
            zeit/now-desktop #388
          </a>
          : Position window correctly when menu bar is hidden. Fixes tray-menu
          positioning, bug hid app caret under mac menu bar in full-screen mode{' '}
        </LI>

        <LI>
          <a
            target="_blank"
            href="https://github.com/nylas/nylas-nodejs/pull/73 "
          >
            nylas/nylas-nodejs-sdk #73
          </a>
          Opens dev env within users default browser. Added visual
          documentation. Fixed several bugs
        </LI>
      </UL>
      <H3>Technologies</H3>
      <HR />
      <table>
        <tbody>
          <tr>
            <td>
              <UL>
                <LI>Javascript</LI>
                <LI>SQL</LI>
              </UL>
            </td>
            <td>
              <UL>
                <LI>Node.js</LI>
                <LI>Familiar with Python</LI>
              </UL>
            </td>
            <td>
              <UL>
                <LI>HTML / CSS</LI>
                <LI>React Native</LI>
              </UL>
            </td>
          </tr>
        </tbody>
      </table>
      <H3>Education &amp; Tooling</H3>
      <HR />
      <div style={{ display: 'table', margin: 'auto' }}>
        <P>
          Bachelor of Science,{' '}
          <a
            target="_blank"
            href="https://sols.asu.edu/degree-programs/biological-sciences"
          >
            Biological Sciences Major{' '}
          </a>
          , Arizona State University, Tempe, AZ, 2010
        </P>
      </div>
      <H3>Web-based service applications</H3>
      <HR />
      <div style={{ display: 'table', margin: 'auto' }}>
        <P>
          <a target="_blank" href="https://www.atlassian.com/">
            {' '}
            JIRA{' '}
          </a>
          |
          <a target="_blank" href="https://www.elastic.co/products/kibana">
            {' '}
            Kibana{' '}
          </a>
          |
          <a target="_blank" href="https://gsuite.google.com/">
            {' '}
            G Suite{' '}
          </a>
          |
          <a target="_blank" href="https://www.salesforce.com/">
            {' '}
            Salesforce{'  '}
          </a>
          |
          <a
            target="_blank"
            href="https://github.com/PerStirpes?tab%3Drepositories"
          >
            {' '}
            GitHub{'  '}
          </a>
          |
          <a
            target="_blank"
            href="https://github.com/PerStirpes/slack-bug-report-application"
          >
            {' '}
            Slack{' '}
          </a>
          |
          <a target="_blank" href="https://www.zendesk.com/">
            {' '}
            Zendesk{' '}
          </a>
        </P>
      </div>
    </article>
    <style jsx>{`
      table {
        margin: auto;
      }
      table td,
      table th {
        padding-left: 40px;
        padding-right: 40px;
      }

      a {
        color: #067df7;
        text-decoration: none;
        font-size: 16px;
      }
      a:hover {
        color: hsl(151, 44%, 50%);
        border-color: hsl(151, 44%, 50%);
        transition: color 250ms 50ms ease-in-out;
      }
    `}</style>
  </div>,
)
