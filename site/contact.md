---
title: Contact Us Forms
width: xsmall
section: large
navbar:
  sticky: true
  scroll_up: true
  animation: true
  transparent: true
  transparent_color: light
header:
  layout: center # Options: left, center, 1-1, 1-2, 1-3 or 2-3
  background_image: header-10.jpeg
  background_overlay: "rgba(0, 0, 0, 0.6)"
  color: light
  header_size: xlarge
  heading_size: medium
  parallax: true
---

Example contact forms using free third party service [Formspree](https://formspree.io/). There are two form layouts with optional name and subject fields.
{: .uk-text-lead}

## Stacked basic form
{% include formspree.html email="my_name@gmail.com" redirect="/thanks/" name="false" subject="false" %}

## Horizontal layout with subject and name
{% include formspree.html email="my_name@gmail.com" redirect="/thanks/" name="true" subject="true" layout="horizontal" %}

