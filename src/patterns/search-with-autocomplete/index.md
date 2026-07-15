---
layout: sandbox
title: Search with Autocomplete
---

# Search with Autocomplete

Search with autocomplete provides suggestions as users type, helping them find content faster and reducing input errors.

## Basic Autocomplete Search

A search field with autocomplete suggestions.

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="autocomplete-search">Search</label>
  <input class="usa-input" id="autocomplete-search" name="autocomplete-search" type="search" placeholder="Search for services..." aria-autocomplete="list" aria-controls="autocomplete-list" aria-expanded="false">
  <button class="usa-button" type="submit">Search</button>
</div>
<ul class="usa-list usa-list--unstyled" id="autocomplete-list" role="listbox" aria-label="Search suggestions" style="border: 1px solid #dfe1e2; padding: 0; margin-top: 0; display: none;">
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Social Security benefits</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Social Security card replacement</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Social Security number changes</li>
</ul>

<div class="usa-alert usa-alert--info usa-alert--slim" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text"><strong>Tip:</strong> Type to see suggestions. Use arrow keys to navigate, Enter to select.</p>
  </div>
</div>

## Autocomplete with Categories

Search suggestions organized by category.

<div class="usa-search usa-search--big" role="search">
  <label class="usa-sr-only" for="category-search">Search</label>
  <input class="usa-input" id="category-search" name="category-search" type="search" placeholder="What are you looking for?" aria-autocomplete="list" aria-controls="category-list" aria-expanded="false">
  <button class="usa-button usa-button--big" type="submit">Search</button>
</div>
<ul class="usa-list usa-list--unstyled" id="category-list" role="listbox" aria-label="Search suggestions" style="border: 1px solid #dfe1e2; padding: 0; margin-top: 0; display: none;">
  <li style="padding: 0.5rem 1rem; background-color: #f0f0f0; font-weight: bold;">Services</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Apply for benefits</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Check application status</li>
  <li style="padding: 0.5rem 1rem; background-color: #f0f0f0; font-weight: bold;">Information</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Eligibility requirements</li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer;" tabindex="0">Required documents</li>
</ul>

## Autocomplete with Icons

Search suggestions with icons for visual context.

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="icon-search">Search agencies</label>
  <input class="usa-input" id="icon-search" name="icon-search" type="search" placeholder="Search agencies..." aria-autocomplete="list" aria-controls="icon-list" aria-expanded="false">
  <button class="usa-button" type="submit">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img"><use xlink:href="/assets/img/sprite.svg#search"></use></svg>
    <span class="usa-sr-only">Search</span>
  </button>
</div>
<ul class="usa-list usa-list--unstyled" id="icon-list" role="listbox" aria-label="Agency suggestions" style="border: 1px solid #dfe1e2; padding: 0; margin-top: 0; display: none;">
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer; display: flex; align-items: center;" tabindex="0">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img" style="margin-right: 0.5rem;"><use xlink:href="/assets/img/sprite.svg#building"></use></svg>
    General Services Administration
  </li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer; display: flex; align-items: center;" tabindex="0">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img" style="margin-right: 0.5rem;"><use xlink:href="/assets/img/sprite.svg#building"></use></svg>
    Department of Veterans Affairs
  </li>
  <li role="option" style="padding: 0.5rem 1rem; cursor: pointer; display: flex; align-items: center;" tabindex="0">
    <svg class="usa-icon" aria-hidden="true" focusable="false" role="img" style="margin-right: 0.5rem;"><use xlink:href="/assets/img/sprite.svg#building"></use></svg>
    Social Security Administration
  </li>
</ul>

## Autocomplete with Recent Searches

Search with history of recent queries.

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="recent-search">Search</label>
  <input class="usa-input" id="recent-search" name="recent-search" type="search" placeholder="Search...">
  <button class="usa-button" type="submit">Search</button>
</div>
<div class="usa-card usa-card--header-first margin-top-2">
  <div class="usa-card__container">
    <header class="usa-card__header">
      <h2 class="usa-card__heading">Recent searches</h2>
    </header>
    <div class="usa-card__body">
      <ul class="usa-list usa-list--unstyled">
        <li style="padding: 0.25rem 0;"><a href="#">passport renewal requirements</a></li>
        <li style="padding: 0.25rem 0;"><a href="#">federal holiday schedule</a></li>
        <li style="padding: 0.25rem 0;"><a href="#">tax filing deadline</a></li>
      </ul>
      <button class="usa-button usa-button--unstyled usa-text-small" type="button">Clear search history</button>
    </div>
  </div>
</div>

## Autocomplete with Loading State

A search field showing a loading indicator.

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="loading-search">Search</label>
  <input class="usa-input" id="loading-search" name="loading-search" type="search" placeholder="Searching..." aria-busy="true">
  <button class="usa-button" type="submit">Search</button>
</div>
<div class="usa-alert usa-alert--info usa-alert--slim margin-top-1" role="status">
  <div class="usa-alert__body">
    <p class="usa-alert__text">Loading suggestions...</p>
  </div>
</div>

## Autocomplete with No Results

A search state showing no matching suggestions.

<div class="usa-search" role="search">
  <label class="usa-sr-only" for="no-results-search">Search</label>
  <input class="usa-input" id="no-results-search" name="no-results-search" type="search" value="xyznonexistent">
  <button class="usa-button" type="submit">Search</button>
</div>
<div class="usa-card usa-card--header-first margin-top-2">
  <div class="usa-card__container">
    <div class="usa-card__body">
      <p>No suggestions found for "<strong>xyznonexistent</strong>"</p>
      <p class="usa-text-small">Try different keywords or check your spelling.</p>
    </div>
  </div>
</div>

## Search Results Page

A complete search results page with filtering.

<nav aria-label="Breadcrumb">
  <ol class="usa-breadcrumb">
    <li class="usa-breadcrumb__item">
      <a href="/">Home</a>
    </li>
    <li class="usa-breadcrumb__item usa-breadcrumb__item--current" aria-current="page">
      Search results
    </li>
  </ol>
</nav>

<h1>Search results for "benefits"</h1>
<p class="usa-text-secondary">Showing 1-10 of 247 results</p>

<div class="usa-search margin-bottom-4" role="search">
  <label class="usa-sr-only" for="results-search">Search</label>
  <input class="usa-input" id="results-search" name="results-search" type="search" value="benefits">
  <button class="usa-button" type="submit">Search</button>
</div>

<div class="grid-grid-row">
  <div class="grid-col-3">
    <h2 class="usa-heading usa-heading--sm">Filters</h2>
    <fieldset class="usa-fieldset">
      <legend class="usa-legend usa-legend--sm">Category</legend>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="filter-services" type="checkbox" name="filter" value="services" checked>
        <label class="usa-checkbox__label" for="filter-services">Services</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="filter-info" type="checkbox" name="filter" value="info" checked>
        <label class="usa-checkbox__label" for="filter-info">Information</label>
      </div>
      <div class="usa-checkbox">
        <input class="usa-checkbox__input" id="filter-forms" type="checkbox" name="filter" value="forms" checked>
        <label class="usa-checkbox__label" for="filter-forms">Forms</label>
      </div>
    </fieldset>
  </div>
  <div class="grid-col-9">
    <ul class="usa-list usa-list--unstyled">
      <li style="padding: 1rem 0; border-bottom: 1px solid #dfe1e2;">
        <h3><a href="#">Apply for Social Security Benefits</a></h3>
        <p class="usa-text-small usa-text-secondary">Services | Social Security Administration</p>
        <p>Learn how to apply for retirement, disability, and survivor benefits online or at your local office.</p>
      </li>
      <li style="padding: 1rem 0; border-bottom: 1px solid #dfe1e2;">
        <h3><a href="#">Eligibility Requirements</a></h3>
        <p class="usa-text-small usa-text-secondary">Information | Benefits.gov</p>
        <p>Check if you qualify for federal benefits programs based on your income, age, and other factors.</p>
      </li>
      <li style="padding: 1rem 0; border-bottom: 1px solid #dfe1e2;">
        <h3><a href="#">Benefits Application Form</a></h3>
        <p class="usa-text-small usa-text-secondary">Forms | GSA</p>
        <p>Download and complete the benefits application form for submission to your agency.</p>
      </li>
    </ul>
    <nav aria-label="Search results pagination">
      <ul class="usa-pagination">
        <li class="usa-pagination__item usa-pagination__item--previous">
          <a href="#" class="usa-pagination__link">Previous</a>
        </li>
        <li class="usa-pagination__item usa-pagination__item--active">
          <a href="#" class="usa-pagination__link" aria-current="page">1</a>
        </li>
        <li class="usa-pagination__item">
          <a href="#" class="usa-pagination__link">2</a>
        </li>
        <li class="usa-pagination__item">
          <a href="#" class="usa-pagination__link">3</a>
        </li>
        <li class="usa-pagination__item usa-pagination__item--next">
          <a href="#" class="usa-pagination__link">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</div>

## Accessibility Considerations

- Use `aria-autocomplete="list"` on the input field
- Provide `aria-controls` pointing to the suggestions list
- Update `aria-expanded` when suggestions are visible
- Use `role="option"` for suggestion items
- Announce loading states with `aria-busy`
- Announce no-results states to screen readers
- Support keyboard navigation (arrow keys, Enter, Escape)
