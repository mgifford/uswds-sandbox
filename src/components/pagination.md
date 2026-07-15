---
layout: sandbox
title: Pagination
---

# Pagination

Pagination provides navigation for multi-page content, allowing users to move between pages.

## Default Pagination

<nav aria-label="Pagination">
  <ul class="usa-pagination">
    <li class="usa-pagination__item usa-pagination__item--prev">
      <a href="#" class="usa-pagination__link usa-pagination__link--prev" aria-label="Previous page">
        <span class="usa-pagination__link-text">Previous</span>
      </a>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 1">1</a>
    </li>
    <li class="usa-pagination__item">
      <span class="usa-pagination__ellipsis">&hellip;</span>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 2">2</a>
    </li>
    <li class="usa-pagination__item usa-pagination__item--current">
      <a href="#" class="usa-pagination__link usa-pagination__link--current" aria-label="Page 3" aria-current="page">3</a>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 4">4</a>
    </li>
    <li class="usa-pagination__item">
      <span class="usa-pagination__ellipsis">&hellip;</span>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 10">10</a>
    </li>
    <li class="usa-pagination__item usa-pagination__item--next">
      <a href="#" class="usa-pagination__link usa-pagination__link--next" aria-label="Next page">
        <span class="usa-pagination__link-text">Next</span>
      </a>
    </li>
  </ul>
</nav>

## Pagination with Icons

<nav aria-label="Pagination">
  <ul class="usa-pagination">
    <li class="usa-pagination__item usa-pagination__item--prev">
      <a href="#" class="usa-pagination__link usa-pagination__link--prev" aria-label="Previous page">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#arrow_back"></use></svg>
        <span class="usa-pagination__link-text">Previous</span>
      </a>
    </li>
    <li class="usa-pagination__item usa-pagination__item--current">
      <a href="#" class="usa-pagination__link usa-pagination__link--current" aria-label="Page 1" aria-current="page">1</a>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 2">2</a>
    </li>
    <li class="usa-pagination__item">
      <a href="#" class="usa-pagination__link" aria-label="Page 3">3</a>
    </li>
    <li class="usa-pagination__item usa-pagination__item--next">
      <a href="#" class="usa-pagination__link usa-pagination__link--next" aria-label="Next page">
        <span class="usa-pagination__link-text">Next</span>
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#arrow_forward"></use></svg>
      </a>
    </li>
  </ul>
</nav>

## Compact Pagination

<nav aria-label="Pagination">
  <ul class="usa-pagination usa-pagination--compact">
    <li class="usa-pagination__item usa-pagination__item--prev">
      <a href="#" class="usa-pagination__link usa-pagination__link--prev" aria-label="Previous page">
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#arrow_back"></use></svg>
        <span class="usa-pagination__link-text">Previous</span>
      </a>
    </li>
    <li class="usa-pagination__item usa-pagination__item--current">
      <a href="#" class="usa-pagination__link usa-pagination__link--current" aria-label="Page 1 of 10 pages" aria-current="page">1</a>
    </li>
    <li class="usa-pagination__item">
      <span class="usa-pagination__page-count">of 10</span>
    </li>
    <li class="usa-pagination__item usa-pagination__item--next">
      <a href="#" class="usa-pagination__link usa-pagination__link--next" aria-label="Next page">
        <span class="usa-pagination__link-text">Next</span>
        <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#arrow_forward"></use></svg>
      </a>
    </li>
  </ul>
</nav>
