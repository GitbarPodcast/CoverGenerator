import styled, { css } from "styled-components";
import { THEMES, Variant } from "../theme";
import type { Theme } from "../theme";
import { useElementSize } from "usehooks-ts";
import { useLayoutEffect } from "react";

const align: Record<Variant, string> = {
  TL: `right`,
  TR: `right`,
  BL: `left`,
  BR: `left`,
} as const;

const episodeNumberAlign: Record<Variant, string> = {
  TL: `left`,
  TR: `right`,
  BL: `left`,
  BR: `right`,
} as const;

const direction: Record<Variant, string> = {
  TL: `column`,
  TR: `column`,
  BL: `column-reverse`,
  BR: `column-reverse`,
} as const;

const Container = styled.div<{ variant: Variant }>`
  display: flex;
  flex-direction: column-reverse;
  ${({ variant }) => css`
    flex-direction: ${direction[variant]};
  `};
  height: 100%;
`;

const TextContainer = styled.div<{ variant: Variant }>`
  writing-mode: vertical-rl;
  text-orientation: mixed;
  flex-grow: 1;
  flex-shrink: 1;
  height: 100%;
  transform-origin: center center;
  transform: rotate(-180deg);
  ${({ variant }) => css`
    text-align: ${align[variant]};
  `};
`;
const Name = styled.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({ theme, fontSize }: { theme: Theme; fontSize: number }) => css`
    line-height: ${fontSize * 0.8}px;
    font-size: ${fontSize}px;
    color: ${THEMES[theme].TEXT};
  `};
`;
const Surname = styled.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({ theme, fontSize }: { theme: Theme; fontSize: number }) => css`
    line-height: ${fontSize * 0.8}px;
    font-size: ${fontSize}px;
    color: ${THEMES[theme].SECONDARY_TEXT};
  `};
`;
const Company = styled.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  color: #f8fafc;
  ${({ theme, fontSize }: { theme: Theme; fontSize: number }) => css`
    line-height: ${fontSize * 1.6}px;
    font-size: ${fontSize}px;
    color: ${THEMES[theme].TERTIARY_TEXT};
  `};
`;

const EpisodeNumber = styled.div`
  font-family: outfit;
  font-weight: bold;
  text-transform: uppercase;
  ${({
    theme,
    fontSize,
    variant,
  }: {
    theme: Theme;
    fontSize: number;
    variant: Variant;
  }) => css`
    text-align: ${episodeNumberAlign[variant]};
    font-size: ${fontSize}px;
    color: ${THEMES[theme].TERTIARY_TEXT};
  `};
`;

const MINIMAL_TEXT_LEN = 10; //used to control the size when text is too short
//if I divide the height with the num of characters, I get the font size in px, but it is smaller than expected. I need to multiply it by a factor to get the correct font size
const FONTSIZE_FIX_FACTOR = 1.3;
const FONTSIZE_COMPANY_FACTOR = 0.3;
const FONTSIZE_EPISODE_NUMBER_FACTOR = 0.8;

function SideText({
  name,
  surname,
  company,
  theme,
  episodeNumber,
  variant,
}: {
  name: string;
  surname: string;
  company: string;
  theme: Theme;
  episodeNumber: number;
  variant: Variant;
}) {
  //Calculate the font size
  const [containerRef, { width, height }] = useElementSize();
  const fontSize = Math.round(
    (height / Math.max(name.length, surname.length, MINIMAL_TEXT_LEN)) *
      FONTSIZE_FIX_FACTOR
  );
  const companyFontSize = fontSize * FONTSIZE_COMPANY_FACTOR;
  const episodeFontSize =
    Math.round(width / Math.max(String(episodeNumber).length)) *
    FONTSIZE_EPISODE_NUMBER_FACTOR;

  useLayoutEffect(() => {
    //after font calculations and rendering trigger a resize to allow image calculation
    // it solve the problem of the image not being correctly resized on the page loading
    window.dispatchEvent(new Event("resize"));
  }, [width, height]);

  return (
    <Container ref={containerRef} variant={variant}>
      <TextContainer variant={variant}>
        <Name theme={theme} fontSize={fontSize}>
          {name}
        </Name>
        <Surname theme={theme} fontSize={fontSize}>
          {surname}
        </Surname>
        <Company
          theme={theme}
          fontSize={companyFontSize}
        >{`<${company}>`}</Company>
      </TextContainer>
      <EpisodeNumber theme={theme} fontSize={episodeFontSize} variant={variant}>
        #{episodeNumber}
      </EpisodeNumber>
    </Container>
  );
}

export default SideText;
