// Disaster Recovery Application Form
// Handles multi-step form, localStorage persistence, and submission

document.addEventListener('DOMContentLoaded', function() {
  const STORAGE_KEY = 'disasterRecoveryApplication';
  const STORAGE_PREFIX = 'dr_app_';
  
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
    
    // Insurance radio change
    const insuranceRadios = document.querySelectorAll('input[name="insurance"]');
    insuranceRadios.forEach(radio => {
      radio.addEventListener('change', toggleInsuranceClaimField);
    });
    
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
  
  function toggleInsuranceClaimField() {
    const selectedValue = document.querySelector('input[name="insurance"]:checked')?.value;
    const claimGroup = document.getElementById('insurance-claim-group');
    
    if (selectedValue === 'full' || selectedValue === 'partial' || selectedValue === 'flood-only') {
      claimGroup.style.display = 'block';
      document.getElementById('insurance-claim').required = true;
    } else {
      claimGroup.style.display = 'none';
      document.getElementById('insurance-claim').required = false;
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
      if (!field.value.trim()) {
        field.classList.add('usa-input--error');
        isValid = false;
      } else {
        field.classList.remove('usa-input--error');
      }
    });
    
    // Validate checkboxes (certification on step 3)
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
      personal: {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zip: document.getElementById('zip').value,
        disasterId: document.getElementById('disaster-id').value
      },
      impact: {
        propertyType: document.querySelector('input[name="property-type"]:checked')?.value,
        damageTypes: Array.from(document.querySelectorAll('input[name="damage-type"]:checked')).map(cb => cb.value),
        damageDate: document.getElementById('damage-date').value,
        damageDescription: document.getElementById('damage-description').value,
        estimatedCost: document.getElementById('estimated-cost').value
      },
      additional: {
        insurance: document.querySelector('input[name="insurance"]:checked')?.value,
        insuranceClaim: document.getElementById('insurance-claim')?.value,
        temporaryHousing: document.getElementById('temporary-housing').value,
        rentalAssistance: document.querySelector('input[name="rental-assistance"]:checked')?.value,
        additionalComments: document.getElementById('additional-comments').value,
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
        
        // Step 1: Personal Information
        if (formData.personal) {
          document.getElementById('first-name').value = formData.personal.firstName || '';
          document.getElementById('last-name').value = formData.personal.lastName || '';
          document.getElementById('email').value = formData.personal.email || '';
          document.getElementById('phone').value = formData.personal.phone || '';
          document.getElementById('address').value = formData.personal.address || '';
          document.getElementById('city').value = formData.personal.city || '';
          document.getElementById('state').value = formData.personal.state || '';
          document.getElementById('zip').value = formData.personal.zip || '';
          document.getElementById('disaster-id').value = formData.personal.disasterId || '';
        }
        
        // Step 2: Disaster Impact
        if (formData.impact) {
          const propertyRadio = document.querySelector(`input[name="property-type"][value="${formData.impact.propertyType}"]`);
          if (propertyRadio) propertyRadio.checked = true;
          
          formData.impact.damageTypes?.forEach(type => {
            const checkbox = document.querySelector(`input[name="damage-type"][value="${type}"]`);
            if (checkbox) checkbox.checked = true;
          });
          
          document.getElementById('damage-date').value = formData.impact.damageDate || '';
          document.getElementById('damage-description').value = formData.impact.damageDescription || '';
          document.getElementById('estimated-cost').value = formData.impact.estimatedCost || '';
        }
        
        // Step 3: Additional Information
        if (formData.additional) {
          const insuranceRadio = document.querySelector(`input[name="insurance"][value="${formData.additional.insurance}"]`);
          if (insuranceRadio) {
            insuranceRadio.checked = true;
            toggleInsuranceClaimField();
          }
          
          if (document.getElementById('insurance-claim')) {
            document.getElementById('insurance-claim').value = formData.additional.insuranceClaim || '';
          }
          
          document.getElementById('temporary-housing').value = formData.additional.temporaryHousing || '';
          
          const rentalRadio = document.querySelector(`input[name="rental-assistance"][value="${formData.additional.rentalAssistance}"]`);
          if (rentalRadio) rentalRadio.checked = true;
          
          document.getElementById('additional-comments').value = formData.additional.additionalComments || '';
          document.getElementById('certification').checked = formData.additional.certification || false;
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
    formData.email = formData.personal?.email;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
    // Show success message
    const statusMsg = document.createElement('div');
    statusMsg.className = 'usa-alert usa-alert--success margin-top-2';
    statusMsg.innerHTML = `
      <div class="usa-alert__body">
        <p class="usa-alert__text"><strong>Progress saved!</strong> Use your email address to resume later.</p>
      </div>
    `;
    
    const existingMsg = document.querySelector('.save-status');
    if (existingMsg) existingMsg.remove();
    
    statusMsg.classList.add('save-status');
    document.getElementById('form-navigation').appendChild(statusMsg);
    
    setTimeout(() => statusMsg.remove(), 5000);
  }
  
  function resumeApplication() {
    const email = document.getElementById('resume-email').value.trim();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.personal?.email?.toLowerCase() === email.toLowerCase()) {
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
              <p class="usa-alert__text">No application found for this email address.</p>
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
    const refNumber = 'DR-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase();
    
    // Show confirmation
    document.getElementById('reference-number').textContent = refNumber;
    document.getElementById('submission-date').textContent = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    document.getElementById('confirmation-email').textContent = formData.personal?.email || 'N/A';
    
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
