import { useEffect, useState } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  Box,
  MultiSelect,
  NumberInput,
  FileInput,
  Flex,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { auction } from "../Models";
import { addAuction } from "../API/Api";
export default function PostAuction() {
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
    console.log(
      new auction(
        values.title,
        values.description,
        "userName",
        null,
        selectedImage,
        values.startPrice,
        new Date().toDateString(),
        values.tags,
        endDate
      )
    );
  }

  return (
    <form
      className="mb-5"
      onSubmit={form.onSubmit((values) => postAuction(values))}
    >
      <Flex
        className="w-100"
        bg=""
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <TextInput
          className="col-8 m-auto"
          label="Title"
          placeholder="Title"
          {...form.getInputProps("title")}
        />
        <TextInput
          className="col-8 m-auto"
          label="Description"
          placeholder="Description"
          {...form.getInputProps("description")}
        />
        <NumberInput
          className="col-8 m-auto"
          label="Start Price"
          placeholder="Start Price"
          {...form.getInputProps("startPrice")}
        />
        <DatePicker
          className="col-8 m-auto"
          label="Ending Date"
          placeholder="Ending Date"
          value={endDate}
          onChange={setEndDate}
        />
        <MultiSelect
          className="col-8 m-auto"
          maxSelectedValues={3}
          transitionDuration={150}
          transition="pop-top-left"
          transitionTimingFunction="ease"
          data={["spicy", "modern", "romance", "dark"]}
          label="Tags"
          placeholder="Select Tags"
          searchable
          {...form.getInputProps("tags")}
          radius="xl"
          size="md"
          clearable
        />
        <FileInput
          className="col-8"
          accept="image/"
          label="Image of Your Art"
          placeholder="Input File Here"
          value={selectedImage}
          onChange={setSelectedImage}
        />
        {imageUrl && <img className="col-6" alt="file" src={imageUrl}></img>}
        <button
          className="col-2 fs-6 ms-4 btn border border-dark"
          type="submit"
          style={{
            background: "linear-gradient(#ed6ea0, #ec8c69)",
            color: "white",
          }}
        >
          Submit
        </button>
      </Flex>
    </form>
  );
}
