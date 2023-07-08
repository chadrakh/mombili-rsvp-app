import styled from '@emotion/styled';
import { FC, ReactNode } from "react";

type TextProps = {
  bold?: boolean;
  italics?: boolean;
  marginTop?: number;
  marginBottom?: number;
  size?: "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "2em" | "3em" |"4em" | "6em";
};

const StyledPrimary = styled.h1<TextProps>`
  font-size: ${(props) => (props.size ?? "large")};
  margin-top: ${(props) => props.marginTop}em;
  font-style: ${(props) => (props.italics ? "italic" : "normal")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-family: "Tangerine", sans-serif;
  font-weight: normal;
  margin-bottom: 0.5em;
  white-space: nowrap;
`;

const StyledSecondary = styled.h2<TextProps>`
  font-size: ${(props) => (props.size ?? "large")};
  margin-top: ${(props) => props.marginTop}em;
  font-style: ${(props) => (props.italics ? "italic" : "normal")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  font-family: "Tangerine", sans-serif;
  margin-bottom: 0.5em;
  white-space: nowrap;
`;

const StyledBody = styled.p<TextProps>`
  font-size: ${(props) => (props.size ?? "large")};
  margin-top: ${(props) => props.marginTop}em;
  margin-bottom: ${(props) => props.marginBottom}em;
  font-style: ${(props) => (props.italics ? "italic" : "normal")};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  white-space: nowrap;
`;

type Props = {
  children: ReactNode;
  type: "header" | "subheader" | "body";
  bold?: boolean;
  italics?: boolean;
  marginTop?: number;
  marginBottom?: number;
  size?: "xx-small" | "x-small" | "small" | "medium" | "large" | "x-large" | "xx-large" | "2em" | "3em" |"4em" | "6em";
};

const StyledText: FC<Props> = ({ type, children, bold, italics, marginTop, marginBottom, size }) => {
  return (
    <>
      {type === "body" && (
        <StyledBody bold={bold} italics={italics} marginTop={marginTop} marginBottom={marginBottom} size={size}>
          {children}
        </StyledBody>
      )}
      
      {type === "header" && 
      <StyledPrimary bold={bold} italics={italics} marginTop={marginTop} marginBottom={marginBottom} size={size}>
        {children}
      </StyledPrimary>}

      {type === "subheader" &&
       <StyledSecondary bold={bold} italics={italics} marginTop={marginTop} marginBottom={marginBottom} size={size}>
        {children}
      </StyledSecondary>}
    </>
  );
};

export default StyledText;