import {
  Card,
  Image,
  Text,
  Badge,
  Button,
  Group,
  Grid,
  Box,
} from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { auction } from "../Models";

export default function Auctions(auctionss) {
  const [auctions, setAuctions] = useState(null);

  //grab auctions from backend
  useEffect(() => {
    setAuctions(exampleData);
  }, []);
  if (auctions === null) {
    return <div>loading...</div>;
  }

  function toAuction(auc) {
    console.log(auc);
    window.location.pathname = `/auctions/:${auc.id}`;
  }

  return (
    <div>
      <header>{/* some header component */}</header>
      <div className="container">
        <Grid className="m-5">
          {auctions.map((auction, index) => (
            <Grid.Col key={index} lg={3} md={4} sm={5}>
              <Card
                shadow="sm"
                p="lg"
                radius="md"
                withBorder
                onClick={() => {
                  toAuction(auction);
                }}
                style={{
                  cursor: "pointer",
                }}
              >
                <Card.Section>
                  <Image
                    src={auction.imageUrl}
                    fit="contain"
                    alt="image-not-found"
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{auction.title}</Text>
                  {auction.tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))}
                </Group>

                <Text size="sm" color="dimmed">
                  {auction.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </div>
  );
}

let exampleData = [
  new auction(
    1,
    "Brock",
    "The art of War",
    "This peice depicts the wonderful art of war",
    "129.99",
    "https://via.placeholder.com/150x150",
    [
      ["user1", "cool!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ],
    ["Friendly", "Dark", "Rennaissance"]
  ),
  new auction(
    2,
    "Truman",
    "The Beginning of the End",
    "It's a peice of artwork about some sad things",
    "19.99",
    "https://via.placeholder.com/150x200",
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ],
    ["Friendly", "Light", "Rennaissance"]
  ),
  new auction(
    3,
    "Brock",
    "The art of War",
    "This peice depicts the wonderful art of war",
    "129.99",
    "https://via.placeholder.com/200x150",
    [
      ["user1", "cool!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ],
    ["Friendly", "Dark", "Rennaissance"]
  ),
  new auction(
    4,
    "Newman",
    "Colors",
    "It's a peice of artwork about some sad things",
    "19.99",
    "https://via.placeholder.com/1500x2000",
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ],
    ["Friendly", "Dark", "Rennaissance"]
  ),
  new auction(
    5,
    "ThisName",
    "Duality",
    "It's a peice of artwork about some sad things",
    "19.99",
    "https://via.placeholder.com/1500x2000",
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ],
    ["Friendly", "Dark", "Rennaissance"]
  ),
];
