import React from "react";

type TokenType = string | null;
type TokenSetter = (token: TokenType) => void;
type TokenData = [token: TokenType, setToken: TokenSetter];

const setToken: TokenSetter = (newToken: TokenType) => {
  tokenData[0] = newToken;
  if (typeof localStorage !== "undefined") {
    localStorage.token = newToken;
  }
};
const tokenData: TokenData = [
  typeof localStorage !== "undefined" ? localStorage.token ?? null : null,
  setToken,
];

export const TokenContext = React.createContext<TokenData>(tokenData);

export function useToken() {
  return React.useContext(TokenContext);
}
