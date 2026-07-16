import fs from 'fs';
import path from 'path';

const outputPath = 'src/assets/data/search-index.json';

function buildSearchIndex() {
  const index = [];
  
  // Read nav.json for page structure
  const navPath = 'src/_data/nav.json';
  if (!fs.existsSync(navPath)) {
    console.log('nav.json not found, skipping search index build');
    return;
  }
  
  const nav = JSON.parse(fs.readFileSync(navPath, 'utf8'));
  
  // Flatten navigation into searchable items
  function processItems(items, parentCategory = '') {
    for (const item of items) {
      if (item.url && item.url.startsWith('/')) {
        // Read the markdown file to get description
        let description = '';
        const mdPath = path.join('src', item.url, 'index.md');
        const mdPathAlt = path.join('src', `${item.url.slice(0, -1)}.md`);
        
        let content = '';
        if (fs.existsSync(mdPath)) {
          content = fs.readFileSync(mdPath, 'utf8');
        } else if (fs.existsSync(mdPathAlt)) {
          content = fs.readFileSync(mdPathAlt, 'utf8');
        }
        
        // Extract title from front matter
        const titleMatch = content.match(/^---[\s\S]*?title:\s*(.+?)$/m);
        const title = titleMatch ? titleMatch[1].trim() : item.name;
        
        // Extract first paragraph as description (skip front matter and title)
        const bodyMatch = content.match(/^---[\s\S]*?---\s*\n+(?:#\s+.+\n+)?(.+?)$/m);
        if (bodyMatch) {
          description = bodyMatch[1]
            .replace(/<[^>]+>/g, '')
            .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
            .replace(/```[\s\S]*?```/g, '')
            .trim()
            .substring(0, 200);
        }
        
        // Determine category from URL
        let category = parentCategory;
        if (item.url.startsWith('/components/')) category = 'Components';
        else if (item.url.startsWith('/templates/')) category = 'Templates';
        else if (item.url.startsWith('/patterns/')) category = 'Patterns';
        else if (item.url.startsWith('/reports/')) category = 'Reports';
        else if (item.url === '/accessibility/') category = 'Accessibility';
        else if (item.url === '/colophon/') category = 'About';
        else if (item.url === '/') category = 'Home';
        
        index.push({
          title,
          description,
          url: item.url,
          category,
          name: item.name
        });
      }
      
      // Process nested contents
      if (item.contents) {
        processItems(item.contents, item.url?.startsWith('/components/') ? 'Components' : 
                     item.url?.startsWith('/templates/') ? 'Templates' :
                     item.url?.startsWith('/patterns/') ? 'Patterns' :
                     item.url?.startsWith('/reports/') ? 'Reports' : parentCategory);
      }
    }
  }
  
  processItems(nav.primary);
  processItems(nav.secondary, 'About');
  
  // Write search index
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(index, null, 2));
  console.log(`Search index built: ${index.length} pages indexed`);
}

buildSearchIndex();
