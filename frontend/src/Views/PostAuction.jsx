import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  MultiSelect,
  NumberInput,
  FileInput,
  Flex,
  Textarea,
  Input,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { auction } from "../Models";
import { addAuction } from "../API/Api";
import { useNavigate } from "react-router-dom";
export default function PostAuction() {
  const navigate = useNavigate();
  const [submittedValues, setSubmittedValues] = useState("");
  const [isSumbitted, setIsSubmitted] = useState(false);
  const [endDate, setEndDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [user] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(selectedImage);
    } else {
      setImageUrl(null);
    }
  }, [selectedImage]);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      startPrice: "",
      image: "",
      tags: [""],
    },
  });

  function postAuction(values) {
    setSubmittedValues(values);
    let paint = 0;
    let pencil = 0;
    let modern = 0;
    let abstract = 0;
    let realism = 0;
    let currDate = new Date();
    let endingDate = new Date(endDate);
    if (values.tags.includes("paint")) paint = 1;
    if (values.tags.includes("pencil")) pencil = 1;
    if (values.tags.includes("modern")) modern = 1;
    if (values.tags.includes("abstract")) abstract = 1;
    if (values.tags.includes("realism")) realism = 1;
    if (currDate < endingDate) {
      addAuction(
        new auction(
          values.title,
          values.description,
          user.DisplayName,
          0,
          selectedImage,
          values.startPrice,
          currDate.toDateString(),
          endingDate.toDateString(),
          paint,
          pencil,
          modern,
          abstract,
          realism
        )
      );
    } else {
      alert("invalid ending date");
    }
  }

  return (
    <form
      className="mb-5"
      style={{
        background: "white",
        padding: "2rem",
        margin: "3rem",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
      }}
      onSubmit={form.onSubmit((values) => postAuction(values))}
    >
      <Flex
        className="w-100"
        bg=""
        gap="md"
        justify="center"
        align="center"
        direction="column"
      >
        <Input.Wrapper id="title" label="Title">
          <Input
            name="Title"
            placeholder="Title"
            required
            {...form.getInputProps("title")}
          />
        </Input.Wrapper>
        <Textarea
          className="col-8 m-auto"
          label="Description"
          placeholder="Description"
          required
          {...form.getInputProps("description")}
        />
        <div>
          <NumberInput
            defaultValue={1}
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            formatter={(value) =>
              !Number.isNaN(parseFloat(value))
                ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                : "$ "
            }
            className=" m-auto"
            label="Start Price"
            placeholder="Start Price"
            required
            hideControls
            {...form.getInputProps("startPrice")}
          />
        </div>
        <DatePicker
          className="col-8 m-auto"
          label="Ending Date"
          placeholder="Ending Date"
          required
          value={endDate}
          onChange={setEndDate}
        />
        <MultiSelect
          required
          className="col-8 m-auto"
          maxSelectedValues={3}
          transitionDuration={150}
          transition="pop-top-left"
          transitionTimingFunction="ease"
          data={["paint", "pencil", "modern", "abstract", "realism"]}
          label="Tags"
          placeholder="Select Tags"
          searchable
          {...form.getInputProps("tags")}
          radius="xl"
          size="md"
          clearable
        />
        <Input.Wrapper id="image" label="Image Link">
          <Input
            name="image"
            placeholder="Image Link Here"
            required
            value={selectedImage}
            onChange={(e) => setSelectedImage(e.target.value)}
          />
        </Input.Wrapper>
        {imageUrl && (
          <img
            className="col-10"
            alt="inpImage"
            src={selectedImage}
            style={{ minWidth: "" }}
          ></img>
        )}
        <button
          className=" btn border border-dark"
          type="submit"
          style={{
            background: "linear-gradient(#ed6ea0, #ec8c69)",
            color: "white",
            minWidth: "8rem",
          }}
        >
          Post Auction
        </button>
      </Flex>
    </form>
  );
}
