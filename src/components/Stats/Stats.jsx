import { List, Item, Span } from './Stats.styled';

export default function Stats({ infoActivity: { followers, views, likes } }) {
  return (
    <List>
      <Item>
        <Span>Followers</Span>
        <Span bold>{followers}</Span>
      </Item>
      <Item>
        <Span>Views</Span>
        <Span bold> {views}</Span>
      </Item>
      <Item>
        <Span>Likes</Span>
        <Span bold>{likes}</Span>
      </Item>
    </List>
  );
}
