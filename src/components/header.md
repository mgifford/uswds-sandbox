---
layout: sandbox
title: Header
---

# Header

The header provides primary website navigation and agency identity.

## Basic Header

<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="basic-logo">
        <a href="#" class="usa-logo__text">
          Agency Name
        </a>
      </div>
      <button class="usa-menu-btn">Menu</button>
    </div>
    <nav class="usa-nav" aria-label="Primary navigation">
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="basic-nav-1">
            Section
          </button>
          <ul id="basic-nav-1" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item"><a href="#">Subsection one</a></li>
            <li class="usa-nav__submenu-item"><a href="#">Subsection two</a></li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <a href="#" class="usa-nav__link">Page title</a>
        </li>
        <li class="usa-nav__primary-item">
          <a href="#" class="usa-nav__link">Another page</a>
        </li>
      </ul>
    </nav>
  </div>
</header>

## Extended Header with Title

<header class="usa-header usa-header--extended">
  <div class="usa-navbar">
    <div class="usa-logo" id="extended-logo">
      <a href="#" class="usa-logo__text">
        Agency Name
      </a>
    </div>
    <button class="usa-menu-btn">Menu</button>
  </div>
  <nav class="usa-nav" aria-label="Primary navigation">
    <div class="usa-nav-container">
      <ul class="usa-nav__primary usa-accordion">
        <li class="usa-nav__primary-item">
          <button class="usa-accordion__button usa-nav__link" aria-expanded="false" aria-controls="ext-nav-1">
            Section
          </button>
          <ul id="ext-nav-1" class="usa-nav__submenu">
            <li class="usa-nav__submenu-item"><a href="#">Subsection one</a></li>
            <li class="usa-nav__submenu-item"><a href="#">Subsection two</a></li>
            <li class="usa-nav__submenu-item"><a href="#">Subsection three</a></li>
          </ul>
        </li>
        <li class="usa-nav__primary-item">
          <a href="#" class="usa-nav__link">Page title</a>
        </li>
        <li class="usa-nav__primary-item">
          <a href="#" class="usa-nav__link">Another page</a>
        </li>
      </ul>
      <div class="usa-search" role="search">
        <label class="usa-sr-only" for="extended-search">Search</label>
        <input class="usa-input" id="extended-search" type="search" name="search">
        <button class="usa-button" type="submit">Search</button>
      </div>
    </div>
  </nav>
</header>

## Basic Header with Title

<header class="usa-header usa-header--basic">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo" id="basic-title-logo">
        <a href="#" class="usa-logo__text">
          Agency Name
        </a>
      </div>
      <button class="usa-menu-btn">Menu</button>
    </div>
    <div class="usa-header__primary-container">
      <div class="usa-header__primary">
        <div class="usa-header__primary-left">
          <nav class="usa-nav" aria-label="Primary navigation">
            <ul class="usa-nav__primary usa-accordion">
              <li class="usa-nav__primary-item">
                <a href="#" class="usa-nav__link">Page one</a>
              </li>
              <li class="usa-nav__primary-item">
                <a href="#" class="usa-nav__link">Page two</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</header>
