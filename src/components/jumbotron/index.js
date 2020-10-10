import React, { Component } from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...resProps
}) {
  return <Inner direction={direction}>{children}</Inner>;
}

Jumbotron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};
Jumbotron.Pane = function ({ children, ...restProps }) {
  return <Pane {...restProps}> {children}</Pane>;
};
Jumbotron.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

Jumbotron.SubTitle = function ({ children, ...restProps }) {
  return <SubTitle {...restProps}> {children}</SubTitle>;
};

Jumbotron.Image = function ({ ...restProps }) {
  return <Image {...restProps} />;
};
