// Module entry: bridge global functions and initialize app without refactoring

// Import modularized state, component library, and utilities
import { state, initializeDefaultViews } from './state.js';
import { componentLibrary } from './componentLibrary.js';
import { 
  formatCurrency,
  formatNumber,
  formatDate,
  formatDateTime,
  getDaysUntilExpiry,
  getStatusColor
} from './utils.js';

// Re-export for ES module consumers
export { 
  state,
  initializeDefaultViews,
  componentLibrary,
  formatCurrency,
  formatNumber,
  formatDate,
  formatDateTime,
  getDaysUntilExpiry,
  getStatusColor
};

// Also expose to window to keep legacy globals accessible if needed
if (typeof window !== 'undefined') {
  window.state = window.state || state;
  window.initializeDefaultViews = window.initializeDefaultViews || initializeDefaultViews;
  window.componentLibrary = window.componentLibrary || componentLibrary;
  window.formatCurrency = window.formatCurrency || formatCurrency;
  window.formatNumber = window.formatNumber || formatNumber;
  window.formatDate = window.formatDate || formatDate;
  window.formatDateTime = window.formatDateTime || formatDateTime;
  window.getDaysUntilExpiry = window.getDaysUntilExpiry || getDaysUntilExpiry;
  window.getStatusColor = window.getStatusColor || getStatusColor;
}

// Expose commonly used functions from the legacy global app to ES module consumers
export const init = (...args) => (window.init ? window.init(...args) : undefined);
export const toggleComponentLibrary = (...args) => (window.toggleComponentLibrary ? window.toggleComponentLibrary(...args) : undefined);
export const toggleEditMode = (...args) => (window.toggleEditMode ? window.toggleEditMode(...args) : undefined);
export const openAddMenuModal = (...args) => (window.openAddMenuModal ? window.openAddMenuModal(...args) : undefined);
export const closeUIverseModal = (...args) => (window.closeUIverseModal ? window.closeUIverseModal(...args) : undefined);
export const filterUIverse = (...args) => (window.filterUIverse ? window.filterUIverse(...args) : undefined);
export const closeCustomCodeModal = (...args) => (window.closeCustomCodeModal ? window.closeCustomCodeModal(...args) : undefined);
export const switchCodeTab = (...args) => (window.switchCodeTab ? window.switchCodeTab(...args) : undefined);
export const saveCustomCode = (...args) => (window.saveCustomCode ? window.saveCustomCode(...args) : undefined);
export const closeCustomizationPanel = (...args) => (window.closeCustomizationPanel ? window.closeCustomizationPanel(...args) : undefined);
export const closeAddMenuModal = (...args) => (window.closeAddMenuModal ? window.closeAddMenuModal(...args) : undefined);
export const addNewMenuItem = (...args) => (window.addNewMenuItem ? window.addNewMenuItem(...args) : undefined);

// Auto-initialize once DOM is ready, deferring to the legacy init()
document.addEventListener('DOMContentLoaded', () => {
  if (typeof window.init === 'function') {
    try {
      window.init();
    } catch (e) {
      console.error('Initialization error from legacy app:', e);
    }
  }
});