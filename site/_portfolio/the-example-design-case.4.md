---
title: Zürich
subtitle: Lorem ipsum dolor sit amet, consetetur sadipscing tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
image: portfolio-4-thumb.jpg
width: full
topics: [Switzerland]
navbar:
  sticky: false
  transparent: true
  transparent_color: light
header:
  layout: center # Options: center 1-2 or 2-3
  background_image: portfolio-4-header.jpg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: xlarge
  parallax: true
---

{% include block.html 
  block="content-post"
  section_size="medium"
  section_container="xsmall"
  section_header_align="center"
  section_title="The challenge"
  block_title="false"
%}

{% include gallery.html 
	grid="1-2"
	gallery="portfolio-set-1"
	caption="true"
	lightbox="true"
  section_size="medium"
  section_padding_remove="top"
%}

{% include block.html 
  block="content-post2"
  section_size="medium"
  section_padding_remove="top"
  section_container="xsmall"
  section_header_align="center"
  section_title="The solution"
  block_title="false"
%}

{% include image.html 
	src="portfolio-4-header.jpg"
  alt="Some alt title"
  section_size="medium"
  section_padding_remove="top"
  section_container="small"
%}