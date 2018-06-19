import markdown from 'markdown-in-js';
import Post from '../layouts/post';
import components from '../components';
import { Button, Popover, Pane, Text } from 'evergreen-ui';

const Btn = () => {
  return (
    <Popover
      content={
        <Pane
          width={240}
          height={240}
          display="flex"
          alignItems="center"
          justifyContent="start"
          flexDirection="column"
        >
          <a href="/">{'Home'}</a>
          <Text>
            An evergreen is a plant that has leaves throughout the year, always
            green. This is true even if the plant retains its foliage only in
            warm climates, and contrasts with deciduous plants, which completely
            lose their foliage during the winter or dry season.
          </Text>
          <Text>🎄</Text>
        </Pane>
      }
    >
      <Button>Trigger Popover</Button>
    </Popover>
  );
};

export default Post()(markdown(components)`
# Welcome to my Note
Only if you're interested in reading more. So let me see... Check the console for a joke.

I used evergreen & create-next-app and @segment/snippet. 

With my destination as google analytics. I found that it was super easy to integrate Segment into this site with @segment/snippet. 

I used your cipher svg in my footer too. 

<Btn />
`);
