---
layout: sandbox
title: List
---

# List

Lists organize related items into a sequential or non-sequential format.

## Unordered List

<ul class="usa-list">
  <li>First list item</li>
  <li>Second list item</li>
  <li>Third list item</li>
</ul>

## Ordered List

<ol class="usa-list">
  <li>First step</li>
  <li>Second step</li>
  <li>Third step</li>
</ol>

## Unstyled List

<ul class="usa-list usa-list--unstyled">
  <li>Unstyled item one</li>
  <li>Unstyled item two</li>
  <li>Unstyled item three</li>
</ul>

## Nested List

<ul class="usa-list">
  <li>First item
    <ul class="usa-list">
      <li>Nested item A</li>
      <li>Nested item B</li>
    </ul>
  </li>
  <li>Second item</li>
  <li>Third item</li>
</ul>

## Two-Column List

<div class="grid-row grid-gap">
  <div class="grid-col-6">
    <ul class="usa-list">
      <li>Column one item</li>
      <li>Column one item</li>
      <li>Column one item</li>
    </ul>
  </div>
  <div class="grid-col-6">
    <ul class="usa-list">
      <li>Column two item</li>
      <li>Column two item</li>
      <li>Column two item</li>
    </ul>
  </div>
</div>

## Checklist

<ul class="usa-list usa-list--unstyled">
  <li class="padding-y-05">
    <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    Completed task
  </li>
  <li class="padding-y-05">
    <svg class="usa-icon text-green" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#check_circle"></use></svg>
    Another completed task
  </li>
  <li class="padding-y-05">
    <svg class="usa-icon text-base-light" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#radio_button_unchecked"></use></svg>
    Pending task
  </li>
</ul>
