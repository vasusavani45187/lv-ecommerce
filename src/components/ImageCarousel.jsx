import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

const images = [
  "https://cdn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-runway-show.jpg",
  "https://cdn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/lv-craftsmanship-atelier.jpg",
  "https://cdn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/lv-fashion-history.jpg",
  "https://cdn.louisvuitton.com/images/is/image/lv/1/PP_VP_L/lv-luxury-store.jpg"
];

const ImageCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <Box sx={{ my: 6 }}>
      <Slider {...settings}>
        {images.map((src, index) => (
          <Box key={index} component="img" src={src} alt={`slide-${index}`}
            sx={{ width: '100%', borderRadius: 2, maxHeight: 400, objectFit: 'cover' }}
          />
        ))}
      </Slider>
    </Box>
  );
};

export default ImageCarousel;
