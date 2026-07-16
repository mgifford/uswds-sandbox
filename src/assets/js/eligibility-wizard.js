// Eligibility Wizard for Small Business Program
// Handles the interactive eligibility check

document.addEventListener('DOMContentLoaded', function() {
  // Check for saved wizard state
  const savedState = localStorage.getItem('smallBusinessWizard');
  if (savedState) {
    try {
      const state = JSON.parse(savedState);
      if (state.currentStep) {
        // Restore wizard to saved step
        for (let i = 1; i < state.currentStep; i++) {
          document.getElementById(`wizard-step-${i}`).hidden = true;
        }
        document.getElementById(`wizard-step-${state.currentStep}`).hidden = false;
        
        // Restore selections
        if (state.businessType) {
          const radio = document.querySelector(`input[name="business-type"][value="${state.businessType}"]`);
          if (radio) radio.checked = true;
        }
        if (state.revenue) {
          const radio = document.querySelector(`input[name="revenue"][value="${state.revenue}"]`);
          if (radio) radio.checked = true;
        }
        if (state.industry) {
          const radio = document.querySelector(`input[name="industry"][value="${state.industry}"]`);
          if (radio) radio.checked = true;
        }
      }
    } catch (e) {
      console.error('Error loading wizard state:', e);
    }
  }
});

function wizardNext(step) {
  // Validate current step
  const currentStep = step - 1;
  const radios = document.querySelectorAll(`input[name="${getStepFieldName(currentStep)}"]:checked`);
  
  if (radios.length === 0) {
    alert('Please select an option to continue.');
    return;
  }
  
  // Save state
  saveWizardState();
  
  // Show next step
  document.getElementById(`wizard-step-${currentStep}`).hidden = true;
  document.getElementById(`wizard-step-${step}`).hidden = false;
}

function wizardPrev(step) {
  // Save current state
  saveWizardState();
  
  // Show previous step
  const currentStep = step + 1;
  document.getElementById(`wizard-step-${currentStep}`).hidden = true;
  document.getElementById(`wizard-step-${step}`).hidden = false;
}

function getStepFieldName(step) {
  const fields = {
    1: 'business-type',
    2: 'revenue',
    3: 'industry'
  };
  return fields[step];
}

function showResults() {
  // Validate industry step
  const radios = document.querySelectorAll('input[name="industry"]:checked');
  if (radios.length === 0) {
    alert('Please select an industry to continue.');
    return;
  }
  
  // Get all selections
  const businessType = document.querySelector('input[name="business-type"]:checked')?.value;
  const revenue = document.querySelector('input[name="revenue"]:checked')?.value;
  const industry = document.querySelector('input[name="industry"]:checked')?.value;
  
  // Determine eligibility
  const programs = calculateEligibility(businessType, revenue, industry);
  
  // Display results
  const resultsContainer = document.getElementById('eligibility-results');
  resultsContainer.innerHTML = programs.map(program => `
    <div class="usa-card usa-card--flag margin-bottom-2">
      <div class="usa-card__header">
        <h3 class="usa-card__heading">${program.name}</h3>
        <span class="usa-tag usa-tag--${program.tier === 'launch' ? '' : program.tier === 'growth' ? 'info' : 'success'}">${program.tagline}</span>
      </div>
      <div class="usa-card__body">
        <p><strong>Award:</strong> ${program.award}</p>
        <p>${program.description}</p>
        <p class="usa-text-small"><strong>Best for:</strong> ${program.bestFor}</p>
      </div>
    </div>
  `).join('');
  
  // Save results
  localStorage.setItem('smallBusinessWizard', JSON.stringify({
    businessType,
    revenue,
    industry,
    currentStep: 'results'
  }));
  
  // Hide step 3, show results
  document.getElementById('wizard-step-3').hidden = true;
  document.getElementById('wizard-results').hidden = false;
}

function calculateEligibility(businessType, revenue, industry) {
  const programs = [];
  
  // Launch Pad - available to all
  programs.push({
    name: 'Launch Pad',
    tier: 'launch',
    tagline: 'Startup Friendly',
    award: 'Up to $10,000',
    description: 'Perfect for new entrepreneurs turning ideas into reality. No revenue requirement.',
    bestFor: 'Startups, pre-revenue businesses, MVP development, market research'
  });
  
  // Growth Engine - requires existing revenue
  if (revenue !== 'pre-revenue') {
    programs.push({
      name: 'Growth Engine',
      tier: 'growth',
      tagline: 'Scaling Up',
      award: 'Up to $50,000',
      description: 'For established businesses ready to scale operations and hire employees.',
      bestFor: 'Businesses with revenue, hiring plans, expansion projects'
    });
  }
  
  // Innovation Accelerator - requires higher revenue
  if (revenue === '50k-500k' || revenue === '500k-5m' || revenue === 'over-5m') {
    programs.push({
      name: 'Innovation Accelerator',
      tier: 'innovation',
      tagline: 'High-Growth',
      award: 'Up to $100,000',
      description: 'For high-potential businesses with significant job creation potential.',
      bestFor: 'Established businesses, R&D projects, national expansion'
    });
  }
  
  // Special bonuses
  if (businessType === 'veteran') {
    programs[0].description += ' Plus: Veteran bonus of additional $2,500.';
    programs[0].award = 'Up to $12,500';
  }
  
  if (businessType === 'women') {
    programs[0].description += ' Plus: Women entrepreneur bonus of additional $2,500.';
    programs[0].award = 'Up to $12,500';
  }
  
  if (businessType === 'rural') {
    programs[0].description += ' Plus: Rural community bonus of additional $2,500.';
    programs[0].award = 'Up to $12,500';
  }
  
  return programs;
}

function resetWizard() {
  // Clear all selections
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.checked = false;
  });
  
  // Hide results, show step 1
  document.getElementById('wizard-results').hidden = true;
  document.getElementById('wizard-step-1').hidden = false;
  
  // Clear saved state
  localStorage.removeItem('smallBusinessWizard');
}

function saveWizardState() {
  const businessType = document.querySelector('input[name="business-type"]:checked')?.value;
  const revenue = document.querySelector('input[name="revenue"]:checked')?.value;
  const industry = document.querySelector('input[name="industry"]:checked')?.value;
  
  // Determine current step
  let currentStep = 1;
  if (!document.getElementById('wizard-step-1').hidden) currentStep = 1;
  else if (!document.getElementById('wizard-step-2').hidden) currentStep = 2;
  else if (!document.getElementById('wizard-step-3').hidden) currentStep = 3;
  
  localStorage.setItem('smallBusinessWizard', JSON.stringify({
    businessType,
    revenue,
    industry,
    currentStep
  }));
}
