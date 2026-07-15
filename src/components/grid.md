---
layout: sandbox
title: Grid
---

# Grid

The USWDS grid system is a 12-column responsive layout system that provides consistent spacing and alignment.

## 12-Column Grid

<div class="grid-container">
  <div class="grid-row">
    <div class="grid-col-12 bg-base-light padding-1 text-center">12</div>
  </div>
</div>

## Equal Columns

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col-4 bg-base-light padding-1 text-center">4</div>
    <div class="grid-col-4 bg-base-lighter padding-1 text-center">4</div>
    <div class="grid-col-4 bg-base-light padding-1 text-center">4</div>
  </div>
</div>

## Unequal Columns

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col-8 bg-base-light padding-1 text-center">8</div>
    <div class="grid-col-4 bg-base-lighter padding-1 text-center">4</div>
  </div>
</div>

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col-3 bg-base-light padding-1 text-center">3</div>
    <div class="grid-col-6 bg-base-lighter padding-1 text-center">6</div>
    <div class="grid-col-3 bg-base-light padding-1 text-center">3</div>
  </div>
</div>

## Grid with Gaps

<div class="grid-container margin-top-2">
  <div class="grid-row grid-gap">
    <div class="grid-col-6 bg-base-light padding-1 text-center">6 with gap</div>
    <div class="grid-col-6 bg-base-lighter padding-1 text-center">6 with gap</div>
  </div>
</div>

## Grid with Large Gaps

<div class="grid-container margin-top-2">
  <div class="grid-row grid-gap-lg">
    <div class="grid-col-4 bg-base-light padding-1 text-center">4 with large gap</div>
    <div class="grid-col-4 bg-base-lighter padding-1 text-center">4 with large gap</div>
    <div class="grid-col-4 bg-base-light padding-1 text-center">4 with large gap</div>
  </div>
</div>

## Responsive Grid

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 bg-base-light padding-1 text-center">Full / Half / Third</div>
    <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 bg-base-lighter padding-1 text-center">Full / Half / Third</div>
    <div class="grid-col-12 desktop:grid-col-4 bg-base-light padding-1 text-center">Full / Half / Third</div>
  </div>
</div>

## Nested Grid

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col-8 bg-base-light padding-2">
      <p>8 columns</p>
      <div class="grid-row">
        <div class="grid-col-6 bg-base-lighter padding-1 text-center">Nested 6</div>
        <div class="grid-col-6 bg-base-light padding-1 text-center">Nested 6</div>
      </div>
    </div>
    <div class="grid-col-4 bg-base-lighter padding-1 text-center">4</div>
  </div>
</div>

## Auto-Width Columns

<div class="grid-container margin-top-2">
  <div class="grid-row">
    <div class="grid-col bg-base-light padding-1 text-center">Auto</div>
    <div class="grid-col bg-base-lighter padding-1 text-center">Auto</div>
    <div class="grid-col bg-base-light padding-1 text-center">Auto</div>
  </div>
</div>
