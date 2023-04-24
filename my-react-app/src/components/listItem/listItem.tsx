import { useState } from "react";
import CardItem from "./cardItem";
import { nanoid } from "nanoid";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  SLICE_VALUE,
  MAX_PEOPLE_VALUE,
  DEFAULT_SLICE_VALUE,
} from "../../const";
interface LIST_ITEM {
  user: { name: string; surname: string }[];
}

function ListItem({ user }: LIST_ITEM) {
  const [users, setUsers] = useState(
    user.slice(0, DEFAULT_SLICE_VALUE)
  );
  const [sliceValue, setSliceValue] = useState(SLICE_VALUE);
  const [hasMore, setHasMore] = useState(true);

  const scrollHendler = () => {
    if (users.length === MAX_PEOPLE_VALUE) {
      setHasMore(false);
      return;
    }
    setSliceValue((prev) => prev + DEFAULT_SLICE_VALUE);
    setUsers(user.slice(0, sliceValue));
  };

  console.log(users);

  return (
    <div className="list_wrapper">
      <InfiniteScroll
        dataLength={users.length}
        next={scrollHendler}
        loader={<h4>Loading...</h4>}
        hasMore={hasMore}
        height={480}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {users.map((item) => (
          <CardItem
            name={item.name}
            surname={item.surname}
            key={nanoid()}
          />
        ))}
      </InfiniteScroll>
    </div>
  );
}

export default ListItem;
