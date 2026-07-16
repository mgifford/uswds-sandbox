// Small Business Application Form
// Handles multi-step form, localStorage persistence, and submission

document.addEventListener('DOMContentLoaded', function() {
  const STORAGE_KEY = 'smallBusinessApplication';
  const STORAGE_PREFIX = 'sb_app_';
  
  let currentStep = 1;
  const totalSteps = 3;
  let formData = {};
  
  // DOM elements
  const steps = document.querySelectorAll('.application-step');
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const btnSubmit = document.getElementById('btn-submit');
  const btnSave = document.getElementById('btn-save');
  const btnResume = document.getElementById('btn-resume');
  const formNavigation = document.getElementById('form-navigation');
  
  // Initialize
  init();
  
  function init() {
    // Check for saved application
    checkForSavedApplication();
    
    // Event listeners
    btnPrev.addEventListener('click', goToPreviousStep);
    btnNext.addEventListener('click', goToNextStep);
    btnSubmit.addEventListener('click', submitApplication);
    btnSave.addEventListener('click', saveProgress);
    btnResume.addEventListener('click', resumeApplication);
    
    // Load saved data if exists
    loadSavedData();
    
    // Update UI
    updateStepUI();
  }
  
  function checkForSavedApplication() {
    const email = localStorage.getItem(STORAGE_KEY + '_email');
    if (email) {
      document.getElementById('saved-applications').style.display = 'block';
    }
  }
  
  function goToNextStep() {
    if (currentStep < totalSteps) {
      if (validateCurrentStep()) {
        saveFormData();
        currentStep++;
        updateStepUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
  
  function goToPreviousStep() {
    if (currentStep > 1) {
      saveFormData();
      currentStep--;
      updateStepUI();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  
  function validateCurrentStep() {
    const currentStepEl = document.getElementById(`step-${currentStep}`);
    const requiredFields = currentStepEl.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
      if (field.type === 'checkbox' && !field.checked) {
        isValid = false;
        field.classList.add('usa-checkbox__input--error');
      } else if (field.type !== 'checkbox' && !field.value.trim()) {
        field.classList.add('usa-input--error');
        isValid = false;
      } else {
        field.classList.remove('usa-input--error');
        field.classList.remove('usa-checkbox__input--error');
      }
    });
    
    // Validate radio buttons on step 2
    if (currentStep === 2) {
      const tierSelected = document.querySelector('input[name="program-tier"]:checked');
      if (!tierSelected) {
        isValid = false;
        alert('Please select a program tier.');
      }
    }
    
    // Validate certification on step 3
    if (currentStep === 3) {
      const certification = document.getElementById('certification');
      if (!certification.checked) {
        isValid = false;
        alert('Please certify that all information is true and accurate.');
      }
    }
    
    if (!isValid) {
      alert('Please fill in all required fields.');
    }
    
    return isValid;
  }
  
  function saveFormData() {
    formData = {
      step: currentStep,
      business: {
        businessName: document.getElementById('business-name').value,
        ein: document.getElementById('ein').value,
        dateEstablished: document.getElementById('date-established').value,
        businessType: document.getElementById('business-type-select').value,
        address: document.getElementById('business-address').value,
        zip: document.getElementById('business-zip').value
      },
      financial: {
        annualRevenue: document.getElementById('annual-revenue').value,
        employeeCount: document.getElementById('employee-count').value,
        programTier: document.querySelector('input[name="program-tier"]:checked')?.value,
        fundingPurpose: document.getElementById('funding-purpose').value
      },
      impact: {
        jobsCreated: document.getElementById('jobs-created').value,
        communityImpact: document.getElementById('community-impact').value,
        ownership: Array.from(document.querySelectorAll('input[name="ownership"]:checked')).map(cb => cb.value),
        certification: document.getElementById('certification').checked
      }
    };
    
    return formData;
  }
  
  function loadSavedData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        formData = JSON.parse(saved);
        currentStep = formData.step || 1;
        
        // Step 1: Business Information
        if (formData.business) {
          document.getElementById('business-name').value = formData.business.businessName || '';
          document.getElementById('ein').value = formData.business.ein || '';
          document.getElementById('date-established').value = formData.business.dateEstablished || '';
          document.getElementById('business-type-select').value = formData.business.businessType || '';
          document.getElementById('business-address').value = formData.business.address || '';
          document.getElementById('business-zip').value = formData.business.zip || '';
        }
        
        // Step 2: Financial Information
        if (formData.financial) {
          document.getElementById('annual-revenue').value = formData.financial.annualRevenue || '';
          document.getElementById('employee-count').value = formData.financial.employeeCount || '';
          
          const tierRadio = document.querySelector(`input[name="program-tier"][value="${formData.financial.programTier}"]`);
          if (tierRadio) tierRadio.checked = true;
          
          document.getElementById('funding-purpose').value = formData.financial.fundingPurpose || '';
        }
        
        // Step 3: Impact
        if (formData.impact) {
          document.getElementById('jobs-created').value = formData.impact.jobsCreated || '';
          document.getElementById('community-impact').value = formData.impact.communityImpact || '';
          
          formData.impact.ownership?.forEach(type => {
            const checkbox = document.querySelector(`input[name="ownership"][value="${type}"]`);
            if (checkbox) checkbox.checked = true;
          });
          
          document.getElementById('certification').checked = formData.impact.certification || false;
        }
        
      } catch (e) {
        console.error('Error loading saved data:', e);
      }
    }
  }
  
  function updateStepUI() {
    // Hide all steps
    steps.forEach(step => step.hidden = true);
    
    // Show current step
    document.getElementById(`step-${currentStep}`).hidden = false;
    
    // Update navigation buttons
    btnPrev.hidden = currentStep === 1;
    btnNext.hidden = currentStep === totalSteps;
    btnSubmit.hidden = currentStep !== totalSteps;
  }
  
  function saveProgress() {
    saveFormData();
    formData.email = formData.business?.ein + '@business.com'; // Use EIN as identifier
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    // Show success message
    const statusMsg = document.createElement('div');
    statusMsg.className = 'usa-alert usa-alert--success margin-top-2';
    statusMsg.innerHTML = `
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>Progress saved!</strong> Use your business EIN to resume later.</p>
      </div>
    `;
    
    const existingMsg = document.querySelector('.save-status');
    if (existingMsg) existingMsg.remove();
    
    statusMsg.classList.add('save-status');
    document.getElementById('form-navigation').appendChild(statusMsg);
    
    setTimeout(() => statusMsg.remove(), 5000);
  }
  
  function resumeApplication() {
    const ein = document.getElementById('resume-email').value.trim();
    if (!ein) {
      alert('Please enter your business EIN or email address.');
      return;
    }
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.business?.ein === ein || data.business?.ein + '@business.com' === ein) {
        formData = data;
        currentStep = data.step || 1;
        loadSavedData();
        updateStepUI();
        
        document.getElementById('saved-applications').hidden = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.getElementById('resume-status').hidden = false;
        document.getElementById('resume-status').innerHTML = `
          <div class="usa-alert usa-alert--warning">
            <div class="usa-alert__body">
              <p class="usa-alert__text">No application found for this EIN/email address.</p>
            </div>
          </div>
        `;
      }
    } else {
      alert('No saved applications found.');
    }
  }
  
  function submitApplication() {
    if (!validateCurrentStep()) return;
    
    saveFormData();
    
    // Generate reference number
    const refNumber = 'SB-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // Show confirmation
    document.getElementById('reference-number').textContent = refNumber;
    document.getElementById('submission-date').textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    document.getElementById('confirmation-business').textContent = formData.business?.businessName || 'N/A';
    document.getElementById('confirmation-email').textContent = formData.business?.ein + '@business.com' || 'N/A';
    
    // Hide form, show confirmation
    document.getElementById('application-form-container').querySelectorAll('.application-step').forEach(step => {
      step.hidden = true;
    });
    document.getElementById('step-confirmation').hidden = false;
    formNavigation.hidden = true;
    
    // Store submission in localStorage for demo
    const submissions = JSON.parse(localStorage.getItem(STORAGE_PREFIX + 'submissions') || '[]');
    submissions.push({
      refNumber,
      submitted: new Date().toISOString(),
      data: formData
    });
    localStorage.setItem(STORAGE_PREFIX + 'submissions', JSON.stringify(submissions));
    
    // Clear saved draft
    localStorage.removeItem(STORAGE_KEY);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
