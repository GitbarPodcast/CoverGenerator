import { useState } from "react";
import styled, { css } from "styled-components";
import { theme } from "@gitbar-podcast/cover-generator-shared";
import Image from "./Image";
import SideText from "./SideText";

const direction: Record<theme.Variant, string> = {
  TL: `row-reverse`,
  TR: `row`,
  BL: `row-reverse`,
  BR: `row`,
} as const;

const Container = styled.div<{ theme: theme.Theme; variant: theme.Variant }>`
  height: 100%;
  position: relative;
  display: flex;
  padding: 4%;
  box-sizing: border-box;
  ${(props: { theme: theme.Theme; variant: theme.Variant }) => css`
    background: ${theme.THEMES[props.theme].BACKGROUND};
    flex-direction: ${direction[props.variant]};
  `};
`;

type CoverProps = {
  theme?: theme.Theme;
  image: string;
  name: string;
  surname: string;
  company: string;
  episodeNumber: number;
  variant?: theme.Variant;
};

const getRandomVariant = (name: string, surname: string): theme.Variant => {
  // assign the variant considering if the name is longer than the surname
  // in this case in this case dispose the element to put the name more
  // far from the oblique side
  const vNames = Object.keys(theme.VARIANTS) as theme.Variant[];
  const variants =
    name.length > surname.length
      ? [vNames[0], vNames[2]]
      : [vNames[1], vNames[3]];
  return variants[Math.floor(Math.random() * 2)];
};
const getRandomTheme = (): theme.Theme => {
  //todo: add check name surname length
  const themes = Object.keys(theme.THEMES) as theme.Theme[];
  return themes[Math.floor(Math.random() * themes.length)];
};

function Cover({
  theme,
  name,
  surname,
  company,
  episodeNumber,
  image,
  variant,
}: CoverProps) {
  const variantOrRandom = variant || getRandomVariant(name, surname);
  const themeOrRandom = theme || getRandomTheme();

  return (
    <Container theme={themeOrRandom} variant={variantOrRandom}>
      <Image theme={themeOrRandom} image={image} variant={variantOrRandom} />
      <SideText
        name={name}
        surname={surname}
        company={company}
        theme={themeOrRandom}
        episodeNumber={episodeNumber}
        variant={variantOrRandom}
      ></SideText>
    </Container>
  );
}

export default Cover;
