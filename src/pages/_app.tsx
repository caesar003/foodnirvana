import { AppWrapper } from "@hooks/useCart";
import React, { PropsWithChildren } from "react";

// @ts-ignore
export default function App(props) {
  const { Component, pageProps } = props;
  return (
    <AppWrapper>
      <Component {...pageProps} />
    </AppWrapper>
  );
}
