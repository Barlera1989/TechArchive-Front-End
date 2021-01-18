import React from "react";
import { FormNewsDiv, Title } from "../../styles";
import NewsForm from "../news-form";

const NewsFormLayout = () => {
  return (
    <FormNewsDiv>
      <Title style={{ marginLeft: 30 }}>News</Title>
      <NewsForm />
    </FormNewsDiv>
  );
};

export default NewsFormLayout;
