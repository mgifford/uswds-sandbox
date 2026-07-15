---
layout: sandbox
title: Side Navigation
---

# Side Navigation

Side navigation provides a secondary navigation pattern typically used in documentation or multi-section pages.

## Default Side Navigation

<div class="grid-row grid-gap">
  <div class="grid-col-3">
    <nav aria-label="Side navigation">
      <ul class="usa-sidenav">
        <li class="usa-sidenav__item">
          <a href="#">Parent link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#" class="usa-current">Current page</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="#">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="#">Child link</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="#" class="usa-current">Child link (current)</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Parent link</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Parent link</a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="grid-col-9">
    <h2>Page content</h2>
    <p>This is the main content area alongside the side navigation.</p>
  </div>
</div>

## Side Navigation with Multiple Levels

<nav aria-label="Multi-level side navigation">
  <ul class="usa-sidenav">
    <li class="usa-sidenav__item">
      <a href="#">Getting started</a>
    </li>
    <li class="usa-sidenav__item">
      <a href="#">Components</a>
      <ul class="usa-sidenav__sublist">
        <li class="usa-sidenav__item">
          <a href="#">Buttons</a>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Cards</a>
          <ul class="usa-sidenav__sublist">
            <li class="usa-sidenav__item">
              <a href="#">Default card</a>
            </li>
            <li class="usa-sidenav__item">
              <a href="#">Media card</a>
            </li>
          </ul>
        </li>
        <li class="usa-sidenav__item">
          <a href="#">Forms</a>
        </li>
      </ul>
    </li>
    <li class="usa-sidenav__item">
      <a href="#">Design tokens</a>
    </li>
  </ul>
</nav>
