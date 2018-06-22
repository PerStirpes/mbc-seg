import Link from 'next/link';
import markdown from 'markdown-in-js';
import Post from '../layouts/post';
import { Ref, FootNotes, Note } from '../components/footnotes';
import components from '../components';
import Image from '../components/image';
export default Post()(markdown(components)`

## Hi ,

I'm Matt. 

Hacker News ${<Ref id="1" />}.


Twitter ${<Ref id="2" />}.  

${<Ref id="3" />} 

${<Image width={800} height={400} src="/static/media/video-poster.png" />}



You will find me to be well-spoken, energetic, confident, and personable. 
Please see my ${(
  <Link prefetch href="/resume">
    <a>resume</a>
  </Link>
)} for additional information on my experience. I look forward to hearing from you 


Matt 

  <FootNotes>
  <Note id="1">
  <a target="_blank" href="https://news.ycombinator.com/"> Hacker News</a>
    </Note>
    <Note id="2">
    <a target="_blank" href="https://twitter.com/2_up/">Twitter</a> 
    </Note>
    
  
  
  </FootNotes>
`);
