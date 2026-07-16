---
layout: sandbox
title: Search
---

# Search USWDS Sandbox

<label class="usa-label" for="search-input">Search components, templates, and patterns</label>
<div class="usa-search">
  <input class="usa-input" id="search-input" type="search" name="search" placeholder="Search..." autofocus>
</div>

<div id="search-results" class="margin-top-4">
  <p class="usa-text-body" id="search-status">Type to search across all pages.</p>
  <div id="results-container"></div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const resultsContainer = document.getElementById('results-container');
    const searchStatus = document.getElementById('search-status');
    let searchIndex = [];
    
    // Load search index
    fetch('assets/data/search-index.json')
      .then(response => response.json())
      .then(data => {
        searchIndex = data;
        searchStatus.textContent = `Ready. ${searchIndex.length} pages available.`;
      })
      .catch(err => {
        searchStatus.textContent = 'Search index unavailable.';
        console.error('Failed to load search index:', err);
      });
    
    // Filter and display results
    function performSearch(query) {
      if (!query || query.length < 2) {
        resultsContainer.innerHTML = '';
        searchStatus.textContent = 'Type at least 2 characters to search.';
        return;
      }
      
      const lowerQuery = query.toLowerCase();
      const results = searchIndex.filter(item => {
        return item.title.toLowerCase().includes(lowerQuery) ||
               item.description.toLowerCase().includes(lowerQuery) ||
               item.name.toLowerCase().includes(lowerQuery) ||
               item.category.toLowerCase().includes(lowerQuery);
      });
      
      if (results.length === 0) {
        resultsContainer.innerHTML = `
          <div class="usa-alert usa-alert--info">
            <div class="usa-alert__body">
              <h4 class="usa-alert__heading">No results found</h4>
              <p class="usa-alert__text">No pages match "${query}". Try different keywords.</p>
            </div>
          </div>
        `;
        searchStatus.textContent = `No results for "${query}".`;
        return;
      }
      
      searchStatus.textContent = `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}".`;
      
      // Group by category
      const grouped = {};
      for (const item of results) {
        if (!grouped[item.category]) {
          grouped[item.category] = [];
        }
        grouped[item.category].push(item);
      }
      
      let html = '';
      for (const [category, items] of Object.entries(grouped)) {
        html += `
          <section class="margin-bottom-4">
            <h2 class="font-heading-lg">${category}</h2>
            <div class="grid-row grid-gap">
              ${items.map(item => `
                <div class="grid-col-12 tablet:grid-col-6 desktop:grid-col-4 margin-bottom-2">
                  <div class="usa-card">
                    <div class="usa-card__header">
                      <h3 class="usa-card__heading">
                        <a href="${item.url}">${highlightMatch(item.title, query)}</a>
                      </h3>
                    </div>
                    ${item.description ? `
                      <div class="usa-card__body">
                        <p class="usa-text-small">${highlightMatch(item.description, query)}</p>
                      </div>
                    ` : ''}
                  </div>
                </div>
              `).join('')}
            </div>
          </section>
        `;
      }
      
      resultsContainer.innerHTML = html;
    }
    
    function highlightMatch(text, query) {
      if (!query) return text;
      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    }
    
    // Debounce search input
    let debounceTimer;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(this.value.trim());
      }, 200);
    });
  });
</script>

<style>
  #search-results mark {
    background-color: #fae685;
    padding: 0 2px;
  }
  .usa-card__heading a {
    text-decoration: none;
  }
  .usa-card__heading a:hover {
    text-decoration: underline;
  }
</style>
