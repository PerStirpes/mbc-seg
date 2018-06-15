import Link from 'next/link'
import markdown from 'markdown-in-js'
import Post from '../layouts/post'
import { Ref, FootNotes, Note } from '../components/footnotes'
import components from '../components'

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
`)
