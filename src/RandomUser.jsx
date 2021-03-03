import React, { useEffect, useState } from "react";
import {
  List,
  ListItem,
  Flex,
  Avatar,
  Box,
  Text,
  Center,
  Spinner,
} from "@chakra-ui/react";

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);
  console.log({ users });
  return (
    <Box bg="tomato" w="100%" h="100%" p={20}>
      <Text fontSize="6xl" color="yellow">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
        {process.env.REACT_APP_APP_NAME}
      </Text>
      <Center bg="black" h="100PX" color="white">
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
      </Center>
    </Box>
  );
};

export default RandomUser;
