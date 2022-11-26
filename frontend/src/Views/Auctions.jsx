import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Grid,
  MultiSelect,
} from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAsyncAuctions } from "../API/Api";
import { auction } from "../Models";

export default function Auctions() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchTags, setSearchTags] = useState(["spicy", "modern"]);
  const [auctions, setAuctions] = useState(null);

  //grab auctions from backend
  useEffect(() => {
    //setAuctions(getAsyncAuctions());
    setAuctions(exampleData);
  }, []);
  if (auctions === null) {
    return <div>loading...</div>;
  }

  function toAuction(auc) {
    navigate(`/auctions/${auc.id}`);
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      alert("submitted");
    }
  };

  //e is array of tags
  const handleSearchTags = (e) => {
    setSearchTags(e);
    console.log(e);
  };

  return (
    <div>
      <header className="">
        <input
          className="col-6 rounded fs-5 border border-secondary"
          type="search"
          placeholder="Search By Artist"
          onKeyDown={handleSearch}
          onChange={handleChange}
          value={searchInput}
        />
        <MultiSelect
          className="col-6 m-auto"
          maxSelectedValues={3}
          transitionDuration={150}
          transition="pop-top-left"
          transitionTimingFunction="ease"
          data={["spicy", "modern", "romance", "dark"]}
          label="Tags"
          placeholder="Search By Tag"
          searchable
          value={searchTags}
          onChange={handleSearchTags}
          radius="xl"
          size="md"
          clearable
        />
      </header>
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
                    src={auction.Image}
                    fit="contain"
                    alt="image-not-found"
                  />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{auction.OwnerName}</Text>
                  {auction.Tags.map((tag) => (
                    <Badge color="pink" variant="light">
                      {tag}
                    </Badge>
                  ))}
                </Group>

                <Text size="sm" color="dimmed">
                  {auction.StartPrice}
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
    2,
    2,
    "Truman",
    "7",
    "https://via.placeholder.com/150x200",
    "19.99",
    "date-listed"[("Friendly", "Light", "Rennaissance")],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    3,
    3,
    "Brock",
    "8",
    "https://via.placeholder.com/200x150",
    "129.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "cool!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    4,
    4,
    "Newman",
    "9",
    "https://via.placeholder.com/1500x2000",
    "19.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
  new auction(
    5,
    5,
    "ThisName",
    "9",
    "https://via.placeholder.com/1500x2000",
    "19.99",
    "date-listed",
    ["Friendly", "Dark", "Rennaissance"],
    [
      ["user1", "very sad!"],
      ["user2", "Awesome"],
      ["user3", "I love the design"],
    ]
  ),
];
