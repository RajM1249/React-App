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
  Table,
  Tr,
  Td,
  Th,
  Thead,
  Tbody,
  TableCaption,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";

const ModalContent = ({ users }) => {
  return (
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
  );
};

const TableView = ({ users }) => (
  <Table variant="simple">
    <TableCaption>© 2021 Netlify Application</TableCaption>
    <Thead>
      <Tr>
        <Th>Name</Th>
        <Th>Age</Th>
        <Th>Email</Th>
        <Th>Phone</Th>
      </Tr>
    </Thead>
    <Tbody>
      {users.map((user) => (
        <Tr>
          <Td>
            <Popover>
              <PopoverTrigger>
                <Flex>
                  <Box>
                    <Avatar size="sm" src={user.picture.thumbnail} />
                  </Box>
                  <Box>
                    {`${user.name.title} ${user.name.first} ${user.name.last}`}
                  </Box>{" "}
                </Flex>
              </PopoverTrigger>
              <PopoverContent>
                <ModalContent users={[user]} />
              </PopoverContent>
            </Popover>
          </Td>
          <Td>{user.dob.age}</Td>
          <Td>{user.email}</Td>
          <Td>{user.phone}</Td>
        </Tr>
      ))}
    </Tbody>
  </Table>
);

const RandomUser = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://randomuser.me/api?results=20")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setLoading(false);
      });
  }, []);
  return (
    <Box
      bg="#4ABDAC"
      w="100%"
      mh="100vh"
      p={(300, 30)}
      style={{ margin: "auto" }}
    >
      <Flex align={"center"} justify={"center"}>
        {loading && (
          <>
            <Text fontSize="lg" color="yellow" as="b">
              {process.env.REACT_APP_APP_NAME}
            </Text>
            &nbsp;
            &nbsp;
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          </>
        )}
      </Flex>
      <TableView users={users} />
    </Box>
  );
};

export default RandomUser;
