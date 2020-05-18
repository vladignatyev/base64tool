---
width: full
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: 1-1 # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: Working-Space.jpg
  background_video: Working-Space.mp4
  background_overlay: "linear-gradient(to left top,rgba(218, 91, 197, 0.8) 0%,rgba(151, 27, 191, 0.8) 30%,rgba(2, 8, 212, 0.8) 80%)"
  color: light
  heading_size: medium
  height: full
  parallax: true
  container: small
  content:
    block: header-home
---

[comment]: # (This actually is the most platform independent comment)

{% if site.template == 'base' %}

  {% include cards.html
    block="feature"
    section_background="default"
    section_size="large"
    section_title="The first multipurpose Jekyll theme"
    section_header_align="center"
    section_content_align="center"
    media="top"
    grid="1-4"
    gutter="large"
    icon_color="#1B33BF"
  %}

  {% include cards.html
    block="home-why"
    section_title="Features"
    section_header_align="center"
    section_size="large"
    section_background="muted"
    grid="1-3"
    gutter="large"
  %}

  {% include cta.html
    section_size="large"
    section_image="header-9.jpeg"
    section_overlay="rgba(0, 0, 0, 0.5)"
    section_container="small"
    section_content_align="center"
    section_content_color="light"
    layout="1"
    block="cta-4"
  %}

{% else %}


{% endif %}
