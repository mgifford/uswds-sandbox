---
layout: sandbox
title: Table
---

# Table

Tables organize and display data in rows and columns.

## Default Table

<table class="usa-table">
  <caption>Table caption describes the table content</caption>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Role</th>
      <th scope="col">Department</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Jane Smith</th>
      <td>Director</td>
      <td>Engineering</td>
    </tr>
    <tr>
      <th scope="row">John Doe</th>
      <td>Manager</td>
      <td>Design</td>
    </tr>
    <tr>
      <th scope="row">Emily Chen</th>
      <td>Specialist</td>
      <td>Product</td>
    </tr>
  </tbody>
</table>

## Bordered Table

<table class="usa-table usa-table--bordered">
  <caption>Bordered table for clearer row separation</caption>
  <thead>
    <tr>
      <th scope="col">Item</th>
      <th scope="col">Quantity</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Widget A</th>
      <td>10</td>
      <td>$25.00</td>
    </tr>
    <tr>
      <th scope="row">Widget B</th>
      <td>5</td>
      <td>$42.50</td>
    </tr>
    <tr>
      <th scope="row">Widget C</th>
      <td>20</td>
      <td>$12.75</td>
    </tr>
  </tbody>
</table>

## Compact Table

<table class="usa-table usa-table--compact">
  <caption>Compact table with reduced padding</caption>
  <thead>
    <tr>
      <th scope="col">Code</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">USR-001</th>
      <td>Primary system</td>
      <td>Active</td>
    </tr>
    <tr>
      <th scope="row">USR-002</th>
      <td>Backup system</td>
      <td>Standby</td>
    </tr>
    <tr>
      <th scope="row">USR-003</th>
      <td>Legacy system</td>
      <td>Retired</td>
    </tr>
  </tbody>
</table>

## Scrollable Table

<div class="usa-table-container--scrollable">
  <table class="usa-table">
    <caption>This table has horizontal scrolling enabled</caption>
    <thead>
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Name</th>
        <th scope="col">Description</th>
        <th scope="col">Category</th>
        <th scope="col">Status</th>
        <th scope="col">Date Created</th>
        <th scope="col">Last Modified</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">001</th>
        <td>Component A</td>
        <td>A detailed description of Component A</td>
        <td>UI</td>
        <td>Active</td>
        <td>2026-01-15</td>
        <td>2026-03-22</td>
      </tr>
      <tr>
        <th scope="row">002</th>
        <td>Component B</td>
        <td>A detailed description of Component B</td>
        <td>Backend</td>
        <td>Inactive</td>
        <td>2026-02-10</td>
        <td>2026-04-05</td>
      </tr>
    </tbody>
  </table>
</div>

## Striped Table

<table class="usa-table usa-table--striped">
  <caption>Striped table for easier row reading</caption>
  <thead>
    <tr>
      <th scope="col">Priority</th>
      <th scope="col">Task</th>
      <th scope="col">Assignee</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">High</th>
      <td>Fix login bug</td>
      <td>Team A</td>
    </tr>
    <tr>
      <th scope="row">Medium</th>
      <td>Update documentation</td>
      <td>Team B</td>
    </tr>
    <tr>
      <th scope="row">Low</th>
      <td>Clean up unused code</td>
      <td>Team C</td>
    </tr>
  </tbody>
</table>

## Table with No Markers

<table class="usa-table usa-table--borderless">
  <caption>Borderless table with no visual separators</caption>
  <thead>
    <tr>
      <th scope="col">Feature</th>
      <th scope="col">Included</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Authentication</th>
      <td>Yes</td>
    </tr>
    <tr>
      <th scope="row">API access</th>
      <td>Pro plan only</td>
    </tr>
    <tr>
      <th scope="row">Support</th>
      <td>24/7</td>
    </tr>
  </tbody>
</table>
