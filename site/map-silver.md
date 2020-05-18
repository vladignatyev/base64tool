---
title: Map silver style
subtitle: Siver themed Google map covering whole section
width: full
navbar:
  transparent: true
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-11.jpeg
  background_overlay: "rgba(0, 0, 0, 0.5)"
  color: light
  header_size: large
  heading_size: medium
  parallax: true
---

{% include map.html 
  latitude="19.419897" 
  longitude="-99.164967" 
  zoom="12" 
  style="silver" 
  section_container="expand"
%}