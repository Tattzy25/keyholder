// Utility Functions module

export function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

export function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

export function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export function formatDateTime(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

export function getDaysUntilExpiry(expiryDate) {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

export function getStatusColor(status) {
    const colors = {
        active: 'var(--success)',
        inactive: 'var(--text-muted)',
        expired: 'var(--error)',
        pending: 'var(--warning)',
        completed: 'var(--success)',
        error: 'var(--error)'
    };
    return colors[status.toLowerCase()] || 'var(--text-secondary)';
}