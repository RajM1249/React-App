import React, { useEffect, useState } from "react";
import { List, ListItem, Flex, Avatar, Box } from "@chakra-ui/react";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);
  console.log({ users });
  return (
    <Box p={20}>
      <List spacing={3}>
        {users.map((user) => (
          <ListItem>
            <Flex>
              <Avatar size="sm" src={user.picture.thumbnail} />
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RandomUser;
