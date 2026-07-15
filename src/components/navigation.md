---
layout: sandbox
title: Navigation
---

# Navigation

USWDS navigation components help users find content and navigate through a website.

## Primary Navigation

<nav aria-label="Primary">
  <ul class="usa-nav__primary usa-accordion">
    <li class="usa-nav__primary-item">
      <button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="nav-1">
        Menu item
      </button>
      <ul id="nav-1" class="usa-nav__submenu">
        <li class="usa-nav__submenu-item"><a href="#">Submenu link</a></li>
        <li class="usa-nav__submenu-item"><a href="#">Another submenu link</a></li>
        <li class="usa-nav__submenu-item">
          <button class="usa-accordion__button usa-nav__link usa-nav__link--next" aria-expanded="false" aria-controls="nav-1-1">
            Nested submenu
          </button>
          <ul id="nav-1-1" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item"><a href="#">Nested link</a></li>
            <li class="usa-nav__submenu-item"><a href="#">Another nested link</a></li>
          </ul>
        </li>
      </ul>
    </li>
    <li class="usa-nav__primary-item">
      <a href="#" class="usa-nav__link">Another item</a>
    </li>
    <li class="usa-nav__primary-item">
      <a href="#" class="usa-nav__link">Simple link</a>
    </li>
  </ul>
</nav>

## Footer Navigation

<nav aria-label="Footer navigation">
  <ul class="usa-footer__primary-list">
    <li class="grid-col-6 tablet:grid-col-auto">
      <a href="#">Primary link</a>
    </li>
    <li class="grid-col-6 tablet:grid-col-auto">
      <a href="#">Another primary link</a>
    </li>
    <li class="grid-col-6 tablet:grid-col-auto">
      <a href="#">One more primary link</a>
    </li>
  </ul>
</nav>

## Sub Navigation

<nav aria-label="Sub navigation">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="#" class="usa-current">Current page</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#">Link</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#">Another link</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="#">Nested link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Another nested link</a>
        </li>
      </ul>
    </li>
  </ul>
</nav>

## Breadcrumb Navigation

<nav aria-label="Breadcrumb">
  <ol class="usa-breadcrumb">
    <li class="usa-breadcrumb__item"><a href="#">Home</a></li>
    <li class="usa-breadcrumb__item"><a href="#">Section</a></li>
    <li class="usa-breadcrumb__item usa-breadcrumb__item--current" aria-current="page">Current page</li>
  </ol>
</nav>
