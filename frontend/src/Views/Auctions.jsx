import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Grid,
  MultiSelect,
  Button,
  Input,
} from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAsyncAuctions, getAuctions } from "../API/Api";
import { auction } from "../Models";

export default function Auctions() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchTags, setSearchTags] = useState([""]);
  const [auctions, setAuctions] = useState(null);
  const [auctionss, setAuctionss] = useState(null);

  //grab auctions from backend
  useEffect(() => {
    getAsyncAuctions().then((x) => setAuctionss(x.info));
    console.log(auctionss);
    setAuctions(exampleData);
  }, []);
  if (auctions === null) {
    return <div>loading...</div>;
  }

  if (auctionss != null) {
    console.log(auctionss);
    setAuctionss(null);
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
        <button
          className="col-2 fs-6 ms-4 btn border border-dark"
          type="button"
          onClick={() => navigate(`/postAuction`)}
          style={{
            background: "linear-gradient(#ed6ea0, #ec8c69)",
            color: "white",
            minWidth: "4.3rem",
            maxWidth: "8rem",
            width: "10%",
          }}
        >
          Post Auction
        </button>
        <Input
          className="col-6 m-auto rounded fs-5 border border-secondary"
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
          {auctions
            .filter((auction) => {
              if (searchInput === "") {
                return auction;
              } else if (
                auction.OwnerName.toLowerCase().includes(
                  searchInput.toLowerCase()
                )
              ) {
                return auction;
              }
            })
            .map((auction, index) => (
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
                    {auction.EndDate.map((tag) => (
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
    "date-listed",
    [("Friendly", "Light", "Rennaissance")],
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
