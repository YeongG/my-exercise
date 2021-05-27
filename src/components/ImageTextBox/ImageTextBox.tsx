import { FC, useState } from "react";
import { weightIcon } from "../../assets";
import * as S from "./styles";

interface Props {
  src: string;
  text: string;
}

const ImageTextBox: FC<Props> = ({ text, src }) => {
  return (
    <S.Container>
      <S.ImageItem src={src} />
      <S.HoverText>{text}</S.HoverText>
    </S.Container>
  );
};

export default ImageTextBox;
