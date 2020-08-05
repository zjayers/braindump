import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/cjs/Card";
import axios from "axios";
import cheerio from "cheerio";

const MyComponent = ({ url }) => {
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const getCardData = async () => {
    const response = await axios.get(
      "https://limitless-brushlands-46281.herokuapp.com/" + url
    );
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);
      setDesc($('meta[name="description"]').attr("content"));
      setTitle($("title").text());
    }
  };

  useEffect(() => {
    getCardData();
  }, []);

  return (
    <a className="resource-link" href={url} target="_blank">
      <Card className="resource-card" style={{ width: "18rem" }}>
        <Card.Img
          className="card-icon"
          variant="top"
          src={"https://s2.googleusercontent.com/s2/favicons?domain_url=" + url}
        />
        <Card.Body className="card-body">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Text>{desc}</Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
};

export default MyComponent;
