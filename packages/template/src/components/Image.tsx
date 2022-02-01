import styled, { css } from "styled-components";
import { roundCorners } from "svg-round-corners";

import { theme } from "@gitbar-podcast/cover-generator-shared";

import bg from "../assets/bg.png";
import { useElementSize } from "usehooks-ts";
import { useLayoutEffect } from "react";

interface ImageProps {
  theme: theme.Theme;
  image: string;
  variant: theme.Variant;
}

const ImageComponent = styled.div`
  height: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  ${(props: { theme: theme.Theme; image: string; clipPath: string }) => css`
    clip-path: path("${props.clipPath}");
    background: url(${props.image}), url(${bg}),
      ${theme.THEMES[props.theme].IMAGE_BG};
  `}
  background-blend-mode: luminosity, screen, normal;
  background-size: cover, cover, cover;
  background-position: center, center, center;
  box-sizing: border-box;
`;

function Image({ theme, image, variant }: ImageProps) {
  const [imageRef, { width, height }] = useElementSize();

  const roundage = Math.min(width, height) * 0.1;
  const subtractor = Math.round(width * 0.18);

  const paths: Record<theme.Variant, string> = {
    TL: `M ${subtractor} 0 L ${width} 0 L ${width} ${height} L 0 ${height} Z`,
    TR: `M 0 0 L ${width - subtractor} 0 L ${width} ${height} L 0 ${height} Z`,
    BL: `M 0 0 L ${width} 0 L ${width} ${height} L ${subtractor} ${height} Z`,
    BR: `M 0 0 L ${width} 0 L ${width - subtractor} ${height} L 0 ${height} Z`,
  } as const;

  const clipPath = roundCorners(paths[variant], roundage, 0).path;
  useLayoutEffect(() => {
    //after font calculations and rendering trigger a resize to allow image calculation
    // it solve the problem of the image not being correctly resized on the page loading
    window.dispatchEvent(new Event("resize"));
  }, [width, height]);

  return (
    <ImageComponent
      ref={imageRef}
      theme={theme}
      image={image}
      clipPath={clipPath}
    ></ImageComponent>
  );
}
export default Image;
