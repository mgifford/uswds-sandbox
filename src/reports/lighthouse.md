---
layout: sandbox
title: Lighthouse Report
---

# Lighthouse Report

Performance metrics and scores from Google Lighthouse scans.

Last scan: {% if lighthouse-report.timestamp %}{{ lighthouse-report.timestamp | date: "%B %d, %Y at %I:%M %p UTC" }}{% else %}No scan data available{% endif %}

<div class="grid-row grid-gap margin-y-4">
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Performance</h3>
      </div>
      <div class="usa-card__body">
        <div class="text-center">
          <span class="font-heading-3xl {% if lighthouse-report.categories.performance.score >= 90 %}text-green{% elsif lighthouse-report.categories.performance.score >= 50 %}text-yellow{% else %}text-red{% endif %}">
            {% if lighthouse-report.categories.performance.score > 0 %}
              {{ lighthouse-report.categories.performance.score }}
            {% else %}
              --
            {% endif %}
          </span>
        </div>
        <div class="usa-progress-bar" style="width: 100%; height: 8px;">
          <div class="usa-progress-bar__bar {% if lighthouse-report.categories.performance.score >= 90 %}bg-green{% elsif lighthouse-report.categories.performance.score >= 50 %}bg-yellow{% else %}bg-red{% endif %}" style="width: {{ lighthouse-report.categories.performance.score }}%;"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Accessibility</h3>
      </div>
      <div class="usa-card__body">
        <div class="text-center">
          <span class="font-heading-3xl {% if lighthouse-report.categories.accessibility.score >= 90 %}text-green{% elsif lighthouse-report.categories.accessibility.score >= 50 %}text-yellow{% else %}text-red{% endif %}">
            {% if lighthouse-report.categories.accessibility.score > 0 %}
              {{ lighthouse-report.categories.accessibility.score }}
            {% else %}
              --
            {% endif %}
          </span>
        </div>
        <div class="usa-progress-bar" style="width: 100%; height: 8px;">
          <div class="usa-progress-bar__bar {% if lighthouse-report.categories.accessibility.score >= 90 %}bg-green{% elsif lighthouse-report.categories.accessibility.score >= 50 %}bg-yellow{% else %}bg-red{% endif %}" style="width: {{ lighthouse-report.categories.accessibility.score }}%;"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Best Practices</h3>
      </div>
      <div class="usa-card__body">
        <div class="text-center">
          <span class="font-heading-3xl {% if lighthouse-report.categories.best-practices.score >= 90 %}text-green{% elsif lighthouse-report.categories.best-practices.score >= 50 %}text-yellow{% else %}text-red{% endif %}">
            {% if lighthouse-report.categories.best-practices.score > 0 %}
              {{ lighthouse-report.categories.best-practices.score }}
            {% else %}
              --
            {% endif %}
          </span>
        </div>
        <div class="usa-progress-bar" style="width: 100%; height: 8px;">
          <div class="usa-progress-bar__bar {% if lighthouse-report.categories.best-practices.score >= 90 %}bg-green{% elsif lighthouse-report.categories.best-practices.score >= 50 %}bg-yellow{% else %}bg-red{% endif %}" style="width: {{ lighthouse-report.categories.best-practices.score }}%;"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">SEO</h3>
      </div>
      <div class="usa-card__body">
        <div class="text-center">
          <span class="font-heading-3xl {% if lighthouse-report.categories.seo.score >= 90 %}text-green{% elsif lighthouse-report.categories.seo.score >= 50 %}text-yellow{% else %}text-red{% endif %}">
            {% if lighthouse-report.categories.seo.score > 0 %}
              {{ lighthouse-report.categories.seo.score }}
            {% else %}
              --
            {% endif %}
          </span>
        </div>
        <div class="usa-progress-bar" style="width: 100%; height: 8px;">
          <div class="usa-progress-bar__bar {% if lighthouse-report.categories.seo.score >= 90 %}bg-green{% elsif lighthouse-report.categories.seo.score >= 50 %}bg-yellow{% else %}bg-red{% endif %}" style="width: {{ lighthouse-report.categories.seo.score }}%;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

<h2 class="font-heading-xl margin-top-4">Core Web Vitals</h2>
<div class="grid-row grid-gap margin-y-2">
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">First Contentful Paint</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center">
          {% if lighthouse-report.metrics.first-contentful-paint.value > 0 %}
            {{ lighthouse-report.metrics.first-contentful-paint.value }}ms
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">Target: &lt;1800ms</p>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Largest Contentful Paint</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center">
          {% if lighthouse-report.metrics.largest-contentful-paint.value > 0 %}
            {{ lighthouse-report.metrics.largest-contentful-paint.value }}ms
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">Target: &lt;2500ms</p>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Cumulative Layout Shift</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center">
          {% if lighthouse-report.metrics.cumulative-layout-shift.value > 0 %}
            {{ lighthouse-report.metrics.cumulative-layout-shift.value }}
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">Target: &lt;0.1</p>
      </div>
    </div>
  </div>
  <div class="grid-col-3">
    <div class="usa-card">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">Total Blocking Time</h3>
      </div>
      <div class="usa-card__body">
        <p class="font-heading-xl text-center">
          {% if lighthouse-report.metrics.total-blocking-time.value > 0 %}
            {{ lighthouse-report.metrics.total-blocking-time.value }}ms
          {% else %}
            --
          {% endif %}
        </p>
        <p class="usa-text-small text-center">Target: &lt;200ms</p>
      </div>
    </div>
  </div>
</div>

<h2 class="font-heading-xl margin-top-4">Page Scores</h2>
{% if lighthouse-report.urls.size > 0 %}
<table class="usa-table usa-table--striped">
  <thead>
    <tr>
      <th scope="col">Page</th>
      <th scope="col">Performance</th>
      <th scope="col">Accessibility</th>
      <th scope="col">Best Practices</th>
      <th scope="col">SEO</th>
    </tr>
  </thead>
  <tbody>
    {% for page in lighthouse-report.urls %}
    <tr>
      <td><a href="{{ page.url }}">{{ page.name }}</a></td>
      <td>
        <span class="{% if page.performance >= 90 %}text-green{% elsif page.performance >= 50 %}text-yellow{% else %}text-red{% endif %}">
          {{ page.performance }}
        </span>
      </td>
      <td>
        <span class="{% if page.accessibility >= 90 %}text-green{% elsif page.accessibility >= 50 %}text-yellow{% else %}text-red{% endif %}">
          {{ page.accessibility }}
        </span>
      </td>
      <td>
        <span class="{% if page.bestPractices >= 90 %}text-green{% elsif page.bestPractices >= 50 %}text-yellow{% else %}text-red{% endif %}">
          {{ page.bestPractices }}
        </span>
      </td>
      <td>
        <span class="{% if page.seo >= 90 %}text-green{% elsif page.seo >= 50 %}text-yellow{% else %}text-red{% endif %}">
          {{ page.seo }}
        </span>
      </td>
    </tr>
    {% endfor %}
  </tbody>
</table>
{% else %}
<div class="usa-alert usa-alert--info">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">No Data Available</h4>
    <p class="usa-alert__text">Lighthouse scans run automatically on every push to the main branch. Check back after the next deployment.</p>
  </div>
</div>
{% endif %}

<section class="bg-base-lightest padding-y-4 margin-top-4">
  <div class="grid-container">
    <h2 class="font-heading-xl margin-bottom-2">Understanding Lighthouse Scores</h2>
    <div class="grid-row grid-gap">
      <div class="grid-col-6">
        <h3 class="font-heading-lg">Score Ranges</h3>
        <ul class="usa-list">
          <li><span class="text-green">90-100:</span> Good - The page is performing well</li>
          <li><span class="text-yellow">50-89:</span> Needs Improvement - The page could be better</li>
          <li><span class="text-red">0-49:</span> Poor - The page needs significant work</li>
        </ul>
      </div>
      <div class="grid-col-6">
        <h3 class="font-heading-lg">Core Web Vitals</h3>
        <ul class="usa-list">
          <li><strong>FCP:</strong> How quickly content appears after navigation</li>
          <li><strong>LCP:</strong> How quickly the main content loads</li>
          <li><strong>CLS:</strong> How much the page layout shifts during loading</li>
          <li><strong>TBT:</strong> How long the main thread is blocked during loading</li>
        </ul>
      </div>
    </div>
  </div>
</section>