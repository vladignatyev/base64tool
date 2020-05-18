---
title: Map default style
width: full
navbar:
  transparent: true
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-11.jpeg
  background_overlay: "rgba(0, 0, 0, 0.6)"
  color: light
  header_size: xlarge
  heading_size: large
  parallax: true
---

{% include block.html 
  block="content-post2"
  section_container="xsmall"
  section_size="medium"
  block_title="false"
%}

{% include map.html 
  latitude="19.419897" 
  longitude="-99.164967" 
  zoom="12" 
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
  height="large"
%}

{% include block.html 
  block="content-post2"
  block_title="false"
  section_container="xsmall"
  section_size="medium"
  section_padding_remove="top"
%}