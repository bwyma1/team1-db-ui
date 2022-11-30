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
  const [endDate, setEndDate] = useState(new Date());
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    } else {
      setImageUrl(null);
    }
  }, [selectedImage]);

  const form = useForm({
    initialValues: {
      title: "",
      description: "",
      startPrice: "",
      tags: [""],
    },
  });

  function postAuction(values) {
    setSubmittedValues(values);
    addAuction(
      new auction(
        values.title,
        values.description,
        "userName",
        10,
        selectedImage,
        values.startPrice,
        new Date().toDateString(),
        endDate,
        0,
        1,
        0,
        1,
        0
      )
    );
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
        <FileInput
          required
          className="col-8"
          accept="image/"
          label="Image of Your Art"
          placeholder="Input File Here"
          value={selectedImage}
          onChange={setSelectedImage}
        />
        {imageUrl && (
          <img
            className="col-10"
            alt="file"
            src={imageUrl}
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
