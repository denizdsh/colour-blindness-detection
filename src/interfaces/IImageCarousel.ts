import { StaticImageData } from "next/image";

export interface IImageCarouselProps {
  images: Array<ICarouselImage>;
  imageWidth?: number;
  imageHeight?: number;
  autoplaySec?: number;
}

export interface ICarouselImage {
  src: StaticImageData | string;
  alt: string;
  height?: number;
  width?: number;
}
