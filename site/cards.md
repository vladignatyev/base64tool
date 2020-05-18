---
title: All about cards
subtitle: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: left # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-12.jpg
  background_overlay: "rgba(51, 30, 0, 0.65)"
  color: light
  header_size: xlarge
  heading_size: large
  height: full
---

{% include cards.html 
  block="card-media-12" 
  media="left" 
  section_size="large"
  section_background="default"
  section_title="Cards with images"
  section_header_align="center"
  card_style="default"
%}

{% include cards.html 
  block="card-media-11" 
  media="right" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
%}

{% include cards.html 
  block="card-media-21" 
  media="left" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
  card_style="secondary"
%}

{% include cards.html 
  block="card-media-22" 
  media="right" 
  section_size="large"
  section_padding_remove="top"
  section_background="default"
  card_style="primary"
%}

{% include cards.html 
  block="card-media" 
  media="top" 
  section_size="large"
  section_padding_remove="top"
  section_container="expand"
  section_background="default"
  card_style="default"
  section_content_align="center"
%}

{% include cards.html 
  block="card-media-1" 
  media="top" 
  section_size="large"
  section_padding_remove="top"
  section_container="small"
  section_background="default"
  card_style="secondary"
%}

{% include cards.html 
  block="card-media-2" 
  media="top" 
  section_size="large"
  section_padding_remove="top"
  section_container="xsmall"
  section_background="default"
  card_style="primary"
  section_content_align="center"
%}

{% include cards.html 
  block="feature-1" 
  media="top" 
  section_size="large"
  section_title="Cards with SVG icons"
  section_header_align="center"
  section_background="muted"
  section_content_align="center"
  grid="1-4"
%}

{% include cards.html 
  block="feature-2" 
  media="top" 
  section_size="large"
  section_padding_remove="top"
  section_background="muted"
  section_content_align="center"
  card_style="default"
  grid="1-4"
%}

{% include cards.html 
  block="feature-3" 
  media="left" 
  section_size="large"
  section_padding_remove="top"
  section_background="muted"
  card_style="secondary"
  grid="1-2"
%}

{% include cards.html 
  block="feature-4" 
  media="right" 
  section_size="large"
  section_padding_remove="top"
  section_background="muted"
  section_content_align="right"
  card_style="primary"
  grid="1-2"
%}

{% include slider.html 
  block="feature" 
  media="top" 
  section_background="default"
  section_size="large"
  section_header_align="center" 
  section_title="Cards in slider" 
  section_content_align="center"
  autoplay="true"
  sets="true"
  grid="1-4"
  navigation="outside"
%}

{% include slider.html 
  section_background="default"
  block="card-media" 
  media="top" 
  section_size="large"
  section_padding_remove="top"
  section_content_align="center"
  section_container="small"
  card_style="default"
  navigation="outside"
  grid="1-2"
%}

{% include slider.html 
  block="feature" 
  media="left" 
  section_background="default"
  section_size="large"
  section_padding_remove="top"
  card_style="secondary"
  grid="1-2"
%}

{% include cards.html 
  block="pricing" 
  section_title="Pricing Cards" 
  section_header_align="center"
  section_size="large"
  section_container="small"
  section_background="muted" 
  section_content_align="center"
  card_type="pricing"
%}

{% include cards.html 
  block="pricing" 
  section_size="large"
  section_padding_remove="top"
  section_background="muted" 
  section_content_align="center"
  card_style="default"
  card_type="pricing"
%}

{% include cards.html 
  block="pricing" 
  section_size="large"
  section_padding_remove="top"
  section_background="muted" 
  section_content_align="center"
  card_style="secondary"
  card_type="pricing"
%}

