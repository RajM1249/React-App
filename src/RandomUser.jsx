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
  return (
    <Box
      bg="tomato"
      w="100%"
      h="100vh"
      p={(300, 30)}
      style={{ margin: "auto" }}
    >
      <Flex align={"center"} justify={"center"}>
        <Text fontSize="lg" color="yellow" as="b">
          {process.env.REACT_APP_APP_NAME}
        </Text>
        &nbsp;
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="md"
        />
      </Flex>
      <Center bg="black" h="300px" color="white" m={30}>
        <List spacing={5} width={"100%"}>
          {users.map((user) => (
            <ListItem>
              <Flex align={"center"} justify={"center"} direction={"column"}>
                <h1
                  style={{
                    color: "white",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  Agent Information:
                </h1>{" "}
                <br />
                <Avatar size="lg" src={user.picture.thumbnail} /> &nbsp; &nbsp;
                <List spacing={3} align={"center"}>
                  <ListItem>
                    <Text fontSize="x1" color="white" as="i">
                      Name:{" "}
                      {`${user.name.title} ${user.name.first} ${user.name.last}`}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="x1" color="white" as="i">
                      Gender: {`${user.gender}`}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="x1" color="white" as="i">
                      Phone: {`${user.phone}`}
                    </Text>
                  </ListItem>
                  <ListItem>
                    <Text fontSize="x1" color="white" as="i">
                      Email: {`${user.email}`}
                    </Text>
                  </ListItem>
                </List>
              </Flex>
            </ListItem>
          ))}
        </List>
      </Center>
    </Box>
  );
};

export default RandomUser;
