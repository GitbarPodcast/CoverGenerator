import { useState } from "react";
import styled, { css } from "styled-components";
import { THEMES, VARIANTS } from "../theme";
import type { Theme, Variant } from "../theme";
import Image from "./Image";
import SideText from "./SideText";

const direction: Record<Variant, string> = {
  TL: `row-reverse`,
  TR: `row`,
  BL: `row-reverse`,
  BR: `row`,
} as const;

const Container = styled.div<{ theme: Theme; variant: Variant }>`
  height: 100%;
  position: relative;
  display: flex;
  padding: 4%;
  box-sizing: border-box;
  ${({ theme, variant }: { theme: Theme; variant: Variant }) => css`
    background: ${THEMES[theme].BACKGROUND};
    flex-direction: ${direction[variant]};
  `};
`;

type CoverProps = {
  theme?: Theme;
  image: string;
  name: string;
  surname: string;
  company: string;
  episodeNumber: number;
  variant?: Variant;
};

const getRandomVariant = (name: string, surname: string): Variant => {
  // assign the variant considering if the name is longer than the surname
  // in this case in this case dispose the element to put the name more
  // far from the oblique side
  const vNames = Object.keys(VARIANTS) as Variant[];
  const variants =
    name.length > surname.length
      ? [vNames[0], vNames[2]]
      : [vNames[1], vNames[3]];
  return variants[Math.floor(Math.random() * 2)];
};
const getRandomTheme = (): Theme => {
  //todo: add check name surname length
  const themes = Object.keys(THEMES) as Theme[];
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
