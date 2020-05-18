---
title: Media
subtitle: Show off your images and videos, the options and possibilities are endless.
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-3.jpeg
  background_overlay: "rgba(0, 0, 0, 0.45)"
  color: light
  header_size: xlarge
  heading_size: large
  parallax: true
---

{% include block.html 
  block="content-image"
  block_title="false"
  section_size="large"
  section_title="Images aligned in content"
  section_padding_remove="bottom"
  section_container="xsmall"
  section_header_align="center"
%}

{% include image.html 
	src="alexander-read.jpg"
  alt="Alt for image"
  section_size="large"
  section_padding_remove="bottom"
  section_title="Image in lightbox"
  section_header_align="center"
  section_container="small"
  lightbox="true"
%}

{% include gallery.html 
  section_size="large"
  section_padding_remove="bottom"
  section_title="Image Gallery Lightbox" 
  section_header_align="center"
  grid="1-3"
  gallery="gallery-1"
  caption="true"
  lightbox="true"
%}

{% include slider.html 
  section_size="large"
  section_padding_remove="bottom"
  section_title="Image Slider" 
  section_header_align="center"
  section_container="xsmall"
  color="light"
  block="slider-home" 
  navigation="outside"
  grid="1-1"
  gutter="collapse"
%}

{% include slider.html 
  block="slider-home" 
  section_size="large"
  section_padding_remove="bottom"
  section_content_align="center"
  display_title="false"
  autoplay="true"
  sets="true"
  grid="1-3"
  gutter="large"
  navigation="outside"
  dotnav="true"
%}

{% include instagram.html 
  section_size="large"
  section_padding_remove="bottom"
  section_container="default"
  section_title="Instagram Images"
  section_header_align="center"
  grid="1-4" 
  count="8" 
  gutter="small"
%}

{% include videos.html 
  block="video-home" 
  grid="1-3" 
  section_size="large"
  section_header_align="center"
  section_padding_remove="bottom"
  section_title="Videos in Lightbox" 
  card_style="default"
%}

{% include block.html 
  block="videos"
  block_title="false"
  section_size="large"
  section_title="Responsive videos" 
  section_container="xsmall"
  section_header_align="center"
%}
