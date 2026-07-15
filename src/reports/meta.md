---
layout: sandbox
title: Meta Tags Report
---

# Meta Tags Report

Validation of HTML meta tags across all pages.

Last scan: {% if meta-report.timestamp %}{{ meta-report.timestamp | date: "%B %d, %Y at %I:%M %p UTC" }}{% else %}No scan data available{% endif %}

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Pages Scanned</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl text-ink">
          {% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}
        </span>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Passed</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl usa-color-success">
          {% if meta-report.summary.passed > 0 %}{{ meta-report.summary.passed }}{% else %}0{% endif %}
        </span>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Failed</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl usa-color-error">
          {% if meta-report.summary.failed > 0 %}{{ meta-report.summary.failed }}{% else %}0{% endif %}
        </span>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Pass Rate</h3>
      </div>
      <div class="usa-card__body text-center">
        <span class="font-heading-3xl text-ink">
          {% if meta-report.summary.totalPages > 0 %}
            {% assign pass_rate = meta-report.summary.passed | times: 100 | divided_by: meta-report.summary.totalPages %}
            {{ pass_rate }}%
          {% else %}--{% endif %}
        </span>
      </div>
    </div>
  </div>
</div>

<h2 class="font-heading-xl margin-top-4">Required Tags</h2>
<p class="margin-bottom-2">These tags are required for all government websites:</p>
<table class="usa-table usa-table--striped">
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Status</th>
      <th scope="col">Pages Found</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;title&gt;</code></td>
      <td><span class="usa-tag usa-tag--success">Required</span></td>
      <td>{% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}</td>
    </tr>
    <tr>
      <td><code>&lt;meta name="description"&gt;</code></td>
      <td><span class="usa-tag usa-tag--success">Required</span></td>
      <td>{% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}</td>
    </tr>
    <tr>
      <td><code>&lt;meta name="viewport"&gt;</code></td>
      <td><span class="usa-tag usa-tag--success">Required</span></td>
      <td>{% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}</td>
    </tr>
    <tr>
      <td><code>&lt;meta charset="utf-8"&gt;</code></td>
      <td><span class="usa-tag usa-tag--success">Required</span></td>
      <td>{% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}</td>
    </tr>
    <tr>
      <td><code>&lt;meta http-equiv="X-UA-Compatible"&gt;</code></td>
      <td><span class="usa-tag usa-tag--info">Recommended</span></td>
      <td>{% if meta-report.summary.totalPages > 0 %}{{ meta-report.summary.totalPages }}{% else %}--{% endif %}</td>
    </tr>
  </tbody>
</table>

<h2 class="font-heading-xl margin-top-4">SEO Tags</h2>
<p class="margin-bottom-2">These tags improve search engine optimization:</p>
<table class="usa-table usa-table--striped">
  <thead>
    <tr>
      <th scope="col">Tag</th>
      <th scope="col">Status</th>
      <th scope="col">Purpose</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>&lt;meta property="og:title"&gt;</code></td>
      <td><span class="usa-tag usa-tag--info">Optional</span></td>
      <td>Open Graph title for social sharing</td>
    </tr>
    <tr>
      <td><code>&lt;meta property="og:description"&gt;</code></td>
      <td><span class="usa-tag usa-tag--info">Optional</span></td>
      <td>Open Graph description for social sharing</td>
    </tr>
    <tr>
      <td><code>&lt;meta property="og:image"&gt;</code></td>
      <td><span class="usa-tag usa-tag--info">Optional</span></td>
      <td>Open Graph image for social sharing</td>
    </tr>
    <tr>
      <td><code>&lt;link rel="canonical"&gt;</code></td>
      <td><span class="usa-tag usa-tag--info">Optional</span></td>
      <td>Canonical URL for search engines</td>
    </tr>
  </tbody>
</table>

<section class="bg-base-lightest padding-y-4 margin-top-4">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-bottom-2">About Meta Tags</h2>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <h3 class="font-heading-lg">Why Meta Tags Matter</h3>
        <ul class="usa-list">
          <li><strong>Accessibility:</strong> Proper viewport and charset tags</li>
          <li><strong>SEO:</strong> Help search engines understand your content</li>
          <li><strong>Social Sharing:</strong> Control how your site appears on social media</li>
          <li><strong>Compliance:</strong> Required by Section 508</li>
        </ul>
      </div>
      <div class="grid-col-6">
        <h3 class="font-heading-lg">Common Issues</h3>
        <ul class="usa-list">
          <li><strong>Missing viewport:</strong> Site won't work on mobile devices</li>
          <li><strong>Duplicate titles:</strong> Confuses search engines</li>
          <li><strong>No description:</strong> Search engines auto-generate snippets</li>
          <li><strong>Missing charset:</strong> Can cause encoding issues</li>
        </ul>
      </div>
    </div>
  </div>
</section>