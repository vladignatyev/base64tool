---
width: full
navbar:
  sticky: false
  scroll_up: true
  animation: true
  transparent: false
  transparent_color: dark
header:
  layout: 1-1 # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_color: "#447ADE"
  color: light
  heading_size: medium
  height: full
  parallax: true
  container: small
  content:
    block: header-home
---
{% if site.template == 'base' %}

  {% include cards.html
    block="home-why"
    section_title="Features"
    section_header_align="center"
    section_size="large"
    section_background="muted"
    grid="1-3"
    gutter="large"
  %}


  {% include cards.html
    block="home-about"
    section_size="large"
    section_image="about-section.jpg"
    section_overlay="rgba(0, 0, 0, 0.5)"
    section_container="large"
    section_content_align="center"
    section_content_color="light"
    grid="1-3"
    gutter="large"
  %}


{% else %}


{% endif %}
