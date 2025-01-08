"use client";
import { ConfigProvider, ThemeConfig } from "antd";
import React, { PropsWithChildren, useMemo } from "react";
import { getThemeConfig } from "@/constants/theme";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {

  const theme: ThemeConfig = useMemo(
    () => getThemeConfig("light"),
    []
  );

  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};

export default ThemeProvider;
