import Link from 'next/link';
import markdown from 'markdown-in-js';
import Post from '../layouts/post';
import { Ref, FootNotes, Note } from '../components/footnotes';
import components from '../components';

export default Post()(markdown(components)`

## Hi Segment,

I'm Matt. I heard about Segment a year ago on Hacker News ${<Ref id="1" />}.
I was pleased to see an opening for a Success Engineer. I could not crack your dot cipher ${(
  <Ref id="2" />
)}. With the hope of landing an interview, I thought the next best thing to do would be to spin up an app integrated with Segment and build it utilizing a few of Segment's open source projects.
Digging deeper into your docs, blogs and Analytics Academy, I quickly realized there's a lot of great free accessible content on your website. Thanks for posting it.

The Success Engineer role is very appealing, "_Success Engineers play a critical role keeping customers happy and funneling their feedback throughout the entire organization._" ${(
  <Ref id="3" />
)} I agree and that's the type of role I want to be in at Segment. I believe customers provide indispensable product insight. I strive to be an ardent supporter for the customers I worked with. I also have a wide breadth of experience of the type that gives you the versatility to place me in a number of contexts with confidence that the level of excellence you expect will be met. 

* While working as a Support Engineer at Helpshift I picked up working knowledge of how to troubleshoot network traffic through protocol layers with utilities: tcpdump, wireshark, traceroute, etc.

* As a client service rep at Wealthfront, I successfully pitched a Product improvement to the Product team by presenting overlooked data. The Product team made a data-driven decision based on the SQL query I wrote that queried asset transfer data from redshift. 

* At Wealthfront, I collaborated with product managers iterating on sign up flow improvements by proactively sharing customer pain points. 

* I've made code contributions and bug fixes to various open source projects.

I believe that my experience and education make me the perfect candidate for this position. Segments combination of customer focus, commitment to open source and great documentation is why I'm applying today.



You will find me to be well-spoken, energetic, confident, and personable. 
Please see my ${(
  <Link prefetch href="/resume">
    <a>resume</a>
  </Link>
)} for additional information on my experience. I look forward to hearing from you and learning more about the goals of this position. 


Thank you for consideration,

Matt 

  <FootNotes>
  <Note id="1">
  Hacker News <a target="_blank" href="https://news.ycombinator.com/item?id=14368536">How to Find Product Market Fit - Peter Reinhardt</a>
    </Note>
    <Note id="2">
    Twitter <a target="_blank" href="https://twitter.com/2_up/status/1006192827338932224">Tweet</a> 
    </Note>
    
  <Note id="3">
    Segment Blog <a target="_blank" href="https://segment.com/blog/success-engineers-customer-first/">How Success Engineers Keep Us Customer-First</a> 
    </Note>
  
  </FootNotes>
`);

// import Link from 'next/link'
// import markdown from 'markdown-in-js'
// import Post from '../layouts/post'
// import { Ref, FootNotes, Note } from '../components/footnotes'
// import components from '../components'

// export default Post()(markdown(components)`
// # Exercise #1: Example customer questions

// > Description: Below are 3 common customer questions we receive. Please draft responses and/or followup responses to each question in the space below. This exercise helps us evaluate your ability to interpret customer requests and provide clear and comprehensive responses leveraging the available resources found in our docs, public site and app. Feel free to ask clarifying questions back to the customer in your response when appropriate.

// ## Question #1:

// > Hi Segment,
// >
// > I'm using Wistia and I want to track my videos, specifically I want to track "Play", "Pause", and "End" events.
// >
// > - The events need to show up in Google Analytics as events.
// > - The GA event Category should be "Video" for all video events.
// > - The event label should be the name of the video being played.
// >
// > Can you help me with that? I'd love to see actual code samples on how to fire the event.
// >
// > Best,
// Sara

// ### Answer #1:
// <Enter your followup question/answer here>

// ## Question #2:

// > Hi Segment,
// >
// > We recently got up and running on Segment. Got the JS and PHP sources set up broadcasting to Mixpanel, GA and Intercom. I was wondering if it is also possible to connect Intercom as a cloud source and also broadcast the events back to other integrations.
// >
// > So for example, it would be nice to we could track opens and clicks from Intercom with Segment so we can broadcast those to Mixpanel and GA. We can of course do this ourselves by creating a simple webhook and use the PHP source to do that. But was just wondering if there is an even easier way.
// >
// > Best,
// Jerome

// ### Answer to Question #2:
// <Enter your followup question/answer here>

// ## Question #3:

// > Hey Segment,
// >
// > I'm using analytics.js to track events and I’m currently sending data to Intercom and Google Analytics. I’m tracking a few events that I don’t want to send to Google Analytics, but I do want to send them to Intercom. Can I do this in the Segment UI? If so, where do I do that? Is there another way to filter events in the $.track$ call itself?
// >
// > Best,
// Riley

// ### Answer to Question #3:
// <Enter your followup question/answer here>

// # Exercise #2: Basic SQL exercise

// > Description: Included below are credentials to access an example data set in a Postgres data warehouse, along with some questions requiring basic mysql analysis to answer.

// # Postgres cluster credentials:

// Hostname: ec2-54-83-194-117.compute-1.amazonaws.com
// Password: AbVv-wMQGmbOwFpeSdw9paFipJ
// Username: ujzapgrhcborxq
// Port: 5432
// Database: dbt6sotajkgv26
// Schema: music_is_me

// ## Question #1: How many users canceled their plan? List them by name here.

// <Enter your answer and query here>

// ## Question #2: How many different plans can users sign up for? What are they?

// <Enter your answer and query here>

// ## Question #3: How many users are signed up for each plan? Please present the result in a single table ordered by the number of users in each plan.

// <Enter your answer and query here>

// ## Question #4: A few users have appear to have a null $plan_id. The original events all included a value for the $plan_id but some were sent through as an integer $plan_id: 1 and others were sent as a string $plan_id: '1'. Why would that matter?

// <Enter your answer and query here>

// ## Extra Credit: Are there any other insights you were able to uncover when analyzing the data set?

// <Enter your answer and query here>

// # Exercise #3: Explaining a technical concept

// > Description: For this exercise, we'd like to test your ability to read code and provide clear technical and non-technical descriptions of what the code is solving for.

// ## Question #1: Describe what the following code block does when executed in a browser

// ## Question #2: Describe a specific scenario in which the above function would be used for tracking purposes, and more specifically how Google Analytics uses the data to track marketing campaigns.

// ## Question #3: Assuming that the analytics.js library is loaded on the page, please update the code block above to send through the standard utm parameters as properties in an analytics.track() call.

// Additional requirements:
// * Only send the officially supported utm campaign parameters as properties
// * Only send utm parameter properties that are included in the original URL query string (see below for example)
// * The track call event name should be "User Referred"
// * Example url: https://example.com/home?utm_source=google&utm_campaign=simulator_push&utm_content=trees&utm_name=forest

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// # End

// `)
