'use client';
import { GlobalToken, theme } from "antd";

type useThemeTokensProps = () => GlobalToken & { algorithm: "light" | "dark" };

const useThemeTokens: useThemeTokensProps = () => {

  const { useToken } = theme;
  const { token: themeTokens } = useToken();

  return {
    algorithm: "light",
    ...themeTokens,
  };
};

export default useThemeTokens;
