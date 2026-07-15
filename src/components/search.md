---
layout: sandbox
title: Search
---

# Search

The search component provides a search input for finding content across the site.

## Default Search

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="search-default">Search</label>
  <input class="usa-input" id="search-default" type="search" name="search">
  <button class="usa-button" type="submit">Search</button>
</div>

## Search with Custom Label

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="search-label">Search site</label>
  <input class="usa-input" id="search-label" type="search" name="search-label" placeholder="Search this site...">
  <button class="usa-button" type="submit">Search</button>
</div>

## Big Search

<div class="usa-search usa-search--big" role="search">
  <label class="usa-sr-only" for="search-big">Search</label>
  <input class="usa-input" id="search-big" type="search" name="search-big">
  <button class="usa-button usa-button--big" type="submit">Search</button>
</div>

## Search with Heading

<h2 class="usa-heading">Search the site</h2>
<div class="usa-search" role="search">
  <label class="usa-sr-only" for="search-heading">Search</label>
  <input class="usa-input" id="search-heading" type="search" name="search-heading" placeholder="Enter search terms">
  <button class="usa-button" type="submit">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#search"></use></svg>
    <span class="usa-sr-only">Search</span>
  </button>
</div>
