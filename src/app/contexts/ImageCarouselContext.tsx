"use client";

import { IImageCarouselProps } from "@interfaces/IImageCarousel";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export const IMAGE_CAROUSEL_DEFAULT_IMAGE_HEIGHT = 400;
export const IMAGE_CAROUSEL_DEFAULT_IMAGE_WIDTH = undefined;

export const CarouselContext = createContext(
  {} as ReturnType<typeof useImageCarouselValue>
);

export const useImageCarousel = () => useContext(CarouselContext);

export default function ImageCarouselProvider(
  props: IImageCarouselProps & PropsWithChildren
) {
  const value = useImageCarouselValue(props);

  useEffect(() => {
    let autoplayInterval: ReturnType<typeof setInterval>;

    if (props.autoplaySec) {
      autoplayInterval = setInterval(() => {
        value.changeImageHandler((p) => p + 1)();
      }, props.autoplaySec * 1000);
    }
    return () => {
      clearInterval(autoplayInterval);
    };
  }, [value, value.page, props.autoplaySec]); // value.page => refresh timer on manual change

  return (
    <CarouselContext.Provider value={value}>
      {props.children}
    </CarouselContext.Provider>
  );
}

function useImageCarouselValue(props: IImageCarouselProps) {
  const { images, imageHeight, imageWidth } = props;

  const [page, setPage] = useState(0);

  const imagesCount = props.images.length;

  const changeImageHandler = (
    selectedImage: number | ((current: number) => number)
  ) => {
    return () => {
      setPage((page) => {
        if (typeof selectedImage !== "number") {
          selectedImage = selectedImage(page);
        }

        if (selectedImage < 0) {
          return imagesCount - 1;
        }

        if (selectedImage >= imagesCount) {
          return 0;
        }

        return selectedImage;
      });
    };
  };

  return {
    images,
    imageHeight: imageHeight || IMAGE_CAROUSEL_DEFAULT_IMAGE_HEIGHT,
    imageWidth: imageWidth || IMAGE_CAROUSEL_DEFAULT_IMAGE_WIDTH,
    imagesCount,
    page,
    changeImageHandler,
  };
}
