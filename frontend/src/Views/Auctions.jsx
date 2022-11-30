import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Grid,
  MultiSelect,
  Input,
} from "@mantine/core";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAsyncAuctions } from "../API/Api";

export default function Auctions() {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [searchTags, setSearchTags] = useState([""]);
  const [auctions, setAuctions] = useState(null);

  //grab auctions from backend
  useEffect(() => {
    getAsyncAuctions().then((x) => setAuctions(x.info));
  }, []);
  if (auctions === null) {
    return <div>loading...</div>;
  }

  function toAuction(auc) {
    navigate(`/auctions/${auc.AuctionID}`);
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
          placeholder="Search By Title"
          onKeyDown={handleSearch}
          onChange={handleChange}
          value={searchInput}
        />
        {/* <MultiSelect
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
        /> */}
      </header>
      <div className="container">
        <Grid className="m-5">
          {auctions
            .filter((auction) => {
              if (searchInput === "") {
                return auction;
              } else if (
                auction.Title.toLowerCase().includes(searchInput.toLowerCase())
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
                    <Text weight={500}>{auction.Title}</Text>
                    {auction.Paint ? (
                      <Badge color="pink" variant="light">
                        Paint
                      </Badge>
                    ) : (
                      <></>
                    )}
                    {auction.Pencil ? (
                      <Badge color="pink" variant="light">
                        Pencil
                      </Badge>
                    ) : (
                      <></>
                    )}
                    {auction.Modern ? (
                      <Badge color="pink" variant="light">
                        Modern
                      </Badge>
                    ) : (
                      <></>
                    )}
                    {auction.Abstract ? (
                      <Badge color="pink" variant="light">
                        Abstract
                      </Badge>
                    ) : (
                      <></>
                    )}
                    {auction.Realism ? (
                      <Badge color="pink" variant="light">
                        Realism
                      </Badge>
                    ) : (
                      <></>
                    )}
                  </Group>

                  <Text size="sm" color="dimmed">
                    ${auction.StartPrice}
                  </Text>
                </Card>
              </Grid.Col>
            ))}
        </Grid>
      </div>
    </div>
  );
}
