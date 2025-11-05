// State Management
let state = {
    currentView: 'analytics',
    editMode: false,
    componentsLibraryOpen: false,
    customizationPanelOpen: false,
    selectedComponent: null,
    menuItems: [
        { id: 'analytics', label: 'Analytics', icon: '📊' },
        { id: 'data_management', label: 'Data Management', icon: '📁' },
        { id: 'cms', label: 'CMS', icon: '📝' },
        { id: 'key_manager', label: 'Key Manager', icon: '🔑' },
        { id: 'ai_manager', label: 'AI Manager', icon: '🤖' },
        { id: 'image_gen', label: 'Image Generation Manager', icon: '🖼️' },
        { id: 'mcp', label: 'MCP', icon: '⚙️' },
        { id: 'data_generator', label: 'Data Generator', icon: '⚡' },
        { id: 'ai_coding_agent', label: 'AI Coding Agent', icon: '🤖' },
        { id: 'chatbot', label: 'Chatbot', icon: '💬' }
    ],
    views: {},
    licenseKeys: [
        { id: 'key_001', customer_name: 'Acme Corp', email: 'contact@acme.com', key: 'KEY-ACME-2025-4521', status: 'active', plan: 'Pro', created_date: '2025-10-01', expiry_date: '2026-10-01', max_usage: 10000, current_usage: 3421, last_accessed: '2025-11-04', uses_count: 342 },
        { id: 'key_002', customer_name: 'TechStart Inc', email: 'admin@techstart.io', key: 'KEY-TECH-2025-8821', status: 'active', plan: 'Enterprise', created_date: '2025-09-15', expiry_date: '2026-09-15', max_usage: 50000, current_usage: 12340, last_accessed: '2025-11-03', uses_count: 1234 },
        { id: 'key_003', customer_name: 'DevCo LLC', email: 'dev@devco.com', key: 'KEY-DEVC-2025-1122', status: 'expired', plan: 'Basic', created_date: '2024-11-01', expiry_date: '2025-11-01', max_usage: 1000, current_usage: 1000, last_accessed: '2025-10-31', uses_count: 1000 },
        { id: 'key_004', customer_name: 'BuildIt Solutions', email: 'hello@buildit.com', key: 'KEY-BUIL-2025-5567', status: 'active', plan: 'Pro', created_date: '2025-08-20', expiry_date: '2026-08-20', max_usage: 10000, current_usage: 890, last_accessed: '2025-11-04', uses_count: 89 }
    ],
    aiModels: [
        { id: 'model_001', name: 'GPT-4', provider: 'OpenAI', tokens_input: 1500000, tokens_output: 750000, calls_made: 12500, avg_response_time_ms: 1200, cost_per_1k_input: 0.03, cost_per_1k_output: 0.06, total_cost: 67.50, last_used: '2025-11-04T15:30:00', status: 'active' },
        { id: 'model_002', name: 'Claude 3 Sonnet', provider: 'Anthropic', tokens_input: 1200000, tokens_output: 600000, calls_made: 9800, avg_response_time_ms: 950, cost_per_1k_input: 0.003, cost_per_1k_output: 0.015, total_cost: 12.60, last_used: '2025-11-04T14:15:00', status: 'active' },
        { id: 'model_003', name: 'Perplexity Sonar', provider: 'Perplexity', tokens_input: 800000, tokens_output: 400000, calls_made: 6200, avg_response_time_ms: 1500, cost_per_1k_input: 0.005, cost_per_1k_output: 0.015, total_cost: 10.00, last_used: '2025-11-04T13:45:00', status: 'active' },
        { id: 'model_004', name: 'Groq Llama', provider: 'Groq', tokens_input: 500000, tokens_output: 250000, calls_made: 4100, avg_response_time_ms: 450, cost_per_1k_input: 0.001, cost_per_1k_output: 0.002, total_cost: 1.00, last_used: '2025-11-04T12:20:00', status: 'active' }
    ],
    generatedImages: [
        { id: 'img_001', filename: 'landscape_mountain_001.jpg', model: 'DALL-E 3', status: 'completed', size_mb: 2.4, created_date: '2025-11-04T10:30:00', generation_time_ms: 8500, resolution: '1024x1024', prompt: 'Mountain landscape with lake' },
        { id: 'img_002', filename: 'portrait_person_001.jpg', model: 'Midjourney', status: 'completed', size_mb: 1.8, created_date: '2025-11-04T09:15:00', generation_time_ms: 12000, resolution: '1024x1024', prompt: 'Professional portrait' },
        { id: 'img_003', filename: 'abstract_art_001.jpg', model: 'DALL-E 3', status: 'completed', size_mb: 3.1, created_date: '2025-11-04T08:45:00', generation_time_ms: 9200, resolution: '1024x1024', prompt: 'Abstract colorful art' },
        { id: 'img_004', filename: 'cityscape_night_001.jpg', model: 'Stable Diffusion', status: 'completed', size_mb: 2.7, created_date: '2025-11-03T22:30:00', generation_time_ms: 6500, resolution: '1024x1024', prompt: 'Night cityscape with lights' },
        { id: 'img_005', filename: 'nature_forest_001.jpg', model: 'Midjourney', status: 'completed', size_mb: 2.2, created_date: '2025-11-03T21:15:00', generation_time_ms: 11000, resolution: '1024x1024', prompt: 'Dense forest with sunlight' },
        { id: 'img_006', filename: 'tech_circuit_001.jpg', model: 'DALL-E 3', status: 'pending', size_mb: 0, created_date: '2025-11-04T16:00:00', generation_time_ms: 0, resolution: '1024x1024', prompt: 'Technology circuit board' }
    ],
    dataGenTemplates: [
        { name: 'Customers', columns: ['first_name', 'last_name', 'email', 'phone', 'company', 'country'] },
        { name: 'Products', columns: ['product_id', 'name', 'category', 'price', 'stock', 'description'] },
        { name: 'Orders', columns: ['order_id', 'customer_id', 'order_date', 'amount', 'status', 'shipping_address'] },
        { name: 'Employees', columns: ['employee_id', 'first_name', 'last_name', 'email', 'department', 'salary', 'hire_date'] },
        { name: 'Transactions', columns: ['transaction_id', 'date', 'amount', 'type', 'status', 'description'] }
    ],
    generatedData: null,
    selectedKeyId: null,
    selectedModelId: null,
    selectedImageId: null
};

// Enhanced Component Library Data
const componentLibrary = {
    interactive: [
        { id: 'music_player', name: 'Music Player', type: 'music_player', icon: '🎵' },
        { id: 'btn_group', name: 'Button Group', type: 'button_group', icon: '🔢' },
        { id: 'radio_group', name: 'Radio Group', type: 'radio_group', icon: '⭕' },
        { id: 'checkbox_group', name: 'Checkbox Group', type: 'checkbox_group', icon: '☑️' },
        { id: 'slider_interactive', name: 'Interactive Slider', type: 'slider', icon: '↔️' },
        { id: 'rating', name: 'Star Rating', type: 'rating', icon: '⭐' }
    ],
    custom: [
        { id: 'custom_code', name: 'Custom Code', type: 'custom_code', icon: '💻' },
        { id: 'uiverse_import', name: 'Browse UIverse', type: 'uiverse_import', icon: '🌐' }
    ],
    buttons: [
        { id: 'btn_primary', name: 'Primary Button', type: 'button', variant: 'primary' },
        { id: 'btn_secondary', name: 'Secondary Button', type: 'button', variant: 'secondary' },
        { id: 'btn_ghost', name: 'Ghost Button', type: 'button', variant: 'ghost' },
        { id: 'btn_destructive', name: 'Destructive Button', type: 'button', variant: 'destructive' },
        { id: 'btn_icon', name: 'Icon Button', type: 'button', variant: 'icon' }
    ],
    forms: [
        { id: 'input_text', name: 'Text Input', type: 'input', inputType: 'text' },
        { id: 'input_email', name: 'Email Input', type: 'input', inputType: 'email' },
        { id: 'input_search', name: 'Search Input', type: 'input', inputType: 'search' },
        { id: 'input_password', name: 'Password Input', type: 'input', inputType: 'password' },
        { id: 'textarea', name: 'Text Area', type: 'textarea' },
        { id: 'input_number', name: 'Number Input', type: 'input', inputType: 'number' },
        { id: 'input_date', name: 'Date Picker', type: 'input', inputType: 'date' }
    ],
    selection: [
        { id: 'select', name: 'Dropdown/Select', type: 'select' },
        { id: 'checkbox', name: 'Checkbox', type: 'checkbox' },
        { id: 'radio', name: 'Radio Button', type: 'radio' },
        { id: 'toggle', name: 'Toggle Switch', type: 'toggle' },
        { id: 'multiselect', name: 'Multi-Select', type: 'multiselect' }
    ],
    display: [
        { id: 'stat_card', name: 'Stat Card', type: 'stat_card' },
        { id: 'info_card', name: 'Info Card', type: 'card' },
        { id: 'badge', name: 'Badge', type: 'badge' },
        { id: 'alert', name: 'Alert', type: 'alert' },
        { id: 'progress', name: 'Progress Bar', type: 'progress' }
    ],
    data: [
        { id: 'table', name: 'Data Table', type: 'table' },
        { id: 'list', name: 'List', type: 'list' }
    ],
    charts: [
        { id: 'chart_line', name: 'Line Chart', type: 'chart', chartType: 'line' },
        { id: 'chart_bar', name: 'Bar Chart', type: 'chart', chartType: 'bar' },
        { id: 'chart_pie', name: 'Pie Chart', type: 'chart', chartType: 'pie' }
    ],
    media: [
        { id: 'image', name: 'Image', type: 'image' },
        { id: 'gallery', name: 'Image Gallery', type: 'gallery' }
    ],
    layout: [
        { id: 'container', name: 'Container', type: 'container' },
        { id: 'divider', name: 'Divider', type: 'divider' },
        { id: 'spacer', name: 'Spacer', type: 'spacer' }
    ]
};

// Utility Functions
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function formatNumber(num) {
    return new Intl.NumberFormat('en-US').format(num);
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatDateTime(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleString('en-US', { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
}

function getDaysUntilExpiry(expiryDate) {
    const expiry = new Date(expiryDate);
    const today = new Date();
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getStatusColor(status) {
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

// Initialize default views
function initializeDefaultViews() {
    state.views = {
        analytics: [
            { id: 'comp_1', type: 'stat_card', x: 0, y: 0, width: 280, height: 160, content: { title: 'Total Users', value: '12,543', trend: '+12.5%' }, size: 'medium', variant: 'primary' },
            { id: 'comp_2', type: 'stat_card', x: 300, y: 0, width: 280, height: 160, content: { title: 'Revenue', value: '$45,231', trend: '+8.2%' }, size: 'medium', variant: 'primary' },
            { id: 'comp_3', type: 'stat_card', x: 600, y: 0, width: 280, height: 160, content: { title: 'Active Sessions', value: '1,892', trend: '+23.1%' }, size: 'medium', variant: 'primary' },
            { id: 'comp_4', type: 'stat_card', x: 900, y: 0, width: 280, height: 160, content: { title: 'Conversion Rate', value: '3.24%', trend: '+2.4%' }, size: 'medium', variant: 'primary' },
            { id: 'comp_5', type: 'chart', x: 0, y: 190, width: 880, height: 400, content: { title: 'Analytics Overview', chartType: 'line' }, size: 'large', variant: 'primary' },
            { id: 'comp_6', type: 'card', x: 910, y: 190, width: 370, height: 400, content: { title: 'Recent Activity', text: 'View detailed analytics and user activity logs.' }, size: 'medium', variant: 'primary' }
        ],
        data_management: [
            { id: 'comp_7', type: 'button', x: 0, y: 0, width: 180, height: 50, content: { text: 'Import Data' }, size: 'medium', variant: 'primary' },
            { id: 'comp_8', type: 'button', x: 200, y: 0, width: 180, height: 50, content: { text: 'Export Data' }, size: 'medium', variant: 'secondary' },
            { id: 'comp_9', type: 'table', x: 0, y: 70, width: 1200, height: 500, content: { title: 'Data Records' }, size: 'large', variant: 'primary' }
        ],
        cms: [
            { id: 'comp_10', type: 'input', x: 0, y: 0, width: 400, height: 50, content: { label: 'Page Title', placeholder: 'Enter page title' }, size: 'medium', variant: 'primary', inputType: 'text' },
            { id: 'comp_11', type: 'textarea', x: 0, y: 70, width: 600, height: 200, content: { label: 'Content', placeholder: 'Enter content here...' }, size: 'large', variant: 'primary' },
            { id: 'comp_12', type: 'button', x: 0, y: 290, width: 140, height: 50, content: { text: 'Publish' }, size: 'medium', variant: 'primary' },
            { id: 'comp_13', type: 'button', x: 160, y: 290, width: 140, height: 50, content: { text: 'Save Draft' }, size: 'medium', variant: 'secondary' }
        ],
        key_manager: [
            { id: 'comp_14', type: 'alert', x: 0, y: 0, width: 800, height: 80, content: { text: 'Keep your API keys secure. Never share them publicly.' }, size: 'medium', variant: 'warning' },
            { id: 'comp_15', type: 'input', x: 0, y: 100, width: 500, height: 50, content: { label: 'API Key Name', placeholder: 'Enter key name' }, size: 'medium', variant: 'primary', inputType: 'text' },
            { id: 'comp_16', type: 'button', x: 0, y: 170, width: 180, height: 50, content: { text: 'Generate Key' }, size: 'medium', variant: 'primary' }
        ],
        ai_manager: [
            { id: 'comp_17', type: 'select', x: 0, y: 0, width: 300, height: 50, content: { label: 'AI Model', options: ['GPT-4', 'Claude', 'Gemini'] }, size: 'medium', variant: 'primary' },
            { id: 'comp_18', type: 'stat_card', x: 0, y: 70, width: 280, height: 160, content: { title: 'Requests', value: '8,432', trend: '+15.3%' }, size: 'medium', variant: 'primary' },
            { id: 'comp_19', type: 'stat_card', x: 300, y: 70, width: 280, height: 160, content: { title: 'Tokens Used', value: '2.4M', trend: '+8.7%' }, size: 'medium', variant: 'primary' }
        ],
        image_gen: [
            { id: 'comp_20', type: 'input', x: 0, y: 0, width: 600, height: 50, content: { label: 'Prompt', placeholder: 'Describe the image you want to generate' }, size: 'large', variant: 'primary', inputType: 'text' },
            { id: 'comp_21', type: 'button', x: 0, y: 70, width: 180, height: 50, content: { text: 'Generate' }, size: 'medium', variant: 'primary' },
            { id: 'comp_22', type: 'gallery', x: 0, y: 140, width: 900, height: 400, content: { title: 'Generated Images' }, size: 'large', variant: 'primary' }
        ],
        mcp: [
            { id: 'comp_23', type: 'toggle', x: 0, y: 0, width: 200, height: 50, content: { label: 'Enable MCP' }, size: 'medium', variant: 'primary' },
            { id: 'comp_24', type: 'card', x: 0, y: 70, width: 500, height: 200, content: { title: 'MCP Configuration', text: 'Configure your MCP settings and connections.' }, size: 'medium', variant: 'primary' }
        ],
        data_generator: [
            { id: 'comp_25', type: 'card', x: 0, y: 0, width: 1200, height: 600, content: { title: 'Data Generator', text: 'Generate custom data sets with headers and rows.' }, size: 'large', variant: 'primary' }
        ],
        ai_coding_agent: [],
        chatbot: [
            { id: 'chat_intro', type: 'card', x: 0, y: 0, width: 900, height: 100, content: { title: 'Chatbot', text: 'Chat with the in-house assistant. Use Enter to send.' }, size: 'medium', variant: 'primary' },
            { id: 'chat_log', type: 'custom_code', x: 0, y: 110, width: 900, height: 420, content: { html: '<div id="chat_log" class="chat-log"></div>' }, size: 'large', variant: 'primary' },
            { id: 'chat_input', type: 'input', x: 0, y: 540, width: 700, height: 50, content: { label: 'Message', placeholder: 'e.g., add stat card to Analytics' }, size: 'medium', variant: 'primary', inputType: 'text' },
            { id: 'chat_send', type: 'button', x: 720, y: 540, width: 180, height: 50, content: { text: 'Send' }, size: 'medium', variant: 'primary' }
        ]
    };
}

// Chatbot State
let chatbotState = {
    messages: [
        { id: 'chat_0', sender: 'bot', text: 'Welcome! 👋 I\'m here to help. Ask me anything about this dashboard or any other questions!', timestamp: new Date().toISOString() }
    ]
};

// AI Coding Agent State
let aiAgentState = {
    messages: [
        { id: 'msg_0', sender: 'ai', text: 'Hello! I\'m your AI Coding Master. I can help you modify the dashboard, add components, create new pages, and much more. Try asking me to "Add a button to the Analytics page" or "Create a new menu item called Reports".', timestamp: new Date().toISOString() }
    ],
    apiConfig: {
        endpoint: '',
        model: '',
        provider: '',
        apiKey: ''
    },
    changeHistory: [],
    pendingAction: null
};

// Initialize app - ENHANCED with error handling
function init() {
    console.log('Initializing Keyholder Dashboard...');
    
    try {
        // Ensure DOM elements exist
        const sidebar = document.getElementById('sidebar');
        const contentArea = document.getElementById('contentArea');
        const sidebarNav = document.getElementById('sidebarNav');
        
        if (!sidebar || !contentArea || !sidebarNav) {
            console.error('Required DOM elements not found!');
            console.log('Sidebar:', sidebar, 'ContentArea:', contentArea, 'SidebarNav:', sidebarNav);
            return;
        }
        
        console.log('DOM elements found, initializing...');
        
        // Make sidebar and content visible immediately
        sidebar.style.display = 'flex';
        sidebar.style.visibility = 'visible';
        sidebar.style.opacity = '1';
        
        // Initialize state
        initializeDefaultViews();
        console.log('Default views initialized');
        
        // Render sidebar
        renderSidebar();
        console.log('Sidebar rendered');
        
        // Render component library
        renderComponentLibrary();
        console.log('Component library rendered');
        
        // Remove loading state immediately
        const loadingState = document.getElementById('loadingState');
        if (loadingState) {
            loadingState.style.display = 'none';
            setTimeout(() => loadingState.remove(), 0);
            console.log('Loading state removed');
        }
        
        // Load default view
        switchView('analytics');
        console.log('Switched to analytics view');
        
        // Verify render
        setTimeout(() => {
            const menuItems = document.querySelectorAll('.menu-item');
            console.log(`Verification: ${menuItems.length} menu items rendered`);
            if (menuItems.length === 0) {
                console.error('Menu items not rendering! Re-attempting...');
                renderSidebar();
            }
        }, 100);
        
    } catch (error) {
        console.error('Initialization error:', error);
        // Show error to user
        const contentArea = document.getElementById('contentArea');
        if (contentArea) {
            contentArea.innerHTML = `
                <div style="padding: 48px; text-align: center; color: #FFFFFF; background: #000000; min-height: 100vh;">
                    <h2 style="color: #EF4444; margin-bottom: 16px;">⚠️ Initialization Error</h2>
                    <p style="color: #CCCCCC; margin-bottom: 24px;">${error.message}</p>
                    <button class="btn btn-primary" onclick="location.reload()" style="padding: 12px 24px; background: #3B82F6; color: white; border: none; border-radius: 8px; cursor: pointer;">🔄 Reload Dashboard</button>
                </div>
            `;
        }
    }
}

// Render Management Views
function renderManagementView() {
    const contentArea = document.getElementById('contentArea');
    
    if (!contentArea) {
        console.error('Content area not found!');
        return;
    }
    
    // Clear loading state
    const loadingState = document.getElementById('loadingState');
    if (loadingState) {
        loadingState.remove();
        console.log('Loading state removed in renderManagementView');
    }
    
    // Force clear any existing content first
    contentArea.innerHTML = '';
    contentArea.style.position = 'relative';
    contentArea.style.display = 'block';
    contentArea.style.visibility = 'visible';
    contentArea.style.backgroundColor = '#0a0a0a';
    contentArea.style.color = '#FFFFFF';
    contentArea.classList.remove('edit-mode');
    
    switch(state.currentView) {
        case 'analytics':
            renderAnalytics();
            break;
        case 'key_manager':
            renderKeyManager();
            break;
        case 'ai_manager':
            renderAIManager();
            break;
        case 'image_gen':
            renderImageManager();
            break;
        case 'data_generator':
            renderDataGenerator();
            break;
        case 'ai_coding_agent':
            console.log('Rendering AI Coding Agent page');
            renderAICodingAgent();
            console.log('AI Coding Agent page rendered');
            break;
        case 'chatbot':
            renderChatbot();
            break;
        case 'cms':
            renderCMS();
            break;
        case 'data_management':
            renderDataManagement();
            break;
        case 'mcp':
            renderMCP();
            break;
        default:
            if (state.editMode) {
                renderContentArea();
            } else {
                contentArea.innerHTML = '<div style="padding: 48px; text-align: center; color: var(--text-muted);"><h3>No content available</h3></div>';
            }
    }
}

// Render sidebar
function renderSidebar() {
    const nav = document.getElementById('sidebarNav');
    
    // Add click handlers to static menu items if they exist
    const staticMenuItems = nav.querySelectorAll('.menu-item');
    if (staticMenuItems.length > 0 && staticMenuItems.length === state.menuItems.length) {
        console.log('Adding click handlers to static menu items');
        staticMenuItems.forEach((item, index) => {
            const menuItem = state.menuItems[index];
            if (menuItem) {
                item.onclick = () => switchView(menuItem.id);
            }
        });
        return; // Keep static items
    }
    
    // Otherwise, render dynamically
    nav.innerHTML = state.menuItems.map(item => `
        <div class="menu-item ${item.id === state.currentView ? 'active' : ''}" 
             onclick="switchView('${item.id}')" 
             data-id="${item.id}">
            <span class="icon">${item.icon}</span>
            <span>${item.label}</span>
            ${item.id !== 'analytics' && item.id !== 'data_management' && item.id !== 'cms' ? 
                `<span class="delete-menu" onclick="event.stopPropagation(); deleteMenuItem('${item.id}')">🗑️</span>` : ''}
        </div>
    `).join('');
}

// Render component library
function renderComponentLibrary() {
    const libraryContent = document.getElementById('libraryContent');
    const categories = [
        { name: 'Interactive', icon: '⚡', items: componentLibrary.interactive },
        { name: 'Custom Code', icon: '💻', items: componentLibrary.custom },
        { name: 'Buttons', icon: '🔘', items: componentLibrary.buttons },
        { name: 'Forms', icon: '📝', items: componentLibrary.forms },
        { name: 'Selection', icon: '☑️', items: componentLibrary.selection },
        { name: 'Data Display', icon: '📊', items: componentLibrary.display },
        { name: 'Data Tables', icon: '📋', items: componentLibrary.data },
        { name: 'Charts', icon: '📈', items: componentLibrary.charts },
        { name: 'Media', icon: '🖼️', items: componentLibrary.media },
        { name: 'Layout', icon: '📐', items: componentLibrary.layout }
    ];

    libraryContent.innerHTML = categories.map(category => `
        <div class="library-category">
            <div class="category-header" onclick="toggleCategory(this)">
                <span class="category-icon">${category.icon}</span>
                <span class="category-name">${category.name}</span>
                <span class="category-toggle">▼</span>
            </div>
            <div class="category-items">
                ${category.items.map(item => {
                    const itemHtml = `
                        <div class="component-item" draggable="true" 
                             onclick="${item.type === 'custom_code' ? 'openCustomCodeModal()' : item.type === 'uiverse_import' ? 'openUIverseModal()' : ''}"
                             ondragstart="onComponentDragStart(event, '${item.type}', '${item.variant || 'primary'}', '${item.inputType || ''}', '${item.chartType || ''}')">
                            <span class="item-name">${item.icon ? item.icon + ' ' : ''}${item.name}</span>
                        </div>
                    `;
                    return itemHtml;
                }).join('')}
            </div>
        </div>
    `).join('');
}

// Toggle category
function toggleCategory(header) {
    const category = header.parentElement;
    const items = category.querySelector('.category-items');
    const toggle = header.querySelector('.category-toggle');
    
    if (items.style.display === 'none') {
        items.style.display = 'block';
        toggle.textContent = '▼';
    } else {
        items.style.display = 'none';
        toggle.textContent = '▶';
    }
}

// Switch view
function switchView(viewId) {
    state.currentView = viewId;
    state.editMode = false;
    document.getElementById('toggleEditBtn').classList.remove('active');
    document.getElementById('editBtnText').textContent = 'Edit Mode';
    
    const menuItem = state.menuItems.find(item => item.id === viewId);
    document.getElementById('contentTitle').textContent = menuItem.label;
    
    // Update active menu item
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.id === viewId) {
            item.classList.add('active');
        }
    });
    
    // Check if this is a management view
    const managementViews = ['analytics', 'key_manager', 'ai_manager', 'image_gen', 'data_generator', 'cms', 'data_management', 'mcp'];
    if (managementViews.includes(viewId)) {
        renderManagementView();
    } else {
        renderContentArea();
    }
}

// Render content area
function renderContentArea() {
    const contentArea = document.getElementById('contentArea');
    const components = state.views[state.currentView] || [];
    
    if (!state.editMode) {
        contentArea.innerHTML = components.map(comp => renderComponent(comp)).join('');
    } else {
        contentArea.innerHTML = components.map(comp => renderEditableComponent(comp)).join('');
        setupDragAndDrop();
    }
}

// Render component
function renderComponent(comp) {
    const style = `position: absolute; left: ${comp.x}px; top: ${comp.y}px; width: ${comp.width}px; min-height: ${comp.height}px;`;
    
    switch (comp.type) {
        case 'stat_card':
            return `<div class="component component-stat-card" style="${style}">
                <div class="stat-label">${comp.content.title}</div>
                <div class="stat-value">${comp.content.value}</div>
                <div class="stat-trend">${comp.content.trend}</div>
            </div>`;
        
        case 'button':
            return `<div class="component component-button" style="${style}" ${comp.id ? `data-id="${comp.id}"` : ''}>
                <button class="btn btn-${comp.variant} btn-${comp.size}" ${comp.id === 'chat_send' ? 'id="chat_send_btn" onclick="handleChatSend()"' : ''}>${comp.content.text}</button>
            </div>`;
        
        case 'input':
            return `<div class="component component-input" style="${style}" ${comp.id ? `data-id="${comp.id}"` : ''}>
                <label class="input-label">${comp.content.label}</label>
                <input type="${comp.inputType}" class="form-input input-${comp.size}" placeholder="${comp.content.placeholder}" ${comp.id === 'chat_input' ? 'id="chat_input_field" onkeydown="if(event.key==='Enter'){handleChatSend()}"' : ''}>
            </div>`;
        
        case 'textarea':
            return `<div class="component component-textarea" style="${style}">
                <label class="input-label">${comp.content.label}</label>
                <textarea class="form-input textarea-${comp.size}" placeholder="${comp.content.placeholder}" rows="6"></textarea>
            </div>`;
        
        case 'select':
            return `<div class="component component-select" style="${style}">
                <label class="input-label">${comp.content.label}</label>
                <select class="form-input select-${comp.size}">
                    ${(comp.content.options || ['Option 1', 'Option 2', 'Option 3']).map(opt => 
                        `<option>${opt}</option>`).join('')}
                </select>
            </div>`;
        
        case 'checkbox':
            return `<div class="component component-checkbox" style="${style}">
                <label class="checkbox-label">
                    <input type="checkbox" class="checkbox-input">
                    <span>${comp.content.label || 'Checkbox'}</span>
                </label>
            </div>`;
        
        case 'radio':
            return `<div class="component component-radio" style="${style}">
                <label class="radio-label">
                    <input type="radio" name="radio-${comp.id}" class="radio-input">
                    <span>${comp.content.label || 'Radio Button'}</span>
                </label>
            </div>`;
        
        case 'toggle':
            return `<div class="component component-toggle" style="${style}">
                <label class="toggle-label">
                    <span>${comp.content.label || 'Toggle'}</span>
                    <input type="checkbox" class="toggle-input">
                    <span class="toggle-slider"></span>
                </label>
            </div>`;
        
        case 'card':
            return `<div class="component component-card" style="${style}">
                <h3>${comp.content.title}</h3>
                <p>${comp.content.text}</p>
            </div>`;
        
        case 'alert':
            return `<div class="component component-alert alert-${comp.variant}" style="${style}">
                <span class="alert-icon">ℹ️</span>
                <span>${comp.content.text}</span>
            </div>`;
        
        case 'badge':
            return `<div class="component component-badge" style="${style}">
                <span class="badge badge-${comp.variant}">${comp.content.text || 'Badge'}</span>
            </div>`;
        
        case 'progress':
            return `<div class="component component-progress" style="${style}">
                <div class="progress-bar">
                    <div class="progress-fill" style="width: ${comp.content.value || 60}%"></div>
                </div>
            </div>`;
        
        case 'table':
            return `<div class="component component-table" style="${style}">
                <h3>${comp.content.title}</h3>
                <div class="table-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Item 1</td><td>Active</td><td>2025-01-15</td><td>$1,234</td></tr>
                            <tr><td>Item 2</td><td>Pending</td><td>2025-01-16</td><td>$2,345</td></tr>
                            <tr><td>Item 3</td><td>Active</td><td>2025-01-17</td><td>$3,456</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>`;
        
        case 'list':
            return `<div class="component component-list" style="${style}">
                <h3>${comp.content.title || 'List'}</h3>
                <ul class="styled-list">
                    <li>List item 1</li>
                    <li>List item 2</li>
                    <li>List item 3</li>
                    <li>List item 4</li>
                </ul>
            </div>`;
        
        case 'chart':
            return `<div class="component component-chart" style="${style}">
                <h3>${comp.content.title}</h3>
                <div class="chart-placeholder">
                    📊 ${comp.content.chartType || 'Line'} Chart
                </div>
            </div>`;
        
        case 'image':
            return `<div class="component component-image" style="${style}">
                <div class="image-placeholder">🖼️ Image</div>
            </div>`;
        
        case 'gallery':
            return `<div class="component component-gallery" style="${style}">
                <h3>${comp.content.title}</h3>
                <div class="gallery-grid">
                    <div class="gallery-item">🖼️</div>
                    <div class="gallery-item">🖼️</div>
                    <div class="gallery-item">🖼️</div>
                    <div class="gallery-item">🖼️</div>
                </div>
            </div>`;
        
        case 'container':
            return `<div class="component component-container" style="${style}">
                <div class="container-box">Container</div>
            </div>`;
        
        case 'divider':
            return `<div class="component component-divider" style="${style}">
                <hr class="divider-line">
            </div>`;
        
        case 'spacer':
            return `<div class="component component-spacer" style="${style}"></div>`;
        
        case 'music_player':
            return `<div class="component component-music-player" style="${style}">
                <h3>🎵 Music Player</h3>
                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px; margin-top: 12px;">
                    <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px;">Now Playing: Radio Station</div>
                    <div style="display: flex; gap: 8px; justify-content: center; margin: 16px 0;">
                        <button class="btn btn-sm btn-secondary" onclick="playPrevious()">⏪</button>
                        <button class="btn btn-sm btn-primary" onclick="togglePlay(this)">▶️ Play</button>
                        <button class="btn btn-sm btn-secondary" onclick="playNext()">⏩</button>
                    </div>
                    <input type="range" min="0" max="100" value="50" style="width: 100%;" onchange="setVolume(this.value)">
                    <div style="font-size: 12px; color: var(--text-secondary); margin-top: 8px; text-align: center;">Volume: 50%</div>
                </div>
            </div>`;
        
        case 'button_group':
            return `<div class="component component-button-group" style="${style}">
                <h3>Button Group</h3>
                <div style="display: flex; gap: 8px; margin-top: 12px;">
                    <button class="btn btn-secondary" onclick="selectOption(this, 1)">Option 1</button>
                    <button class="btn btn-secondary" onclick="selectOption(this, 2)">Option 2</button>
                    <button class="btn btn-secondary" onclick="selectOption(this, 3)">Option 3</button>
                </div>
            </div>`;
        
        case 'radio_group':
            return `<div class="component component-radio-group" style="${style}">
                <h3>Radio Group</h3>
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                    <label class="radio-label"><input type="radio" name="radio-${comp.id}" value="1" onchange="radioChanged(this)"> Option 1</label>
                    <label class="radio-label"><input type="radio" name="radio-${comp.id}" value="2" onchange="radioChanged(this)"> Option 2</label>
                    <label class="radio-label"><input type="radio" name="radio-${comp.id}" value="3" onchange="radioChanged(this)"> Option 3</label>
                </div>
            </div>`;
        
        case 'checkbox_group':
            return `<div class="component component-checkbox-group" style="${style}">
                <h3>Checkbox Group</h3>
                <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
                    <label class="checkbox-label"><input type="checkbox" value="1" onchange="checkboxChanged(this)"> Option 1</label>
                    <label class="checkbox-label"><input type="checkbox" value="2" onchange="checkboxChanged(this)"> Option 2</label>
                    <label class="checkbox-label"><input type="checkbox" value="3" onchange="checkboxChanged(this)"> Option 3</label>
                </div>
            </div>`;
        
        case 'slider':
            return `<div class="component component-slider" style="${style}">
                <h3>Interactive Slider</h3>
                <div style="margin-top: 12px;">
                    <input type="range" min="0" max="100" value="50" style="width: 100%;" oninput="sliderChanged(this)">
                    <div style="text-align: center; margin-top: 8px; font-size: 14px; font-weight: 600;">Value: <span id="slider-value-${comp.id}">50</span></div>
                </div>
            </div>`;
        
        case 'rating':
            return `<div class="component component-rating" style="${style}">
                <h3>Star Rating</h3>
                <div style="display: flex; gap: 4px; margin-top: 12px; font-size: 24px;" id="rating-${comp.id}">
                    <span style="cursor: pointer;" onclick="setRating(1, '${comp.id}')">☆</span>
                    <span style="cursor: pointer;" onclick="setRating(2, '${comp.id}')">☆</span>
                    <span style="cursor: pointer;" onclick="setRating(3, '${comp.id}')">☆</span>
                    <span style="cursor: pointer;" onclick="setRating(4, '${comp.id}')">☆</span>
                    <span style="cursor: pointer;" onclick="setRating(5, '${comp.id}')">☆</span>
                </div>
                <div style="margin-top: 8px; font-size: 14px; color: var(--text-secondary);">Rating: <span id="rating-value-${comp.id}">0</span>/5</div>
            </div>`;
        
        case 'custom_code':
            const customId = `custom_${comp.id}`;
            // Inject custom CSS
            if (comp.content.css) {
                const styleId = `style_${comp.id}`;
                if (!document.getElementById(styleId)) {
                    const style = document.createElement('style');
                    style.id = styleId;
                    style.textContent = comp.content.css;
                    document.head.appendChild(style);
                }
            }
            return `<div class="component component-custom-code" style="${style}" id="${customId}">
                ${comp.content.html || '<p>No content</p>'}
            </div>`;
        
        default:
            return `<div class="component" style="${style}">Unknown Component</div>`;
    }
}

// Render editable component
function renderEditableComponent(comp) {
    const html = renderComponent(comp);
    return html.replace(
        'class="component',
        `class="component editable" 
         data-id="${comp.id}" 
         onclick="selectComponent('${comp.id}')" 
         draggable="true" 
         ondragstart="onComponentMove(event, '${comp.id}')"`
    );
}

// Toggle edit mode
function toggleEditMode() {
    state.editMode = !state.editMode;
    const contentArea = document.getElementById('contentArea');
    const editBtn = document.getElementById('editBtnText');
    const toggleBtn = document.getElementById('toggleEditBtn');
    
    if (state.editMode) {
        contentArea.classList.add('edit-mode');
        editBtn.textContent = 'View Mode';
        toggleBtn.classList.add('active');
    } else {
        contentArea.classList.remove('edit-mode');
        editBtn.textContent = 'Edit Mode';
        toggleBtn.classList.remove('active');
        closeCustomizationPanel();
    }
    
    renderContentArea();
}

// Toggle component library
function toggleComponentLibrary() {
    state.componentsLibraryOpen = !state.componentsLibraryOpen;
    const library = document.getElementById('componentLibrary');
    
    if (state.componentsLibraryOpen) {
        library.classList.add('open');
    } else {
        library.classList.remove('open');
    }
}

// Component drag and drop
function onComponentDragStart(event, type, variant, inputType, chartType) {
    event.dataTransfer.setData('componentType', type);
    event.dataTransfer.setData('componentVariant', variant);
    event.dataTransfer.setData('inputType', inputType);
    event.dataTransfer.setData('chartType', chartType);
    
    // Special handling for custom code and uiverse
    if (type === 'custom_code') {
        openCustomCodeModal();
        event.preventDefault();
    } else if (type === 'uiverse_import') {
        openUIverseModal();
        event.preventDefault();
    }
}

function setupDragAndDrop() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    contentArea.addEventListener('drop', (e) => {
        e.preventDefault();
        const type = e.dataTransfer.getData('componentType');
        const variant = e.dataTransfer.getData('componentVariant');
        const inputType = e.dataTransfer.getData('inputType');
        const chartType = e.dataTransfer.getData('chartType');
        
        if (type) {
            const rect = contentArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            addComponent(type, variant, x, y, inputType, chartType);
        }
    });
}

// Add component
function addComponent(type, variant, x, y, inputType, chartType) {
    const newComponent = {
        id: `comp_${Date.now()}`,
        type: type,
        x: Math.max(0, x),
        y: Math.max(0, y),
        width: getDefaultWidth(type),
        height: getDefaultHeight(type),
        content: getDefaultContent(type),
        size: 'medium',
        variant: variant || 'primary',
        inputType: inputType || 'text',
        chartType: chartType || 'line'
    };
    
    if (!state.views[state.currentView]) {
        state.views[state.currentView] = [];
    }
    
    state.views[state.currentView].push(newComponent);
    renderContentArea();
}

// Add component to a specific view (used by Chatbot)
function addComponentToView(viewId, type) {
    const newComponent = {
        id: `comp_${Date.now()}`,
        type,
        x: 0,
        y: (state.views[viewId]?.length || 0) * 70,
        width: getDefaultWidth(type),
        height: getDefaultHeight(type),
        content: getDefaultContent(type),
        size: 'medium',
        variant: 'primary',
        inputType: 'text',
        chartType: 'line'
    };
    state.views[viewId] = state.views[viewId] || [];
    state.views[viewId].push(newComponent);
}

// Resolve a view id by label or id
function resolveViewId(nameOrId) {
    if (!nameOrId) return state.currentView;
    const needle = String(nameOrId).trim().toLowerCase();
    const direct = state.menuItems.find(m => m.id.toLowerCase() === needle);
    if (direct) return direct.id;
    const byLabel = state.menuItems.find(m => m.label.trim().toLowerCase() === needle);
    return byLabel ? byLabel.id : state.currentView;
}

// Simple Chatbot handler: parse commands and update UI
function handleChatSend() {
    const inputEl = document.getElementById('chat_input_field');
    const logEl = document.getElementById('chat_log');
    const msg = (inputEl?.value || '').trim();
    if (!msg) return;
    appendChatMessage('you', msg);

    // Parse command
    const addMatch = msg.match(/add\s+([a-z\s_-]+?)(?:\s+to\s+([a-z\s_-]+))?$/i);
    const switchMatch = msg.match(/switch\s+to\s+([a-z\s_-]+)/i);
    const createMenuMatch = msg.match(/create\s+menu\s+([a-z\s_-]+)/i);
    const componentPhrase = addMatch?.[1]?.trim().toLowerCase();
    const targetPhrase = addMatch?.[2]?.trim();

    const typeMap = {
        'stat card': 'stat_card',
        'card': 'card',
        'chart': 'chart',
        'table': 'table',
        'input': 'input',
        'button': 'button',
        'alert': 'alert',
        'progress': 'progress',
        'gallery': 'gallery',
        'list': 'list'
    };

    let compType = typeMap[componentPhrase] || null;
    if (!compType && componentPhrase) {
        // Try simple normalization: remove spaces and compare
        const normalized = componentPhrase.replace(/\s+/g, '_');
        compType = typeMap[componentPhrase] || normalized;
    }

    const viewId = resolveViewId(targetPhrase);
    let response = '';
    if (compType) {
        addComponentToView(viewId, compType);
        response = `Added ${compType} to ${viewId}.`;
        switchView(viewId);
    } else if (switchMatch) {
        const target = resolveViewId(switchMatch[1]);
        switchView(target);
        response = `Switched to ${target}.`;
    } else if (createMenuMatch) {
        const label = createMenuMatch[1].trim();
        const newId = label.toLowerCase().replace(/\s+/g, '_');
        if (!state.menuItems.find(m => m.id === newId)) {
            state.menuItems.push({ id: newId, label: label, icon: '📁' });
            state.views[newId] = [];
            renderSidebar();
            switchView(newId);
            response = `Created menu "${label}" and opened it.`;
        } else {
            response = `Menu "${label}" already exists.`;
        }
    } else {
        response = 'Try: "add stat card to Analytics", "switch to CMS", or "create menu Reports".';
    }

    appendChatMessage('bot', response);
    if (inputEl) inputEl.value = '';
}

function appendChatMessage(sender, text) {
    const logEl = document.getElementById('chat_log');
    if (!logEl) return;
    const wrap = document.createElement('div');
    wrap.className = `chat-bubble ${sender === 'you' ? 'user' : 'bot'}`;
    wrap.textContent = text;
    logEl.appendChild(wrap);
    logEl.scrollTop = logEl.scrollHeight;
}

// Get default dimensions
function getDefaultWidth(type) {
    const widths = {
        button: 180,
        input: 300,
        textarea: 500,
        select: 250,
        checkbox: 200,
        radio: 200,
        toggle: 200,
        stat_card: 280,
        card: 400,
        alert: 600,
        badge: 120,
        progress: 400,
        table: 800,
        list: 350,
        chart: 600,
        image: 400,
        gallery: 700,
        container: 500,
        divider: 600,
        spacer: 100,
        music_player: 400,
        button_group: 400,
        radio_group: 300,
        checkbox_group: 300,
        slider: 350,
        rating: 280,
        custom_code: 450
    };
    return widths[type] || 300;
}

function getDefaultHeight(type) {
    const heights = {
        button: 50,
        input: 50,
        textarea: 150,
        select: 50,
        checkbox: 40,
        radio: 40,
        toggle: 50,
        stat_card: 160,
        card: 200,
        alert: 80,
        badge: 40,
        progress: 30,
        table: 400,
        list: 200,
        chart: 350,
        image: 300,
        gallery: 400,
        container: 200,
        divider: 2,
        spacer: 40,
        music_player: 250,
        button_group: 120,
        radio_group: 150,
        checkbox_group: 150,
        slider: 120,
        rating: 130,
        custom_code: 300
    };
    return heights[type] || 150;
}

function getDefaultContent(type) {
    const contents = {
        button: { text: 'Button' },
        input: { label: 'Input', placeholder: 'Enter text...' },
        textarea: { label: 'Text Area', placeholder: 'Enter text...' },
        select: { label: 'Select', options: ['Option 1', 'Option 2', 'Option 3'] },
        checkbox: { label: 'Checkbox' },
        radio: { label: 'Radio Button' },
        toggle: { label: 'Toggle' },
        stat_card: { title: 'Stat', value: '1,234', trend: '+12%' },
        card: { title: 'Card Title', text: 'Card content goes here.' },
        alert: { text: 'This is an alert message.' },
        badge: { text: 'Badge' },
        progress: { value: 60 },
        table: { title: 'Data Table' },
        list: { title: 'List' },
        chart: { title: 'Chart', chartType: 'line' },
        image: {},
        gallery: { title: 'Gallery' },
        container: {},
        divider: {},
        spacer: {},
        music_player: { title: 'Music Player' },
        button_group: { options: ['Option 1', 'Option 2', 'Option 3'] },
        radio_group: { options: ['Option 1', 'Option 2', 'Option 3'] },
        checkbox_group: { options: ['Option 1', 'Option 2', 'Option 3'] },
        slider: { min: 0, max: 100, value: 50 },
        rating: { value: 0 },
        custom_code: { html: '<div>Custom Component</div>', css: '', js: '' }
    };
    return contents[type] || { text: 'Component' };
}

// Select component
function selectComponent(id) {
    if (!state.editMode) return;
    
    state.selectedComponent = id;
    
    // Highlight selected component
    document.querySelectorAll('.component').forEach(comp => {
        comp.classList.remove('selected');
    });
    document.querySelector(`[data-id="${id}"]`).classList.add('selected');
    
    openCustomizationPanel(id);
}

// Open customization panel
function openCustomizationPanel(id) {
    state.customizationPanelOpen = true;
    const panel = document.getElementById('customizationPanel');
    const component = state.views[state.currentView].find(c => c.id === id);
    
    if (!component) return;
    
    const panelContent = document.getElementById('panelContent');
    panelContent.innerHTML = `
        <div class="panel-section">
            <label>Component Type</label>
            <div class="panel-value">${component.type}</div>
        </div>
        
        <div class="panel-section">
            <label>Size</label>
            <div class="size-selector">
                <button class="size-btn ${component.size === 'small' ? 'active' : ''}" 
                        onclick="updateComponentProperty('${id}', 'size', 'small')">S</button>
                <button class="size-btn ${component.size === 'medium' ? 'active' : ''}" 
                        onclick="updateComponentProperty('${id}', 'size', 'medium')">M</button>
                <button class="size-btn ${component.size === 'large' ? 'active' : ''}" 
                        onclick="updateComponentProperty('${id}', 'size', 'large')">L</button>
            </div>
        </div>
        
        ${component.type === 'button' || component.type === 'input' || component.type === 'card' ? `
            <div class="panel-section">
                <label>Text Content</label>
                <input type="text" class="panel-input" 
                       value="${component.content.text || component.content.label || component.content.title || ''}" 
                       onchange="updateComponentText('${id}', this.value)">
            </div>
        ` : ''}
        
        ${component.type === 'stat_card' ? `
            <div class="panel-section">
                <label>Title</label>
                <input type="text" class="panel-input" 
                       value="${component.content.title}" 
                       onchange="updateComponentContent('${id}', 'title', this.value)">
            </div>
            <div class="panel-section">
                <label>Value</label>
                <input type="text" class="panel-input" 
                       value="${component.content.value}" 
                       onchange="updateComponentContent('${id}', 'value', this.value)">
            </div>
        ` : ''}
        
        <div class="panel-section">
            <label>Width (px)</label>
            <input type="number" class="panel-input" 
                   value="${component.width}" 
                   onchange="updateComponentProperty('${id}', 'width', parseInt(this.value))">
        </div>
        
        <div class="panel-section">
            <label>Height (px)</label>
            <input type="number" class="panel-input" 
                   value="${component.height}" 
                   onchange="updateComponentProperty('${id}', 'height', parseInt(this.value))">
        </div>
        
        <div class="panel-section">
            <label>Variant</label>
            <select class="panel-input" onchange="updateComponentProperty('${id}', 'variant', this.value)">
                <option value="primary" ${component.variant === 'primary' ? 'selected' : ''}>Primary</option>
                <option value="secondary" ${component.variant === 'secondary' ? 'selected' : ''}>Secondary</option>
                <option value="ghost" ${component.variant === 'ghost' ? 'selected' : ''}>Ghost</option>
                <option value="destructive" ${component.variant === 'destructive' ? 'selected' : ''}>Destructive</option>
                <option value="success" ${component.variant === 'success' ? 'selected' : ''}>Success</option>
                <option value="warning" ${component.variant === 'warning' ? 'selected' : ''}>Warning</option>
                <option value="error" ${component.variant === 'error' ? 'selected' : ''}>Error</option>
            </select>
        </div>
        
        <div class="panel-section">
            <button class="btn btn-secondary btn-full" onclick="duplicateComponent('${id}')">
                📋 Duplicate
            </button>
        </div>
        
        <div class="panel-section">
            <button class="btn btn-destructive btn-full" onclick="deleteComponent('${id}')">
                🗑️ Delete
            </button>
        </div>
    `;
    
    panel.classList.add('open');
}

// Close customization panel
function closeCustomizationPanel() {
    state.customizationPanelOpen = false;
    state.selectedComponent = null;
    document.getElementById('customizationPanel').classList.remove('open');
    document.querySelectorAll('.component').forEach(comp => {
        comp.classList.remove('selected');
    });
}

// Update component property
function updateComponentProperty(id, property, value) {
    const component = state.views[state.currentView].find(c => c.id === id);
    if (component) {
        component[property] = value;
        
        // Apply size-based dimensions
        if (property === 'size') {
            const sizeMultipliers = { small: 0.75, medium: 1, large: 1.5 };
            const multiplier = sizeMultipliers[value];
            component.width = Math.round(getDefaultWidth(component.type) * multiplier);
            component.height = Math.round(getDefaultHeight(component.type) * multiplier);
        }
        
        renderContentArea();
        openCustomizationPanel(id);
    }
}

// Update component text
function updateComponentText(id, value) {
    const component = state.views[state.currentView].find(c => c.id === id);
    if (component) {
        if (component.type === 'button') {
            component.content.text = value;
        } else if (component.type === 'input') {
            component.content.label = value;
        } else if (component.type === 'card') {
            component.content.title = value;
        }
        renderContentArea();
        openCustomizationPanel(id);
    }
}

// Update component content
function updateComponentContent(id, key, value) {
    const component = state.views[state.currentView].find(c => c.id === id);
    if (component && component.content) {
        component.content[key] = value;
        renderContentArea();
    }
}

// Duplicate component
function duplicateComponent(id) {
    const component = state.views[state.currentView].find(c => c.id === id);
    if (component) {
        const newComponent = {
            ...component,
            id: `comp_${Date.now()}`,
            x: component.x + 20,
            y: component.y + 20
        };
        state.views[state.currentView].push(newComponent);
        renderContentArea();
        closeCustomizationPanel();
    }
}

// Delete component - FIXED
function deleteComponent(id) {
    if (!state.views[state.currentView]) return;
    
    const initialLength = state.views[state.currentView].length;
    state.views[state.currentView] = state.views[state.currentView].filter(c => c.id !== id);
    
    // Verify deletion
    if (state.views[state.currentView].length === initialLength) {
        showNotification('Component not found', 'error');
        return;
    }
    
    closeCustomizationPanel();
    renderContentArea();
    showNotification('Component deleted', 'success');
}

// Component move
function onComponentMove(event, id) {
    const component = state.views[state.currentView].find(c => c.id === id);
    if (!component) return;
    
    const startX = event.clientX - component.x;
    const startY = event.clientY - component.y;
    
    function moveComponent(e) {
        const contentArea = document.getElementById('contentArea');
        const rect = contentArea.getBoundingClientRect();
        component.x = Math.max(0, e.clientX - rect.left - startX);
        component.y = Math.max(0, e.clientY - rect.top - startY);
        renderContentArea();
    }
    
    function stopMove() {
        document.removeEventListener('mousemove', moveComponent);
        document.removeEventListener('mouseup', stopMove);
    }
    
    document.addEventListener('mousemove', moveComponent);
    document.addEventListener('mouseup', stopMove);
}

// Menu management
function openAddMenuModal() {
    document.getElementById('addMenuModal').classList.add('open');
    document.getElementById('menuLabel').value = '';
    document.getElementById('menuIcon').value = '';
}

function closeAddMenuModal() {
    document.getElementById('addMenuModal').classList.remove('open');
}

function addNewMenuItem() {
    const label = document.getElementById('menuLabel').value.trim();
    const icon = document.getElementById('menuIcon').value.trim();
    
    if (!label) {
        alert('Please enter a menu label');
        return;
    }
    
    const id = label.toLowerCase().replace(/\s+/g, '_');
    const newItem = { id, label, icon: icon || '📄' };
    
    state.menuItems.push(newItem);
    state.views[id] = [];
    
    renderSidebar();
    closeAddMenuModal();
    switchView(id);
}

function deleteMenuItem(id) {
    if (confirm('Are you sure you want to delete this menu item?')) {
        state.menuItems = state.menuItems.filter(item => item.id !== id);
        delete state.views[id];
        renderSidebar();
        
        if (state.currentView === id) {
            switchView('analytics');
        }
    }
}

// Analytics View
function renderAnalytics() {
    const totalKeys = state.licenseKeys.length;
    const activeKeys = state.licenseKeys.filter(k => k.status === 'active').length;
    const totalRevenue = state.licenseKeys.reduce((sum, key) => {
        const planPrices = { 'Basic': 29, 'Pro': 99, 'Enterprise': 299 };
        return sum + (planPrices[key.plan] || 0);
    }, 0);
    const totalAICost = state.aiModels.reduce((sum, m) => sum + m.total_cost, 0);
    const totalImages = state.generatedImages.length;
    const completedImages = state.generatedImages.filter(i => i.status === 'completed').length;
    
    const keysExpiringSoon = state.licenseKeys.filter(k => {
        const days = getDaysUntilExpiry(k.expiry_date);
        return days > 0 && days <= 30;
    }).length;
    
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1400px; margin: 0 auto;">
            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 24px; margin-bottom: 32px;">
                <div style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Total Revenue</div>
                    <div style="font-size: 36px; font-weight: 700; margin: 12px 0;">${formatCurrency(totalRevenue)}</div>
                    <div style="font-size: 14px; color: var(--success); font-weight: 600;">From ${totalKeys} licenses</div>
                </div>
                <div style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Active License Keys</div>
                    <div style="font-size: 36px; font-weight: 700; margin: 12px 0;">${activeKeys}</div>
                    <div style="font-size: 14px; color: var(--warning); font-weight: 600;">${keysExpiringSoon} expiring soon</div>
                </div>
                <div style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">AI Usage Cost</div>
                    <div style="font-size: 36px; font-weight: 700; margin: 12px 0;">${formatCurrency(totalAICost)}</div>
                    <div style="font-size: 14px; color: var(--info); font-weight: 600;">${state.aiModels.length} models active</div>
                </div>
                <div style="background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">Images Generated</div>
                    <div style="font-size: 36px; font-weight: 700; margin: 12px 0;">${completedImages}</div>
                    <div style="font-size: 14px; color: var(--success); font-weight: 600;">${totalImages} total</div>
                </div>
            </div>
            
            <!-- Charts Row -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 32px;">
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 16px 0; font-size: 18px;">License Key Status</h3>
                    <div style="display: flex; gap: 24px; align-items: center; justify-content: center; padding: 32px;">
                        <div style="text-align: center;">
                            <div style="width: 120px; height: 120px; border-radius: 50%; background: conic-gradient(var(--success) 0% ${(activeKeys/totalKeys)*100}%, var(--error) ${(activeKeys/totalKeys)*100}% 100%); margin: 0 auto 12px;"></div>
                            <div style="font-size: 24px; font-weight: 700;">${((activeKeys/totalKeys)*100).toFixed(0)}%</div>
                            <div style="font-size: 13px; color: var(--text-secondary);">Active</div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--success);"></div>
                                <span style="font-size: 14px;">Active: ${activeKeys}</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <div style="width: 12px; height: 12px; border-radius: 50%; background: var(--error);"></div>
                                <span style="font-size: 14px;">Expired: ${totalKeys - activeKeys}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 16px 0; font-size: 18px;">Top AI Models by Cost</h3>
                    <div style="padding: 16px 0;">
                        ${state.aiModels.sort((a, b) => b.total_cost - a.total_cost).slice(0, 5).map(model => `
                            <div style="margin-bottom: 16px;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                    <span style="font-size: 14px; font-weight: 500;">${model.name}</span>
                                    <span style="font-size: 14px; font-weight: 600;">${formatCurrency(model.total_cost)}</span>
                                </div>
                                <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                                    <div style="height: 100%; background: linear-gradient(90deg, var(--info) 0%, var(--success) 100%); width: ${(model.total_cost/totalAICost)*100}%;"></div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <!-- Recent Activity -->
            <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                <h3 style="margin: 0 0 16px 0; font-size: 18px;">Recent License Keys</h3>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead>
                            <tr style="border-bottom: 1px solid var(--border);">
                                <th style="padding: 12px; text-align: left; font-size: 13px; color: var(--text-secondary); text-transform: uppercase;">Customer</th>
                                <th style="padding: 12px; text-align: left; font-size: 13px; color: var(--text-secondary); text-transform: uppercase;">License Key</th>
                                <th style="padding: 12px; text-align: left; font-size: 13px; color: var(--text-secondary); text-transform: uppercase;">Plan</th>
                                <th style="padding: 12px; text-align: left; font-size: 13px; color: var(--text-secondary); text-transform: uppercase;">Status</th>
                                <th style="padding: 12px; text-align: left; font-size: 13px; color: var(--text-secondary); text-transform: uppercase;">Usage</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.licenseKeys.slice(0, 5).map(key => `
                                <tr style="border-bottom: 1px solid var(--border-light);">
                                    <td style="padding: 12px; font-size: 14px;">${key.customer_name}</td>
                                    <td style="padding: 12px; font-size: 14px; font-family: monospace;">${key.key}</td>
                                    <td style="padding: 12px; font-size: 14px;">${key.plan}</td>
                                    <td style="padding: 12px;">
                                        <span style="padding: 4px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; background: rgba(${key.status === 'active' ? '16, 185, 129' : '239, 68, 68'}, 0.15); color: ${getStatusColor(key.status)};">
                                            ${key.status.toUpperCase()}
                                        </span>
                                    </td>
                                    <td style="padding: 12px; font-size: 14px;">${formatNumber(key.current_usage)} / ${formatNumber(key.max_usage)}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

// Key Manager View
function renderKeyManager() {
    const contentArea = document.getElementById('contentArea');
    
    const activeKeys = state.licenseKeys.filter(k => k.status === 'active').length;
    const expiredKeys = state.licenseKeys.filter(k => k.status === 'expired').length;
    const expiringKeys = state.licenseKeys.filter(k => {
        const days = getDaysUntilExpiry(k.expiry_date);
        return days > 0 && days <= 30 && k.status === 'active';
    }).length;
    
    contentArea.innerHTML = `
        <div style="max-width: 1600px; margin: 0 auto;">
            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 32px;">
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Total Keys</div>
                    <div style="font-size: 32px; font-weight: 700;">${state.licenseKeys.length}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Active Keys</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--success);">${activeKeys}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Expiring Soon</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--warning);">${expiringKeys}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Expired Keys</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--error);">${expiredKeys}</div>
                </div>
            </div>
            
            <!-- Actions -->
            <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                <button class="btn btn-primary" onclick="openGenerateKeyModal()">✨ Generate New Key</button>
                <button class="btn btn-secondary" onclick="exportKeysCSV()">📥 Export CSV</button>
                <input type="search" placeholder="Search keys..." class="form-input" style="flex: 1; max-width: 300px;" onkeyup="filterKeys(this.value)">
            </div>
            
            <!-- Keys Table -->
            <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border); overflow: hidden;">
                <div style="overflow-x: auto; max-height: 600px;" id="keysTableContainer">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead style="position: sticky; top: 0; background: var(--bg-tertiary); z-index: 10;">
                            <tr>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Customer</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">License Key</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Plan</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Status</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Expiry Date</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Usage</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid var(--border);">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="keysTableBody">
                            ${renderKeysTableRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    `;
}

function renderKeysTableRows(filter = '') {
    const filtered = filter ? state.licenseKeys.filter(k => 
        k.customer_name.toLowerCase().includes(filter.toLowerCase()) ||
        k.key.toLowerCase().includes(filter.toLowerCase()) ||
        k.email.toLowerCase().includes(filter.toLowerCase())
    ) : state.licenseKeys;
    
    return filtered.map(key => {
        const usagePercent = (key.current_usage / key.max_usage) * 100;
        const daysLeft = getDaysUntilExpiry(key.expiry_date);
        const expiryWarning = daysLeft > 0 && daysLeft <= 30 && key.status === 'active';
        
        return `
            <tr style="border-bottom: 1px solid var(--border-light);" class="key-row">
                <td style="padding: 16px;">
                    <div style="font-size: 14px; font-weight: 500;">${key.customer_name}</div>
                    <div style="font-size: 12px; color: var(--text-secondary);">${key.email}</div>
                </td>
                <td style="padding: 16px; font-family: monospace; font-size: 13px; color: var(--text-secondary);">${key.key}</td>
                <td style="padding: 16px;">
                    <span style="padding: 4px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; background: var(--bg-tertiary); border: 1px solid var(--border);">
                        ${key.plan}
                    </span>
                </td>
                <td style="padding: 16px;">
                    <span style="padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; text-transform: uppercase; background: rgba(${key.status === 'active' ? '16, 185, 129' : key.status === 'expired' ? '239, 68, 68' : '245, 158, 11'}, 0.15); color: ${getStatusColor(key.status)};">
                        ${key.status}
                    </span>
                </td>
                <td style="padding: 16px;">
                    <div style="font-size: 14px;">${formatDate(key.expiry_date)}</div>
                    ${expiryWarning ? `<div style="font-size: 12px; color: var(--warning); font-weight: 600;">⚠️ ${daysLeft} days left</div>` : ''}
                </td>
                <td style="padding: 16px;">
                    <div style="font-size: 13px; margin-bottom: 6px;">${formatNumber(key.current_usage)} / ${formatNumber(key.max_usage)}</div>
                    <div style="height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; background: ${usagePercent > 90 ? 'var(--error)' : usagePercent > 70 ? 'var(--warning)' : 'var(--success)'}; width: ${usagePercent}%;"></div>
                    </div>
                </td>
                <td style="padding: 16px;">
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-small btn-ghost" onclick="viewKeyDetails('${key.id}')" title="View Details">👁️</button>
                        <button class="btn btn-small btn-ghost" onclick="extendKey('${key.id}')" title="Extend">📅</button>
                        <button class="btn btn-small btn-ghost" onclick="deactivateKey('${key.id}')" title="Deactivate">🔒</button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

function filterKeys(value) {
    document.getElementById('keysTableBody').innerHTML = renderKeysTableRows(value);
}

function openGenerateKeyModal() {
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Generate New License Key</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Customer Name</label>
                    <input type="text" id="newKeyCustomer" class="form-input" placeholder="Company Name">
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" id="newKeyEmail" class="form-input" placeholder="email@company.com">
                </div>
                <div class="form-group">
                    <label>Plan Tier</label>
                    <select id="newKeyPlan" class="form-input">
                        <option value="Basic">Basic - $29/mo (1,000 uses)</option>
                        <option value="Pro" selected>Pro - $99/mo (10,000 uses)</option>
                        <option value="Enterprise">Enterprise - $299/mo (50,000 uses)</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Duration</label>
                    <select id="newKeyDuration" class="form-input">
                        <option value="30">1 Month</option>
                        <option value="90">3 Months</option>
                        <option value="365" selected>1 Year</option>
                    </select>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn-primary" onclick="generateNewKey()">Generate Key</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function generateNewKey() {
    const customer = document.getElementById('newKeyCustomer').value;
    const email = document.getElementById('newKeyEmail').value;
    const plan = document.getElementById('newKeyPlan').value;
    const duration = parseInt(document.getElementById('newKeyDuration').value);
    
    if (!customer || !email) {
        alert('Please fill in all fields');
        return;
    }
    
    const keyPrefix = customer.substring(0, 4).toUpperCase().replace(/[^A-Z]/g, 'X');
    const randomKey = Math.random().toString(36).substring(2, 6).toUpperCase();
    const newKey = {
        id: `key_${Date.now()}`,
        customer_name: customer,
        email: email,
        key: `KEY-${keyPrefix}-2025-${randomKey}`,
        status: 'active',
        plan: plan,
        created_date: new Date().toISOString().split('T')[0],
        expiry_date: new Date(Date.now() + duration * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        max_usage: plan === 'Basic' ? 1000 : plan === 'Pro' ? 10000 : 50000,
        current_usage: 0,
        last_accessed: new Date().toISOString().split('T')[0],
        uses_count: 0
    };
    
    state.licenseKeys.unshift(newKey);
    document.querySelector('.modal').remove();
    renderKeyManager();
    
    // Show success notification
    showNotification(`Key generated successfully: ${newKey.key}`, 'success');
}

function viewKeyDetails(keyId) {
    const key = state.licenseKeys.find(k => k.id === keyId);
    if (!key) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>License Key Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px; margin-bottom: 20px;">
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">LICENSE KEY</div>
                    <div style="font-family: monospace; font-size: 16px; font-weight: 600; word-break: break-all;">${key.key}</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 20px;">
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Customer</div>
                        <div style="font-size: 14px; font-weight: 500;">${key.customer_name}</div>
                        <div style="font-size: 13px; color: var(--text-secondary);">${key.email}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Plan</div>
                        <div style="font-size: 14px; font-weight: 500;">${key.plan}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Created</div>
                        <div style="font-size: 14px;">${formatDate(key.created_date)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Expires</div>
                        <div style="font-size: 14px;">${formatDate(key.expiry_date)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Last Accessed</div>
                        <div style="font-size: 14px;">${formatDate(key.last_accessed)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Total Uses</div>
                        <div style="font-size: 14px;">${formatNumber(key.uses_count)}</div>
                    </div>
                </div>
                <div>
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Usage: ${formatNumber(key.current_usage)} / ${formatNumber(key.max_usage)} (${((key.current_usage/key.max_usage)*100).toFixed(1)}%)</div>
                    <div style="height: 12px; background: var(--bg-tertiary); border-radius: 6px; overflow: hidden;">
                        <div style="height: 100%; background: linear-gradient(90deg, var(--success) 0%, var(--info) 100%); width: ${(key.current_usage/key.max_usage)*100}%;"></div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function extendKey(keyId) {
    const key = state.licenseKeys.find(k => k.id === keyId);
    if (!key) return;
    
    const newExpiry = new Date(key.expiry_date);
    newExpiry.setFullYear(newExpiry.getFullYear() + 1);
    key.expiry_date = newExpiry.toISOString().split('T')[0];
    
    renderKeyManager();
    showNotification(`Key extended to ${formatDate(key.expiry_date)}`, 'success');
}

function deactivateKey(keyId) {
    const key = state.licenseKeys.find(k => k.id === keyId);
    if (!key) return;
    
    if (confirm(`Deactivate license key for ${key.customer_name}?`)) {
        key.status = 'inactive';
        renderKeyManager();
        showNotification('Key deactivated', 'success');
    }
}

function exportKeysCSV() {
    const headers = ['Customer', 'Email', 'License Key', 'Plan', 'Status', 'Created', 'Expiry', 'Usage', 'Max Usage'];
    const rows = state.licenseKeys.map(k => [
        k.customer_name, k.email, k.key, k.plan, k.status, k.created_date, k.expiry_date, k.current_usage, k.max_usage
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'license-keys.csv';
    a.click();
    showNotification('CSV exported successfully', 'success');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed; top: 20px; right: 20px; z-index: 3000;
        background: var(--bg-secondary); border: 1px solid var(--border);
        padding: 16px 20px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        display: flex; align-items: center; gap: 12px; max-width: 400px;
    `;
    
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️';
    notification.innerHTML = `<span style="font-size: 20px;">${icon}</span><span>${message}</span>`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transition = 'opacity 0.3s ease';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// AI Manager View
function renderAIManager() {
    const totalCost = state.aiModels.reduce((sum, m) => sum + m.total_cost, 0);
    const totalTokens = state.aiModels.reduce((sum, m) => sum + m.tokens_input + m.tokens_output, 0);
    const totalCalls = state.aiModels.reduce((sum, m) => sum + m.calls_made, 0);
    const avgResponseTime = state.aiModels.reduce((sum, m) => sum + m.avg_response_time_ms, 0) / state.aiModels.length;
    
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1600px; margin: 0 auto;">
            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 32px;">
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Total Cost</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--error);">${formatCurrency(totalCost)}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Total Tokens</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--info);">${(totalTokens/1000000).toFixed(2)}M</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">API Calls</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--success);">${formatNumber(totalCalls)}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Avg Response</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--warning);">${avgResponseTime.toFixed(0)}ms</div>
                </div>
            </div>
            
            <!-- Actions -->
            <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                <button class="btn btn-primary" onclick="openAddModelModal()">➕ Add AI Model</button>
                <button class="btn btn-secondary" onclick="exportAIData()">📥 Export Data</button>
            </div>
            
            <!-- AI Models Table -->
            <div style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border); overflow: hidden; margin-bottom: 32px;">
                <div style="padding: 20px; border-bottom: 1px solid var(--border);">
                    <h3 style="margin: 0; font-size: 18px;">AI Models Tracking</h3>
                </div>
                <div style="overflow-x: auto;">
                    <table style="width: 100%; border-collapse: collapse;">
                        <thead style="background: var(--bg-tertiary);">
                            <tr>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase;">Model</th>
                                <th style="padding: 16px; text-align: left; font-size: 13px; font-weight: 600; text-transform: uppercase;">Provider</th>
                                <th style="padding: 16px; text-align: right; font-size: 13px; font-weight: 600; text-transform: uppercase;">Tokens In</th>
                                <th style="padding: 16px; text-align: right; font-size: 13px; font-weight: 600; text-transform: uppercase;">Tokens Out</th>
                                <th style="padding: 16px; text-align: right; font-size: 13px; font-weight: 600; text-transform: uppercase;">Calls</th>
                                <th style="padding: 16px; text-align: right; font-size: 13px; font-weight: 600; text-transform: uppercase;">Avg Time</th>
                                <th style="padding: 16px; text-align: right; font-size: 13px; font-weight: 600; text-transform: uppercase;">Total Cost</th>
                                <th style="padding: 16px; text-align: center; font-size: 13px; font-weight: 600; text-transform: uppercase;">Status</th>
                                <th style="padding: 16px; text-align: center; font-size: 13px; font-weight: 600; text-transform: uppercase;">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${state.aiModels.map(model => `
                                <tr style="border-bottom: 1px solid var(--border-light);">
                                    <td style="padding: 16px;">
                                        <div style="font-size: 14px; font-weight: 500;">${model.name}</div>
                                        <div style="font-size: 12px; color: var(--text-secondary);">${formatDateTime(model.last_used)}</div>
                                    </td>
                                    <td style="padding: 16px; font-size: 14px;">${model.provider}</td>
                                    <td style="padding: 16px; text-align: right; font-family: monospace; font-size: 13px;">${formatNumber(model.tokens_input)}</td>
                                    <td style="padding: 16px; text-align: right; font-family: monospace; font-size: 13px;">${formatNumber(model.tokens_output)}</td>
                                    <td style="padding: 16px; text-align: right; font-family: monospace; font-size: 13px;">${formatNumber(model.calls_made)}</td>
                                    <td style="padding: 16px; text-align: right; font-size: 14px;">${model.avg_response_time_ms}ms</td>
                                    <td style="padding: 16px; text-align: right; font-size: 14px; font-weight: 600; color: var(--error);">${formatCurrency(model.total_cost)}</td>
                                    <td style="padding: 16px; text-align: center;">
                                        <span style="padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 600; text-transform: uppercase; background: rgba(16, 185, 129, 0.15); color: var(--success);">
                                            ${model.status}
                                        </span>
                                    </td>
                                    <td style="padding: 16px; text-align: center;">
                                        <button class="btn btn-small btn-ghost" onclick="viewModelDetails('${model.id}')" title="View Details">👁️</button>
                                        <button class="btn btn-small btn-ghost" onclick="deleteModel('${model.id}')" title="Delete">🗑️</button>
                                    </td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            
            <!-- Cost Analytics -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px;">Cost Breakdown by Model</h3>
                    ${state.aiModels.map(model => `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span style="font-size: 14px; font-weight: 500;">${model.name}</span>
                                <span style="font-size: 14px; font-weight: 600;">${formatCurrency(model.total_cost)}</span>
                            </div>
                            <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, #3B82F6, #10B981); width: ${(model.total_cost/totalCost)*100}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px;">Token Usage by Model</h3>
                    ${state.aiModels.map(model => {
                        const totalModelTokens = model.tokens_input + model.tokens_output;
                        return `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span style="font-size: 14px; font-weight: 500;">${model.name}</span>
                                <span style="font-size: 14px; font-weight: 600;">${(totalModelTokens/1000).toFixed(0)}K</span>
                            </div>
                            <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, #F59E0B, #EF4444); width: ${(totalModelTokens/totalTokens)*100}%;"></div>
                            </div>
                        </div>
                    `}).join('')}
                </div>
            </div>
        </div>
    `;
}

function openAddModelModal() {
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h3>Add AI Model</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label>Model Name</label>
                    <input type="text" id="newModelName" class="form-input" placeholder="e.g., GPT-4">
                </div>
                <div class="form-group">
                    <label>Provider</label>
                    <input type="text" id="newModelProvider" class="form-input" placeholder="e.g., OpenAI">
                </div>
                <div class="form-group">
                    <label>Cost per 1K Input Tokens ($)</label>
                    <input type="number" id="newModelCostInput" class="form-input" placeholder="0.03" step="0.001">
                </div>
                <div class="form-group">
                    <label>Cost per 1K Output Tokens ($)</label>
                    <input type="number" id="newModelCostOutput" class="form-input" placeholder="0.06" step="0.001">
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn-primary" onclick="addNewModel()">Add Model</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function addNewModel() {
    const name = document.getElementById('newModelName').value;
    const provider = document.getElementById('newModelProvider').value;
    const costInput = parseFloat(document.getElementById('newModelCostInput').value);
    const costOutput = parseFloat(document.getElementById('newModelCostOutput').value);
    
    if (!name || !provider || isNaN(costInput) || isNaN(costOutput)) {
        alert('Please fill in all fields correctly');
        return;
    }
    
    const newModel = {
        id: `model_${Date.now()}`,
        name: name,
        provider: provider,
        tokens_input: 0,
        tokens_output: 0,
        calls_made: 0,
        avg_response_time_ms: 0,
        cost_per_1k_input: costInput,
        cost_per_1k_output: costOutput,
        total_cost: 0,
        last_used: new Date().toISOString(),
        status: 'active'
    };
    
    state.aiModels.unshift(newModel);
    document.querySelector('.modal').remove();
    renderAIManager();
    showNotification('AI model added successfully', 'success');
}

function viewModelDetails(modelId) {
    const model = state.aiModels.find(m => m.id === modelId);
    if (!model) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>AI Model Details: ${model.name}</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Provider</div>
                        <div style="font-size: 16px; font-weight: 500;">${model.provider}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Status</div>
                        <div style="font-size: 16px; font-weight: 500; color: var(--success);">${model.status}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Total Calls Made</div>
                        <div style="font-size: 20px; font-weight: 700;">${formatNumber(model.calls_made)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Avg Response Time</div>
                        <div style="font-size: 20px; font-weight: 700;">${model.avg_response_time_ms}ms</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Tokens Input</div>
                        <div style="font-size: 20px; font-weight: 700; color: var(--info);">${formatNumber(model.tokens_input)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Tokens Output</div>
                        <div style="font-size: 20px; font-weight: 700; color: var(--warning);">${formatNumber(model.tokens_output)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Cost per 1K (Input)</div>
                        <div style="font-size: 16px; font-weight: 500;">${formatCurrency(model.cost_per_1k_input)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Cost per 1K (Output)</div>
                        <div style="font-size: 16px; font-weight: 500;">${formatCurrency(model.cost_per_1k_output)}</div>
                    </div>
                </div>
                <div style="margin-top: 24px; padding: 20px; background: var(--bg-tertiary); border-radius: 8px;">
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">TOTAL COST</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--error);">${formatCurrency(model.total_cost)}</div>
                </div>
                <div style="margin-top: 16px;">
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Last Used</div>
                    <div style="font-size: 14px;">${formatDateTime(model.last_used)}</div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function deleteModel(modelId) {
    if (confirm('Are you sure you want to delete this AI model?')) {
        state.aiModels = state.aiModels.filter(m => m.id !== modelId);
        renderAIManager();
        showNotification('AI model deleted', 'success');
    }
}

function exportAIData() {
    const headers = ['Model', 'Provider', 'Tokens Input', 'Tokens Output', 'Calls', 'Avg Response (ms)', 'Cost per 1K In', 'Cost per 1K Out', 'Total Cost'];
    const rows = state.aiModels.map(m => [
        m.name, m.provider, m.tokens_input, m.tokens_output, m.calls_made, m.avg_response_time_ms, m.cost_per_1k_input, m.cost_per_1k_output, m.total_cost
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ai-models-data.csv';
    a.click();
    showNotification('AI data exported', 'success');
}

// Image Generation Manager View
function renderImageManager() {
    const totalImages = state.generatedImages.length;
    const completedImages = state.generatedImages.filter(i => i.status === 'completed').length;
    const totalStorage = state.generatedImages.reduce((sum, i) => sum + i.size_mb, 0);
    const avgGenTime = state.generatedImages.filter(i => i.generation_time_ms > 0).reduce((sum, i) => sum + i.generation_time_ms, 0) / completedImages;
    
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1600px; margin: 0 auto;">
            <!-- Stats Cards -->
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-bottom: 32px;">
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Total Images</div>
                    <div style="font-size: 32px; font-weight: 700;">${totalImages}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Completed</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--success);">${completedImages}</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Storage Used</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--warning);">${totalStorage.toFixed(1)} MB</div>
                </div>
                <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border);">
                    <div style="font-size: 13px; color: var(--text-secondary); text-transform: uppercase; margin-bottom: 8px;">Avg Gen Time</div>
                    <div style="font-size: 32px; font-weight: 700; color: var(--info);">${(avgGenTime/1000).toFixed(1)}s</div>
                </div>
            </div>
            
            <!-- Filters & Actions -->
            <div style="display: flex; gap: 12px; margin-bottom: 24px; flex-wrap: wrap;">
                <select class="form-input" style="width: auto;" onchange="filterImagesByModel(this.value)">
                    <option value="">All Models</option>
                    <option value="DALL-E 3">DALL-E 3</option>
                    <option value="Midjourney">Midjourney</option>
                    <option value="Stable Diffusion">Stable Diffusion</option>
                </select>
                <select class="form-input" style="width: auto;" onchange="filterImagesByStatus(this.value)">
                    <option value="">All Status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="error">Error</option>
                </select>
                <button class="btn btn-secondary" onclick="exportImageMetadata()">📥 Export Metadata</button>
                <button class="btn btn-secondary" onclick="bulkDeleteImages()">🗑️ Bulk Delete</button>
            </div>
            
            <!-- Image Gallery -->
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; margin-bottom: 32px;" id="imageGallery">
                ${state.generatedImages.map(img => `
                    <div class="image-card" data-model="${img.model}" data-status="${img.status}" style="background: var(--bg-secondary); border-radius: 12px; border: 1px solid var(--border); overflow: hidden; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease;" onclick="viewImageDetails('${img.id}')" onmouseenter="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 8px 24px rgba(0,0,0,0.3)';" onmouseleave="this.style.transform=''; this.style.boxShadow='';">
                        <div style="aspect-ratio: 1; background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%); display: flex; align-items: center; justify-content: center; font-size: 64px;">
                            ${img.status === 'completed' ? '🖼️' : img.status === 'pending' ? '⏳' : '❌'}
                        </div>
                        <div style="padding: 16px;">
                            <div style="font-size: 14px; font-weight: 500; margin-bottom: 8px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${img.filename}</div>
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                <span style="font-size: 12px; color: var(--text-secondary);">${img.model}</span>
                                <span style="padding: 3px 8px; border-radius: 999px; font-size: 11px; font-weight: 600; background: rgba(${img.status === 'completed' ? '16, 185, 129' : img.status === 'pending' ? '245, 158, 11' : '239, 68, 68'}, 0.15); color: ${getStatusColor(img.status)};">
                                    ${img.status}
                                </span>
                            </div>
                            <div style="font-size: 12px; color: var(--text-secondary); margin-bottom: 4px;">${img.size_mb} MB • ${img.resolution}</div>
                            ${img.generation_time_ms > 0 ? `<div style="font-size: 12px; color: var(--text-muted);">⏱️ ${(img.generation_time_ms/1000).toFixed(1)}s</div>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Usage Analytics -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px;">Images by Model</h3>
                    ${['DALL-E 3', 'Midjourney', 'Stable Diffusion'].map(model => {
                        const count = state.generatedImages.filter(i => i.model === model).length;
                        const percent = (count / totalImages) * 100;
                        return `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span style="font-size: 14px; font-weight: 500;">${model}</span>
                                <span style="font-size: 14px; font-weight: 600;">${count} (${percent.toFixed(0)}%)</span>
                            </div>
                            <div style="height: 8px; background: var(--bg-tertiary); border-radius: 4px; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, #3B82F6, #8B5CF6); width: ${percent}%;"></div>
                            </div>
                        </div>
                    `}).join('')}
                </div>
                <div style="background: var(--bg-secondary); padding: 24px; border-radius: 12px; border: 1px solid var(--border);">
                    <h3 style="margin: 0 0 20px 0; font-size: 18px;">Generation Time Distribution</h3>
                    ${state.generatedImages.filter(i => i.generation_time_ms > 0).map(img => `
                        <div style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                                <span style="font-size: 13px; color: var(--text-secondary); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px;">${img.filename}</span>
                                <span style="font-size: 13px; font-weight: 600;">${(img.generation_time_ms/1000).toFixed(1)}s</span>
                            </div>
                            <div style="height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden;">
                                <div style="height: 100%; background: linear-gradient(90deg, var(--success), var(--warning)); width: ${(img.generation_time_ms/15000)*100}%;"></div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function filterImagesByModel(model) {
    const cards = document.querySelectorAll('.image-card');
    cards.forEach(card => {
        if (model === '' || card.dataset.model === model) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterImagesByStatus(status) {
    const cards = document.querySelectorAll('.image-card');
    cards.forEach(card => {
        if (status === '' || card.dataset.status === status) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function viewImageDetails(imgId) {
    const img = state.generatedImages.find(i => i.id === imgId);
    if (!img) return;
    
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 700px;">
            <div class="modal-header">
                <h3>Image Details</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div style="aspect-ratio: 1; background: linear-gradient(135deg, var(--bg-tertiary) 0%, var(--bg-secondary) 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 120px; margin-bottom: 24px;">
                    ${img.status === 'completed' ? '🖼️' : img.status === 'pending' ? '⏳' : '❌'}
                </div>
                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px; margin-bottom: 20px; word-break: break-all;">
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">FILENAME</div>
                    <div style="font-size: 16px; font-weight: 600;">${img.filename}</div>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Model</div>
                        <div style="font-size: 16px; font-weight: 500;">${img.model}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Status</div>
                        <div style="font-size: 16px; font-weight: 500; color: ${getStatusColor(img.status)};">${img.status}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Resolution</div>
                        <div style="font-size: 16px; font-weight: 500;">${img.resolution}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">File Size</div>
                        <div style="font-size: 16px; font-weight: 500;">${img.size_mb} MB</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Created</div>
                        <div style="font-size: 14px;">${formatDateTime(img.created_date)}</div>
                    </div>
                    <div>
                        <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 4px;">Generation Time</div>
                        <div style="font-size: 16px; font-weight: 500;">${img.generation_time_ms > 0 ? (img.generation_time_ms/1000).toFixed(1) + 's' : 'N/A'}</div>
                    </div>
                </div>
                <div>
                    <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">PROMPT</div>
                    <div style="padding: 12px; background: var(--bg-tertiary); border-radius: 6px; font-size: 14px; line-height: 1.6;">${img.prompt}</div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Close</button>
                <button class="btn btn-destructive" onclick="deleteImage('${img.id}'); this.closest('.modal').remove();">Delete</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function deleteImage(imgId) {
    if (confirm('Are you sure you want to delete this image?')) {
        state.generatedImages = state.generatedImages.filter(i => i.id !== imgId);
        renderImageManager();
        showNotification('Image deleted', 'success');
    }
}

function bulkDeleteImages() {
    if (confirm(`Delete all images? This will remove ${state.generatedImages.length} images.`)) {
        state.generatedImages = [];
        renderImageManager();
        showNotification('All images deleted', 'success');
    }
}

function exportImageMetadata() {
    const headers = ['Filename', 'Model', 'Status', 'Size (MB)', 'Resolution', 'Created', 'Generation Time (ms)', 'Prompt'];
    const rows = state.generatedImages.map(i => [
        i.filename, i.model, i.status, i.size_mb, i.resolution, i.created_date, i.generation_time_ms, i.prompt
    ]);
    
    const csv = [headers, ...rows].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image-metadata.csv';
    a.click();
    showNotification('Metadata exported', 'success');
}

// Data Generator State
let dataGenState = {
    columns: [],
    generatedData: null,
    savedConfigs: [],
    currentTab: 'manual',
    selectedTemplate: null,
    batchJobs: [],
    currentFormat: 'table',
    editedCode: null,
    formatOptions: {
        csv: { delimiter: ',', includeHeaders: true, quoteMode: 'minimal' },
        json: { indent: 2, pretty: true },
        sql: { tableName: 'generated_table', includeColumns: true }
    }
};

// Data Generator View (Premium Enterprise Edition)
function renderDataGenerator() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div class="data-generator-container" style="max-width: 1600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2A2A2A 100%); border: 1px solid var(--border); border-radius: 12px; padding: 32px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
                    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">⚡</div>
                    <div>
                        <h2 style="margin: 0; font-size: 28px; font-weight: 700;">Enterprise Data Generator</h2>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 14px;">The Rolls Royce of data generation - AI-powered, ultra-customizable, production-ready</p>
                    </div>
                </div>
            </div>
            
            <!-- Enhanced Tabs -->
            <div class="dg-tabs" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px 12px 0 0; padding: 8px; display: flex; gap: 4px;">
                <button class="dg-tab active" onclick="switchDataGenTab('manual')" id="tab-manual">📋 Manual Headers</button>
                <button class="dg-tab" onclick="switchDataGenTab('url')" id="tab-url">🌐 From URL</button>
                <button class="dg-tab" onclick="switchDataGenTab('ai')" id="tab-ai">🤖 AI Generation</button>
                <button class="dg-tab" onclick="switchDataGenTab('saved')" id="tab-saved">💾 Saved Configs</button>
                <button class="dg-tab" onclick="switchDataGenTab('batch')" id="tab-batch">⚙️ Batch Operations</button>
            </div>
            
            <!-- TAB 1: Manual Headers (Ultra-Advanced) -->
            <div id="dataGenManual" class="dg-tab-content" style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0 0 12px 12px; padding: 32px;">
                <!-- Quick Templates Bar -->
                <div style="background: var(--bg-tertiary); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
                    <label style="display: block; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px; color: var(--text-secondary);">🎯 Quick Load Templates</label>
                    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                        <button class="btn btn-sm btn-secondary" onclick="loadQuickTemplate('customers')">👥 Customers</button>
                        <button class="btn btn-sm btn-secondary" onclick="loadQuickTemplate('products')">📦 Products</button>
                        <button class="btn btn-sm btn-secondary" onclick="loadQuickTemplate('orders')">🛒 Orders</button>
                        <button class="btn btn-sm btn-secondary" onclick="loadQuickTemplate('employees')">💼 Employees</button>
                        <button class="btn btn-sm btn-secondary" onclick="loadQuickTemplate('transactions')">💳 Transactions</button>
                    </div>
                </div>

                <!-- Column Definition Builder -->
                <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
                        <h3 style="margin: 0; font-size: 18px; font-weight: 600;">📋 Column Definition Builder</h3>
                        <button class="btn btn-sm btn-primary" onclick="addColumnDefinition()">➕ Add Column</button>
                    </div>
                    <div id="columnDefinitions" style="display: flex; flex-direction: column; gap: 12px;">
                        <!-- Columns will be dynamically added -->
                    </div>
                </div>

                <!-- Advanced Generation Settings -->
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
                    <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 20px;">
                        <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">⚙️ Generation Settings</h4>
                        <div style="margin-bottom: 16px;">
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Number of Rows</label>
                            <input type="number" id="numRows" class="form-input" value="100" min="1" max="100000">
                        </div>
                        <div style="margin-bottom: 16px;">
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Randomization Seed</label>
                            <input type="text" id="randomSeed" class="form-input" placeholder="Optional - for reproducible data">
                        </div>
                        <div>
                            <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                                <input type="checkbox" id="contextualGen" checked>
                                <span style="font-size: 14px;">Generate contextually related data</span>
                            </label>
                        </div>
                    </div>
                    <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 20px;">
                        <h4 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">🌍 Locale & Format</h4>
                        <div style="margin-bottom: 16px;">
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Country/Locale</label>
                            <select id="localeSelect" class="form-input">
                                <option value="US">🇺🇸 United States</option>
                                <option value="UK">🇬🇧 United Kingdom</option>
                                <option value="CA">🇨🇦 Canada</option>
                                <option value="AU">🇦🇺 Australia</option>
                                <option value="DE">🇩🇪 Germany</option>
                                <option value="FR">🇫🇷 France</option>
                                <option value="JP">🇯🇵 Japan</option>
                                <option value="IN">🇮🇳 India</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Date Format</label>
                            <select id="dateFormatSelect" class="form-input">
                                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
                                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                                <option value="DD-MM-YYYY">DD-MM-YYYY</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- Data Preview -->
                <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                    <h4 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">👁️ Live Preview (First 5 rows)</h4>
                    <div id="dataPreview" style="font-size: 13px; color: var(--text-secondary);">Configure columns to see preview...</div>
                </div>

                <!-- Generate Button -->
                <button class="btn btn-primary btn-large" onclick="generateDataAdvanced()" style="font-size: 18px; padding: 20px;">
                    ✨ Generate Enterprise Data
                </button>
            </div>
            
            <!-- TAB 2: From URL (Intelligent Scraping) -->
            <div id="dataGenURL" class="dg-tab-content" style="display: none; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0 0 12px 12px; padding: 32px;">
                <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">🌐 Extract Data from URL</h3>
                
                <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Target URL</label>
                    <input type="url" id="extractURL" class="form-input" placeholder="https://example.com/table-data" style="margin-bottom: 16px;">
                    
                    <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Scraping Strategy</label>
                    <select id="scrapingStrategy" class="form-input" style="margin-bottom: 16px;">
                        <option value="auto">🔍 Auto-detect tables</option>
                        <option value="structured">📊 Structured data (JSON-LD)</option>
                        <option value="css">🎯 Custom CSS selector</option>
                        <option value="api">🔌 API response</option>
                    </select>
                    
                    <div id="cssSelector" style="display: none; margin-bottom: 16px;">
                        <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 8px;">CSS Selector</label>
                        <input type="text" id="cssInput" class="form-input" placeholder="table.data-table tbody tr">
                    </div>
                    
                    <button class="btn btn-primary btn-large" onclick="extractFromURLAdvanced()">🔍 Extract Data</button>
                </div>
                
                <div id="urlExtractionResults" style="display: none;">
                    <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); border-radius: 8px; padding: 16px; margin-bottom: 20px;">
                        <div style="font-size: 14px; font-weight: 600; color: var(--success);">✅ Data Extracted Successfully</div>
                        <div id="extractionStats" style="font-size: 13px; color: var(--text-secondary); margin-top: 4px;"></div>
                    </div>
                    
                    <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 20px;">
                        <h4 style="margin: 0 0 16px 0; font-size: 16px;">Column Mapping</h4>
                        <div id="columnMapping"></div>
                        <button class="btn btn-primary" onclick="importExtractedData()" style="margin-top: 16px;">Import Data</button>
                    </div>
                </div>
            </div>
            
            <!-- TAB 3: AI Generation (Smart Generation) -->
            <div id="dataGenAI" class="dg-tab-content" style="display: none; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0 0 12px 12px; padding: 32px;">
                <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">🤖 AI-Powered Data Generation</h3>
                
                <div style="background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <label style="display: block; font-size: 14px; font-weight: 500; margin-bottom: 12px;">💬 Describe the data you want</label>
                    <textarea id="aiPrompt" class="form-input" rows="4" placeholder="Example: Generate 100 customers from US with realistic names, emails, phone numbers, and companies. Include signup dates from the last 90 days." style="margin-bottom: 16px; resize: vertical;"></textarea>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">AI Model</label>
                            <select id="aiModelSelect" class="form-input">
                                ${state.aiModels.map(m => `<option value="${m.id}">${m.name} (${m.provider})</option>`).join('')}
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Number of Rows</label>
                            <input type="number" id="aiNumRows" class="form-input" value="50" min="1" max="10000">
                        </div>
                    </div>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                        <div>
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Consistency Level</label>
                            <select id="consistencyLevel" class="form-input">
                                <option value="low">Low - Random variations</option>
                                <option value="medium" selected>Medium - Contextual</option>
                                <option value="high">High - Highly realistic</option>
                            </select>
                        </div>
                        <div>
                            <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Realism Level</label>
                            <select id="realismLevel" class="form-input">
                                <option value="basic">Basic - Simple data</option>
                                <option value="detailed" selected>Detailed - Rich data</option>
                                <option value="high">High - Ultra-realistic</option>
                            </select>
                        </div>
                    </div>
                    
                    <button class="btn btn-primary btn-large" onclick="generateWithAI()" style="background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);">
                        🚀 Generate with AI
                    </button>
                </div>
                
                <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 20px;">
                    <h4 style="margin: 0 0 12px 0; font-size: 14px; font-weight: 600; color: var(--text-secondary);">💡 Example Prompts</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                        <button class="btn btn-sm btn-ghost" onclick="loadAIPrompt('customers')" style="text-align: left; justify-content: flex-start;">"Generate 100 customers from US with realistic names, emails, and phone numbers"</button>
                        <button class="btn btn-sm btn-ghost" onclick="loadAIPrompt('orders')" style="text-align: left; justify-content: flex-start;">"Create 50 e-commerce orders with order dates, items, and tracking status"</button>
                        <button class="btn btn-sm btn-ghost" onclick="loadAIPrompt('transactions')" style="text-align: left; justify-content: flex-start;">"Generate 1000 financial transactions with IDs, amounts, and timestamps"</button>
                    </div>
                </div>
            </div>
            
            <!-- TAB 4: Saved Configs (History & Templates) -->
            <div id="dataGenSaved" class="dg-tab-content" style="display: none; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0 0 12px 12px; padding: 32px;">
                <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">💾 Saved Configurations</h3>
                
                <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                    <button class="btn btn-primary" onclick="saveCurrentConfig()">💾 Save Current Config</button>
                    <button class="btn btn-secondary" onclick="importConfig()">📥 Import Config</button>
                    <button class="btn btn-secondary" onclick="exportAllConfigs()">📤 Export All</button>
                </div>
                
                <div id="savedConfigsList" style="display: grid; gap: 16px;">
                    <!-- Saved configs will be rendered here -->
                </div>
            </div>
            
            <!-- TAB 5: Batch Operations -->
            <div id="dataGenBatch" class="dg-tab-content" style="display: none; background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 0 0 12px 12px; padding: 32px;">
                <h3 style="margin: 0 0 24px 0; font-size: 20px; font-weight: 600;">⚙️ Batch Operations</h3>
                
                <div style="background: var(--bg-tertiary); border-radius: 8px; padding: 24px; margin-bottom: 24px;">
                    <h4 style="margin: 0 0 16px 0; font-size: 16px;">Queue Multiple Generations</h4>
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Number of Jobs</label>
                        <input type="number" id="batchJobCount" class="form-input" value="5" min="1" max="50" style="max-width: 150px;">
                    </div>
                    <div style="margin-bottom: 16px;">
                        <label style="display: block; font-size: 13px; font-weight: 500; margin-bottom: 8px;">Rows per Job</label>
                        <input type="number" id="batchRowsPerJob" class="form-input" value="100" min="1" max="10000" style="max-width: 150px;">
                    </div>
                    <button class="btn btn-primary" onclick="queueBatchJobs()">📦 Queue Jobs</button>
                </div>
                
                <div id="batchJobsList" style="display: grid; gap: 12px;">
                    <!-- Batch jobs will be rendered here -->
                </div>
            </div>
            
            <!-- Results Section (Enhanced) -->
            <div id="dataResults" class="dg-results" style="display: none; margin-top: 32px;">
                <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; overflow: hidden;">
                    <div class="dg-results-header" style="padding: 20px; border-bottom: 1px solid var(--border);">
                        <div>
                            <h3 style="margin: 0 0 8px 0; font-size: 18px;">🎉 Generated Data</h3>
                            <div id="dataQualityReport" style="font-size: 13px; color: var(--text-secondary);"></div>
                        </div>
                        <div class="dg-results-actions" style="display: flex; gap: 8px; flex-wrap: wrap;">
                            <select id="exportFormat" class="form-input" style="width: auto; padding: 8px 12px;">
                                <option value="csv">CSV</option>
                                <option value="json">JSON</option>
                                <option value="jsonl">JSONL</option>
                                <option value="sql">SQL INSERT</option>
                                <option value="sql-update">SQL UPDATE</option>
                                <option value="xml">XML</option>
                                <option value="excel">Excel (simulated)</option>
                            </select>
                            <button class="btn btn-sm btn-primary" onclick="exportDataAdvanced()">📥 Export</button>
                            <button class="btn btn-sm btn-secondary" onclick="copyDataToClipboard()">📋 Copy</button>
                            <button class="btn btn-sm btn-ghost" onclick="toggleColumnVisibility()">👁️ Columns</button>
                            <button class="btn btn-sm btn-ghost" onclick="clearGeneratedData()">🗑️ Clear</button>
                        </div>
                    </div>
                    
                    <!-- Data Controls -->
                    <div style="padding: 16px; border-bottom: 1px solid var(--border); display: flex; gap: 12px; align-items: center; flex-wrap: wrap;">
                        <input type="search" id="dataSearch" class="form-input" placeholder="Search all columns..." style="flex: 1; min-width: 200px;" onkeyup="filterDataTable(this.value)">
                        <select id="rowsPerPage" class="form-input" style="width: auto;" onchange="updatePagination()">
                            <option value="10">10 rows</option>
                            <option value="25" selected>25 rows</option>
                            <option value="50">50 rows</option>
                            <option value="100">100 rows</option>
                            <option value="500">500 rows</option>
                        </select>
                        <div id="paginationInfo" style="font-size: 13px; color: var(--text-secondary);"></div>
                    </div>
                    
                    <div class="dg-results-table-wrapper" style="overflow: auto; max-height: 600px;">
                        <table class="dg-results-table" id="resultsTable">
                            <thead id="resultsTableHead"></thead>
                            <tbody id="resultsTableBody"></tbody>
                        </table>
                    </div>
                    
                    <!-- Pagination -->
                    <div id="paginationControls" style="padding: 16px; border-top: 1px solid var(--border); display: flex; justify-content: center; gap: 8px;"></div>
                </div>
            </div>
        </div>
    `;
}

let currentPage = 1;
let filteredData = null;
let sortColumn = null;
let sortDirection = 'asc';

function switchDataGenTab(tab) {
    dataGenState.currentTab = tab;
    document.querySelectorAll('.dg-tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${tab}`).classList.add('active');
    
    document.getElementById('dataGenManual').style.display = tab === 'manual' ? 'block' : 'none';
    document.getElementById('dataGenURL').style.display = tab === 'url' ? 'block' : 'none';
    document.getElementById('dataGenAI').style.display = tab === 'ai' ? 'block' : 'none';
    document.getElementById('dataGenSaved').style.display = tab === 'saved' ? 'block' : 'none';
    document.getElementById('dataGenBatch').style.display = tab === 'batch' ? 'block' : 'none';
    
    if (tab === 'manual') initColumnDefinitions();
    if (tab === 'saved') renderSavedConfigs();
    if (tab === 'batch') renderBatchJobs();
}

function initColumnDefinitions() {
    const container = document.getElementById('columnDefinitions');
    if (container.children.length === 0) {
        addColumnDefinition();
        addColumnDefinition();
        addColumnDefinition();
    }
}

function addColumnDefinition() {
    const container = document.getElementById('columnDefinitions');
    const index = container.children.length;
    const colId = `col_${Date.now()}_${index}`;
    
    const colDiv = document.createElement('div');
    colDiv.id = colId;
    colDiv.style.cssText = 'background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 6px; padding: 16px; display: grid; grid-template-columns: auto 1fr 200px 200px 150px auto; gap: 12px; align-items: center;';
    colDiv.innerHTML = `
        <div style="cursor: move; color: var(--text-muted); font-size: 20px;" title="Drag to reorder">☰</div>
        <input type="text" class="form-input" placeholder="Column name" value="column_${index + 1}" style="padding: 8px 12px;">
        <select class="form-input col-type" onchange="updateColumnSubtypes('${colId}', this.value)" style="padding: 8px 12px;">
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="category">Category</option>
            <option value="boolean">Boolean</option>
        </select>
        <select class="form-input col-subtype" style="padding: 8px 12px;">
            <option value="text">Plain text</option>
            <option value="first_name">First name</option>
            <option value="last_name">Last name</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="company">Company</option>
            <option value="address">Address</option>
            <option value="city">City</option>
            <option value="country">Country</option>
        </select>
        <div style="display: flex; gap: 4px;">
            <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; cursor: pointer;" title="Unique values">
                <input type="checkbox" class="col-unique">
                <span>Unique</span>
            </label>
            <label style="display: flex; align-items: center; gap: 4px; font-size: 12px; cursor: pointer;" title="Can be null">
                <input type="checkbox" class="col-nullable">
                <span>Null</span>
            </label>
        </div>
        <button class="btn btn-sm btn-ghost" onclick="removeColumnDefinition('${colId}')" style="color: var(--error);">🗑️</button>
    `;
    container.appendChild(colDiv);
    updateDataPreview();
}

function removeColumnDefinition(colId) {
    document.getElementById(colId).remove();
    updateDataPreview();
}

function updateColumnSubtypes(colId, type) {
    const col = document.getElementById(colId);
    const subtypeSelect = col.querySelector('.col-subtype');
    
    const subtypes = {
        text: ['text', 'first_name', 'last_name', 'email', 'phone', 'url', 'username', 'password', 'address', 'city', 'country', 'company', 'job_title', 'description'],
        number: ['integer', 'decimal', 'currency', 'percentage', 'auto_increment'],
        date: ['date', 'datetime', 'timestamp', 'relative_date'],
        category: ['enum', 'random'],
        boolean: ['yes_no', 'true_false', 'on_off']
    };
    
    subtypeSelect.innerHTML = subtypes[type].map(st => `<option value="${st}">${st.replace('_', ' ')}</option>`).join('');
    updateDataPreview();
}

function updateDataPreview() {
    const preview = document.getElementById('dataPreview');
    const columns = getColumnDefinitions();
    
    if (columns.length === 0) {
        preview.innerHTML = '<div style="color: var(--text-muted);">No columns defined. Add columns to see preview.</div>';
        return;
    }
    
    const previewData = [];
    for (let i = 0; i < 5; i++) {
        const row = {};
        columns.forEach(col => {
            row[col.name] = generateFieldValue(col.name, 'ai');
        });
        previewData.push(row);
    }
    
    const headers = columns.map(c => c.name);
    preview.innerHTML = `
        <div style="overflow-x: auto;">
            <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <thead>
                    <tr>${headers.map(h => `<th style="padding: 8px; text-align: left; border-bottom: 1px solid var(--border); background: var(--bg-secondary);">${h}</th>`).join('')}</tr>
                </thead>
                <tbody>
                    ${previewData.map(row => `<tr>${headers.map(h => `<td style="padding: 8px; border-bottom: 1px solid var(--border-light);">${row[h]}</td>`).join('')}</tr>`).join('')}
                </tbody>
            </table>
        </div>
    `;
}

function getColumnDefinitions() {
    const container = document.getElementById('columnDefinitions');
    const columns = [];
    
    Array.from(container.children).forEach(colDiv => {
        const name = colDiv.querySelector('input[type="text"]').value.trim();
        const type = colDiv.querySelector('.col-type').value;
        const subtype = colDiv.querySelector('.col-subtype').value;
        const unique = colDiv.querySelector('.col-unique').checked;
        const nullable = colDiv.querySelector('.col-nullable').checked;
        
        if (name) {
            columns.push({ name, type, subtype, unique, nullable });
        }
    });
    
    return columns;
}

function loadQuickTemplate(templateName) {
    const templates = {
        customers: ['customer_id', 'first_name', 'last_name', 'email', 'phone', 'company', 'address', 'city', 'country', 'signup_date'],
        products: ['product_id', 'name', 'category', 'price', 'stock', 'description'],
        orders: ['order_id', 'customer_id', 'order_date', 'total_amount', 'status', 'shipping_address'],
        employees: ['employee_id', 'first_name', 'last_name', 'email', 'department', 'job_title', 'salary', 'hire_date'],
        transactions: ['transaction_id', 'date', 'amount', 'type', 'status', 'description']
    };
    
    const container = document.getElementById('columnDefinitions');
    container.innerHTML = '';
    
    templates[templateName].forEach(() => addColumnDefinition());
    
    const columns = container.children;
    templates[templateName].forEach((colName, i) => {
        columns[i].querySelector('input[type="text"]').value = colName;
    });
    
    updateDataPreview();
    showNotification(`Loaded ${templateName} template`, 'success');
}

function generateDataAdvanced() {
    const columns = getColumnDefinitions();
    
    if (columns.length === 0) {
        showNotification('Please add at least one column', 'error');
        return;
    }
    
    const numRows = parseInt(document.getElementById('numRows').value) || 100;
    const locale = document.getElementById('localeSelect').value;
    const dateFormat = document.getElementById('dateFormatSelect').value;
    const contextual = document.getElementById('contextualGen').checked;
    
    showNotification('Generating data...', 'info');
    
    setTimeout(() => {
        const data = [];
        for (let i = 0; i < numRows; i++) {
            const row = {};
            columns.forEach(col => {
                row[col.name] = generateAdvancedFieldValue(col, locale, contextual);
            });
            data.push(row);
        }
        
        const headers = columns.map(c => c.name);
        state.generatedData = { headers, data, columns };
        dataGenState.generatedData = state.generatedData;
        displayGeneratedDataAdvanced();
        showNotification(`Generated ${numRows} rows successfully!`, 'success');
    }, 500);
}

function generateAdvancedFieldValue(col, locale, contextual) {
    const { name, type, subtype, unique } = col;
    const field = name.toLowerCase();
    
    // Enhanced generation based on type and subtype
    if (type === 'text') {
        if (subtype === 'first_name') {
            const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'William'];
            return names[Math.floor(Math.random() * names.length)];
        }
        if (subtype === 'last_name') {
            const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis'];
            return surnames[Math.floor(Math.random() * surnames.length)];
        }
        if (subtype === 'email') {
            const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'company.com'];
            return `user${Math.floor(Math.random() * 10000)}@${domains[Math.floor(Math.random() * domains.length)]}`;
        }
        if (subtype === 'phone') {
            return locale === 'US' ? `+1-555-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}` : `+44-20-${Math.floor(Math.random() * 9000) + 1000}-${Math.floor(Math.random() * 9000) + 1000}`;
        }
        if (subtype === 'company') {
            const companies = ['Acme Corp', 'TechStart Inc', 'Global Solutions', 'Innovate LLC', 'BuildIt Co'];
            return companies[Math.floor(Math.random() * companies.length)];
        }
        if (subtype === 'address') {
            return `${Math.floor(Math.random() * 9999) + 1} Main Street`;
        }
        if (subtype === 'city') {
            const cities = locale === 'US' ? ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'] : ['London', 'Manchester', 'Birmingham', 'Leeds', 'Glasgow'];
            return cities[Math.floor(Math.random() * cities.length)];
        }
        if (subtype === 'country') {
            return locale;
        }
        if (subtype === 'job_title') {
            const titles = ['Software Engineer', 'Product Manager', 'Designer', 'Data Analyst', 'Marketing Manager'];
            return titles[Math.floor(Math.random() * titles.length)];
        }
        if (subtype === 'description') {
            const descriptions = ['High quality product', 'Premium service', 'Standard item', 'Limited edition'];
            return descriptions[Math.floor(Math.random() * descriptions.length)];
        }
    }
    
    if (type === 'number') {
        if (subtype === 'integer') return Math.floor(Math.random() * 10000);
        if (subtype === 'decimal') return (Math.random() * 1000).toFixed(2);
        if (subtype === 'currency') return (Math.random() * 10000).toFixed(2);
        if (subtype === 'percentage') return (Math.random() * 100).toFixed(1);
        if (subtype === 'auto_increment') return Math.floor(Math.random() * 100000);
    }
    
    if (type === 'date') {
        const date = new Date(2025, 0, Math.floor(Math.random() * 365));
        if (subtype === 'date') return date.toISOString().split('T')[0];
        if (subtype === 'datetime') return date.toISOString();
        if (subtype === 'timestamp') return date.getTime();
    }
    
    if (type === 'category') {
        const categories = ['Active', 'Inactive', 'Pending', 'Completed', 'Cancelled'];
        return categories[Math.floor(Math.random() * categories.length)];
    }
    
    if (type === 'boolean') {
        if (subtype === 'yes_no') return Math.random() > 0.5 ? 'Yes' : 'No';
        if (subtype === 'true_false') return Math.random() > 0.5 ? 'true' : 'false';
        if (subtype === 'on_off') return Math.random() > 0.5 ? 'On' : 'Off';
    }
    
    return `Value_${Math.floor(Math.random() * 10000)}`;
}

function generateFieldValue(fieldName, method) {
    const field = fieldName.toLowerCase();
    
    if (method === 'random') {
        return Math.random().toString(36).substring(2, 10);
    }
    
    // AI-like realistic generation based on field name
    if (field.includes('name') || field.includes('first')) {
        const names = ['Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason', 'Isabella', 'William', 'Charlotte', 'James'];
        return names[Math.floor(Math.random() * names.length)];
    }
    if (field.includes('last') || field.includes('surname')) {
        const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez'];
        return surnames[Math.floor(Math.random() * surnames.length)];
    }
    if (field.includes('email')) {
        const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'company.com', 'example.com'];
        return `user${Math.floor(Math.random() * 10000)}@${domains[Math.floor(Math.random() * domains.length)]}`;
    }
    if (field.includes('phone')) {
        return `+1-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`;
    }
    if (field.includes('company')) {
        const companies = ['Acme Corp', 'TechStart Inc', 'Global Solutions', 'Innovate LLC', 'BuildIt Co', 'DataFlow Systems'];
        return companies[Math.floor(Math.random() * companies.length)];
    }
    if (field.includes('country')) {
        const countries = ['USA', 'Canada', 'UK', 'Germany', 'France', 'Japan', 'Australia', 'India'];
        return countries[Math.floor(Math.random() * countries.length)];
    }
    if (field.includes('price') || field.includes('amount') || field.includes('salary')) {
        return (Math.random() * 100000).toFixed(2);
    }
    if (field.includes('date')) {
        const date = new Date(2025, 0, Math.floor(Math.random() * 365));
        return date.toISOString().split('T')[0];
    }
    if (field.includes('status')) {
        const statuses = ['Active', 'Inactive', 'Pending', 'Completed'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }
    if (field.includes('id')) {
        return Math.floor(Math.random() * 100000);
    }
    if (field.includes('description')) {
        const descriptions = ['High quality product', 'Premium service', 'Standard item', 'Limited edition', 'Special offer'];
        return descriptions[Math.floor(Math.random() * descriptions.length)];
    }
    
    // Default: random text
    return `Value_${Math.floor(Math.random() * 10000)}`;
}

function extractFromURLAdvanced() {
    const url = document.getElementById('extractURL').value;
    if (!url) {
        showNotification('Please enter a URL', 'error');
        return;
    }
    
    showNotification('Extracting data from URL...', 'info');
    
    setTimeout(() => {
        const headers = ['title', 'description', 'date', 'author', 'category'];
        const data = [];
        for (let i = 0; i < 15; i++) {
            data.push({
                title: `Article ${i + 1}`,
                description: `Description for article ${i + 1}`,
                date: new Date(2025, 0, i + 1).toISOString().split('T')[0],
                author: ['John Doe', 'Jane Smith', 'Bob Johnson'][i % 3],
                category: ['Tech', 'Business', 'Lifestyle'][i % 3]
            });
        }
        
        state.generatedData = { headers, data };
        document.getElementById('extractionStats').textContent = `Extracted ${data.length} rows with ${headers.length} columns`;
        document.getElementById('urlExtractionResults').style.display = 'block';
        displayGeneratedDataAdvanced();
        showNotification('Data extracted successfully!', 'success');
    }, 1000);
}

function generateWithAI() {
    const prompt = document.getElementById('aiPrompt').value;
    if (!prompt) {
        showNotification('Please describe the data you want to generate', 'error');
        return;
    }
    
    const numRows = parseInt(document.getElementById('aiNumRows').value) || 50;
    showNotification('AI is analyzing your request and generating data...', 'info');
    
    setTimeout(() => {
        const headers = ['id', 'name', 'email', 'value', 'date', 'status'];
        const data = [];
        
        for (let i = 0; i < numRows; i++) {
            data.push({
                id: i + 1,
                name: `Generated ${i + 1}`,
                email: `user${i}@example.com`,
                value: (Math.random() * 10000).toFixed(2),
                date: new Date(2025, 0, Math.floor(Math.random() * 365)).toISOString().split('T')[0],
                status: ['Active', 'Pending', 'Completed'][Math.floor(Math.random() * 3)]
            });
        }
        
        state.generatedData = { headers, data };
        displayGeneratedDataAdvanced();
        showNotification(`AI generated ${numRows} rows successfully!`, 'success');
    }, 1500);
}

function loadAIPrompt(type) {
    const prompts = {
        customers: 'Generate 100 customers from US with realistic names, emails, phone numbers, and companies. Include signup dates from the last 90 days.',
        orders: 'Create 50 e-commerce orders with order dates, items, customers, and tracking status from the past month.',
        transactions: 'Generate 1000 fake financial transactions with IDs, amounts, types, and timestamps for January 2025.'
    };
    document.getElementById('aiPrompt').value = prompts[type];
}

function saveCurrentConfig() {
    const columns = getColumnDefinitions();
    if (columns.length === 0) {
        showNotification('No configuration to save', 'error');
        return;
    }
    
    const configName = prompt('Enter configuration name:');
    if (!configName) return;
    
    const config = {
        id: `config_${Date.now()}`,
        name: configName,
        columns: columns,
        created: new Date().toISOString(),
        rowsGenerated: state.generatedData ? state.generatedData.data.length : 0
    };
    
    dataGenState.savedConfigs.push(config);
    showNotification('Configuration saved!', 'success');
    renderSavedConfigs();
}

function renderSavedConfigs() {
    const container = document.getElementById('savedConfigsList');
    if (dataGenState.savedConfigs.length === 0) {
        container.innerHTML = '<div style="padding: 48px; text-align: center; color: var(--text-muted);">No saved configurations yet</div>';
        return;
    }
    
    container.innerHTML = dataGenState.savedConfigs.map(config => `
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 8px; padding: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div>
                    <h4 style="margin: 0 0 4px 0; font-size: 16px;">${config.name}</h4>
                    <div style="font-size: 13px; color: var(--text-secondary);">${config.columns.length} columns • Created ${formatDateTime(config.created)}</div>
                </div>
                <div style="display: flex; gap: 8px;">
                    <button class="btn btn-sm btn-primary" onclick="loadConfig('${config.id}')">Load</button>
                    <button class="btn btn-sm btn-ghost" onclick="deleteConfig('${config.id}')">🗑️</button>
                </div>
            </div>
            <div style="font-size: 12px; color: var(--text-muted);">Columns: ${config.columns.map(c => c.name).join(', ')}</div>
        </div>
    `).join('');
}

function loadConfig(configId) {
    const config = dataGenState.savedConfigs.find(c => c.id === configId);
    if (!config) return;
    
    switchDataGenTab('manual');
    
    setTimeout(() => {
        const container = document.getElementById('columnDefinitions');
        container.innerHTML = '';
        
        config.columns.forEach(() => addColumnDefinition());
        
        const columns = container.children;
        config.columns.forEach((col, i) => {
            columns[i].querySelector('input[type="text"]').value = col.name;
            columns[i].querySelector('.col-type').value = col.type;
            updateColumnSubtypes(columns[i].id, col.type);
            columns[i].querySelector('.col-subtype').value = col.subtype;
            columns[i].querySelector('.col-unique').checked = col.unique;
            columns[i].querySelector('.col-nullable').checked = col.nullable;
        });
        
        updateDataPreview();
        showNotification('Configuration loaded!', 'success');
    }, 100);
}

function deleteConfig(configId) {
    if (confirm('Delete this configuration?')) {
        dataGenState.savedConfigs = dataGenState.savedConfigs.filter(c => c.id !== configId);
        renderSavedConfigs();
        showNotification('Configuration deleted', 'success');
    }
}

function importConfig() {
    showNotification('Config import simulated', 'info');
}

function exportAllConfigs() {
    const json = JSON.stringify(dataGenState.savedConfigs, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data-gen-configs.json';
    a.click();
    showNotification('Configurations exported!', 'success');
}

function queueBatchJobs() {
    const jobCount = parseInt(document.getElementById('batchJobCount').value) || 5;
    const rowsPerJob = parseInt(document.getElementById('batchRowsPerJob').value) || 100;
    
    for (let i = 0; i < jobCount; i++) {
        dataGenState.batchJobs.push({
            id: `job_${Date.now()}_${i}`,
            name: `Batch Job ${dataGenState.batchJobs.length + 1}`,
            rows: rowsPerJob,
            status: 'queued',
            progress: 0
        });
    }
    
    renderBatchJobs();
    showNotification(`Queued ${jobCount} jobs`, 'success');
    processBatchJobs();
}

function renderBatchJobs() {
    const container = document.getElementById('batchJobsList');
    if (dataGenState.batchJobs.length === 0) {
        container.innerHTML = '<div style="padding: 48px; text-align: center; color: var(--text-muted);">No batch jobs queued</div>';
        return;
    }
    
    container.innerHTML = dataGenState.batchJobs.map(job => `
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 8px; padding: 16px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-weight: 500;">${job.name}</span>
                <span style="font-size: 12px; padding: 4px 8px; border-radius: 4px; background: rgba(${job.status === 'completed' ? '16, 185, 129' : job.status === 'processing' ? '245, 158, 11' : '98, 108, 113'}, 0.15); color: ${job.status === 'completed' ? 'var(--success)' : job.status === 'processing' ? 'var(--warning)' : 'var(--text-secondary)'};"> ${job.status}</span>
            </div>
            <div style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">${job.rows} rows</div>
            <div style="height: 6px; background: var(--bg-secondary); border-radius: 3px; overflow: hidden;">
                <div style="height: 100%; background: linear-gradient(90deg, var(--info), var(--success)); width: ${job.progress}%; transition: width 0.3s ease;"></div>
            </div>
        </div>
    `).join('');
}

function processBatchJobs() {
    const queuedJobs = dataGenState.batchJobs.filter(j => j.status === 'queued');
    if (queuedJobs.length === 0) return;
    
    const job = queuedJobs[0];
    job.status = 'processing';
    renderBatchJobs();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        job.progress = progress;
        renderBatchJobs();
        
        if (progress >= 100) {
            clearInterval(interval);
            job.status = 'completed';
            renderBatchJobs();
            setTimeout(() => processBatchJobs(), 500);
        }
    }, 200);
}

function displayGeneratedDataAdvanced() {
    const { headers, data } = state.generatedData;
    
    filteredData = data;
    currentPage = 1;
    dataGenState.currentFormat = 'table';
    
    const quality = {
        total: data.length,
        columns: headers.length,
        nulls: 0,
        unique: new Set(data.map(r => JSON.stringify(r))).size
    };
    
    document.getElementById('dataQualityReport').innerHTML = `${quality.total} rows • ${quality.columns} columns • ${quality.unique} unique records`;
    
    renderDataTable();
    addFormatViewerUI();
    document.getElementById('dataResults').style.display = 'block';
    document.getElementById('dataResults').scrollIntoView({ behavior: 'smooth' });
}

// Format Viewer/Editor Functions
function addFormatViewerUI() {
    const resultsSection = document.getElementById('dataResults');
    const existingViewer = document.getElementById('formatViewerSection');
    if (existingViewer) existingViewer.remove();
    
    const viewerSection = document.createElement('div');
    viewerSection.id = 'formatViewerSection';
    viewerSection.style.marginTop = '24px';
    viewerSection.innerHTML = `
        <div style="background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; overflow: hidden;">
            <div class="format-tabs">
                <button class="format-tab active" onclick="switchFormat('table')">📊 Table View</button>
                <button class="format-tab" onclick="switchFormat('csv')">📄 CSV</button>
                <button class="format-tab" onclick="switchFormat('json')">📋 JSON</button>
                <button class="format-tab" onclick="switchFormat('jsonl')">📑 JSONL</button>
                <button class="format-tab" onclick="switchFormat('sql')">💾 SQL INSERT</button>
                <button class="format-tab" onclick="switchFormat('sql-update')">🔄 SQL UPDATE</button>
                <button class="format-tab" onclick="switchFormat('xml')">📜 XML</button>
                <button class="format-tab" onclick="switchFormat('excel')">📊 Excel</button>
            </div>
            <div id="formatContent"></div>
        </div>
    `;
    
    resultsSection.appendChild(viewerSection);
    switchFormat('table');
}

function switchFormat(format) {
    dataGenState.currentFormat = format;
    
    // Update active tab
    document.querySelectorAll('.format-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    const contentDiv = document.getElementById('formatContent');
    
    if (format === 'table') {
        contentDiv.innerHTML = '';
        return;
    }
    
    // Show format viewer/editor
    const code = generateFormatCode(format);
    dataGenState.editedCode = code;
    
    contentDiv.innerHTML = `
        <div class="format-viewer-container">
            <div class="code-editor-panel">
                <div class="editor-toolbar">
                    <button class="btn btn-sm btn-secondary" onclick="validateCode()" title="Ctrl+Shift+F">✓ Validate</button>
                    <button class="btn btn-sm btn-secondary" onclick="formatCode()" title="Ctrl+L">✨ Format</button>
                    <button class="btn btn-sm btn-primary" onclick="syncToTable()" title="Ctrl+S">🔄 Sync to Table</button>
                    <button class="btn btn-sm btn-secondary" onclick="findReplace()">🔍 Find & Replace</button>
                </div>
                <div class="code-editor" id="codeEditor">
                    <div class="line-numbers" id="lineNumbers"></div>
                    <div class="code-editor-content code-with-numbers" contenteditable="true" spellcheck="false" id="editableCode" oninput="updateLineNumbers(); trackCodeChanges()">${escapeHtml(code)}</div>
                </div>
            </div>
            <div class="editor-side-panel">
                <div class="panel-section-editor">
                    <h4>⚙️ Format Options</h4>
                    ${getFormatOptions(format)}
                </div>
                <div class="panel-section-editor">
                    <h4>🚀 Actions</h4>
                    <div class="panel-actions">
                        <button class="btn btn-sm btn-primary btn-full" onclick="copyCodeToClipboard()">📋 Copy to Clipboard</button>
                        <button class="btn btn-sm btn-secondary btn-full" onclick="downloadCode()">💾 Download</button>
                        <button class="btn btn-sm btn-secondary btn-full" onclick="importCode()">📥 Import/Paste</button>
                        <button class="btn btn-sm btn-ghost btn-full" onclick="switchFormat('table')">👁️ Back to Table</button>
                    </div>
                </div>
                <div class="panel-section-editor">
                    <h4>📊 Statistics</h4>
                    <div class="editor-stats">
                        <div class="stat-item">
                            <div class="stat-label">Size</div>
                            <div class="stat-value" id="codeSize">-</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Lines</div>
                            <div class="stat-value" id="codeLines">-</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Records</div>
                            <div class="stat-value">${state.generatedData.data.length}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Columns</div>
                            <div class="stat-value">${state.generatedData.headers.length}</div>
                        </div>
                    </div>
                </div>
                <div class="panel-section-editor">
                    <h4>⌨️ Shortcuts</h4>
                    <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.8;">
                        <div><kbd>Ctrl+A</kbd> Select All</div>
                        <div><kbd>Ctrl+C</kbd> Copy</div>
                        <div><kbd>Ctrl+V</kbd> Paste</div>
                        <div><kbd>Ctrl+Z</kbd> Undo</div>
                        <div><kbd>Ctrl+L</kbd> Format</div>
                        <div><kbd>Ctrl+S</kbd> Sync to Table</div>
                        <div><kbd>Ctrl+F</kbd> Find</div>
                    </div>
                </div>
                <div id="validationResults"></div>
            </div>
        </div>
    `;
    
    updateLineNumbers();
    updateCodeStats();
    applySyntaxHighlighting();
}

function generateFormatCode(format) {
    const { headers, data } = state.generatedData;
    const opts = dataGenState.formatOptions;
    
    switch(format) {
        case 'csv':
            return generateCSV(headers, data, opts.csv);
        case 'json':
            return generateJSON(data, opts.json);
        case 'jsonl':
            return generateJSONL(data);
        case 'sql':
            return generateSQL(headers, data, opts.sql);
        case 'sql-update':
            return generateSQLUpdate(headers, data, opts.sql);
        case 'xml':
            return generateXML(headers, data);
        case 'excel':
            return generateCSV(headers, data, { delimiter: '\t', includeHeaders: true });
        default:
            return '';
    }
}

function generateCSV(headers, data, options) {
    const delimiter = options.delimiter || ',';
    let csv = '';
    
    if (options.includeHeaders) {
        csv += headers.join(delimiter) + '\n';
    }
    
    csv += data.map(row => 
        headers.map(h => {
            const value = String(row[h] || '');
            if (options.quoteMode === 'all' || (options.quoteMode === 'minimal' && value.includes(delimiter))) {
                return '"' + value.replace(/"/g, '""') + '"';
            }
            return value;
        }).join(delimiter)
    ).join('\n');
    
    return csv;
}

function generateJSON(data, options) {
    if (options.pretty) {
        return JSON.stringify(data, null, options.indent || 2);
    }
    return JSON.stringify(data);
}

function generateJSONL(data) {
    return data.map(row => JSON.stringify(row)).join('\n');
}

function generateSQL(headers, data, options) {
    const tableName = options.tableName || 'generated_table';
    let sql = '';
    
    data.forEach(row => {
        const columns = options.includeColumns ? `(${headers.join(', ')})` : '';
        const values = headers.map(h => {
            const val = row[h];
            if (val === null || val === undefined) return 'NULL';
            if (typeof val === 'number') return val;
            return "'" + String(val).replace(/'/g, "''") + "'";
        }).join(', ');
        sql += `INSERT INTO ${tableName} ${columns} VALUES (${values});\n`;
    });
    
    return sql;
}

function generateSQLUpdate(headers, data, options) {
    const tableName = options.tableName || 'generated_table';
    const idColumn = headers[0];
    let sql = '';
    
    data.forEach(row => {
        const sets = headers.slice(1).map(h => {
            const val = row[h];
            if (val === null || val === undefined) return `${h} = NULL`;
            if (typeof val === 'number') return `${h} = ${val}`;
            return `${h} = '` + String(val).replace(/'/g, "''") + "'";
        }).join(', ');
        const whereValue = typeof row[idColumn] === 'number' ? row[idColumn] : "'" + String(row[idColumn]).replace(/'/g, "''") + "'";
        sql += `UPDATE ${tableName} SET ${sets} WHERE ${idColumn} = ${whereValue};\n`;
    });
    
    return sql;
}

function generateXML(headers, data) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<data>\n';
    
    data.forEach(row => {
        xml += '  <record>\n';
        headers.forEach(h => {
            const val = String(row[h] || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            xml += `    <${h}>${val}</${h}>\n`;
        });
        xml += '  </record>\n';
    });
    
    xml += '</data>';
    return xml;
}

function getFormatOptions(format) {
    const opts = dataGenState.formatOptions;
    
    switch(format) {
        case 'csv':
        case 'excel':
            return `
                <div class="format-option">
                    <label>Delimiter</label>
                    <select onchange="updateFormatOption('csv', 'delimiter', this.value)">
                        <option value="," ${opts.csv.delimiter === ',' ? 'selected' : ''}>Comma</option>
                        <option value=";" ${opts.csv.delimiter === ';' ? 'selected' : ''}>Semicolon</option>
                        <option value="\t" ${opts.csv.delimiter === '\t' ? 'selected' : ''}>Tab</option>
                        <option value="|" ${opts.csv.delimiter === '|' ? 'selected' : ''}>Pipe</option>
                    </select>
                </div>
                <div class="format-option">
                    <label>Include Headers</label>
                    <input type="checkbox" ${opts.csv.includeHeaders ? 'checked' : ''} onchange="updateFormatOption('csv', 'includeHeaders', this.checked)">
                </div>
            `;
        case 'json':
            return `
                <div class="format-option">
                    <label>Indentation</label>
                    <select onchange="updateFormatOption('json', 'indent', parseInt(this.value))">
                        <option value="2" ${opts.json.indent === 2 ? 'selected' : ''}>2 spaces</option>
                        <option value="4" ${opts.json.indent === 4 ? 'selected' : ''}>4 spaces</option>
                        <option value="8" ${opts.json.indent === 8 ? 'selected' : ''}>8 spaces</option>
                    </select>
                </div>
                <div class="format-option">
                    <label>Pretty Print</label>
                    <input type="checkbox" ${opts.json.pretty ? 'checked' : ''} onchange="updateFormatOption('json', 'pretty', this.checked)">
                </div>
            `;
        case 'sql':
        case 'sql-update':
            return `
                <div class="format-option">
                    <label>Table Name</label>
                    <input type="text" value="${opts.sql.tableName}" onchange="updateFormatOption('sql', 'tableName', this.value)">
                </div>
                <div class="format-option">
                    <label>Include Columns</label>
                    <input type="checkbox" ${opts.sql.includeColumns ? 'checked' : ''} onchange="updateFormatOption('sql', 'includeColumns', this.checked)">
                </div>
            `;
        default:
            return '<div style="color: var(--text-secondary); font-size: 13px;">No options for this format</div>';
    }
}

function updateFormatOption(formatType, key, value) {
    dataGenState.formatOptions[formatType][key] = value;
    switchFormat(dataGenState.currentFormat);
}

function updateLineNumbers() {
    const editor = document.getElementById('editableCode');
    const lineNumbers = document.getElementById('lineNumbers');
    if (!editor || !lineNumbers) return;
    
    const text = editor.innerText || editor.textContent;
    const lines = text.split('\n');
    lineNumbers.innerHTML = lines.map((_, i) => `<div>${i + 1}</div>`).join('');
}

function updateCodeStats() {
    const editor = document.getElementById('editableCode');
    if (!editor) return;
    
    const text = editor.innerText || editor.textContent;
    const sizeKB = (new Blob([text]).size / 1024).toFixed(2);
    const lines = text.split('\n').length;
    
    const sizeEl = document.getElementById('codeSize');
    const linesEl = document.getElementById('codeLines');
    if (sizeEl) sizeEl.textContent = sizeKB + ' KB';
    if (linesEl) linesEl.textContent = lines;
}

function trackCodeChanges() {
    const editor = document.getElementById('editableCode');
    if (editor) {
        dataGenState.editedCode = editor.innerText || editor.textContent;
        updateCodeStats();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function applySyntaxHighlighting() {
    // Basic syntax highlighting - would be enhanced with a proper library in production
    const editor = document.getElementById('editableCode');
    if (!editor) return;
    
    const format = dataGenState.currentFormat;
    let html = editor.textContent;
    
    if (format === 'json' || format === 'jsonl') {
        html = html.replace(/"([^"]+)":/g, '<span class="syntax-property">"$1"</span>:');
        html = html.replace(/: "([^"]*)"/g, ': <span class="syntax-string">"$1"</span>');
        html = html.replace(/: (\d+\.?\d*)/g, ': <span class="syntax-number">$1</span>');
        html = html.replace(/: (true|false)/g, ': <span class="syntax-boolean">$1</span>');
        html = html.replace(/: null/g, ': <span class="syntax-null">null</span>');
    } else if (format === 'sql' || format === 'sql-update') {
        html = html.replace(/\b(INSERT|INTO|VALUES|UPDATE|SET|WHERE|SELECT|FROM|AND|OR|NULL)\b/g, '<span class="syntax-sql-keyword">$1</span>');
        html = html.replace(/'([^']*)'/g, '<span class="syntax-string">\' $1\'</span>');
    } else if (format === 'xml') {
        html = html.replace(/<([a-zA-Z][^>]*)>/g, '<span class="syntax-xml-tag">&lt;$1&gt;</span>');
        html = html.replace(/<\/([a-zA-Z][^>]*)>/g, '<span class="syntax-xml-tag">&lt;/$1&gt;</span>');
    }
    
    // Don't apply if it breaks the editor
    // editor.innerHTML = html;
}

function validateCode() {
    const format = dataGenState.currentFormat;
    const code = dataGenState.editedCode;
    const resultsDiv = document.getElementById('validationResults');
    
    let isValid = true;
    let message = '';
    
    try {
        if (format === 'json') {
            JSON.parse(code);
            message = '✓ Valid JSON syntax';
        } else if (format === 'jsonl') {
            code.split('\n').forEach((line, i) => {
                if (line.trim()) JSON.parse(line);
            });
            message = '✓ Valid JSONL format';
        } else if (format === 'csv') {
            const lines = code.split('\n').filter(l => l.trim());
            message = `✓ Valid CSV (${lines.length} rows)`;
        } else if (format === 'xml') {
            const parser = new DOMParser();
            const doc = parser.parseFromString(code, 'application/xml');
            const errors = doc.getElementsByTagName('parsererror');
            if (errors.length > 0) throw new Error('Invalid XML');
            message = '✓ Valid XML syntax';
        } else {
            message = '✓ Syntax looks good';
        }
        
        resultsDiv.innerHTML = `<div class="validation-success">${message}</div>`;
        showToast(message, 'success');
    } catch (error) {
        isValid = false;
        message = '✗ Validation failed: ' + error.message;
        resultsDiv.innerHTML = `<div class="validation-error">${message}</div>`;
        showToast(message, 'error');
    }
}

function formatCode() {
    const format = dataGenState.currentFormat;
    const editor = document.getElementById('editableCode');
    if (!editor) return;
    
    try {
        let formatted = dataGenState.editedCode;
        
        if (format === 'json') {
            const parsed = JSON.parse(formatted);
            formatted = JSON.stringify(parsed, null, dataGenState.formatOptions.json.indent);
        } else if (format === 'jsonl') {
            const lines = formatted.split('\n').filter(l => l.trim());
            formatted = lines.map(line => JSON.stringify(JSON.parse(line))).join('\n');
        }
        
        editor.textContent = formatted;
        dataGenState.editedCode = formatted;
        updateLineNumbers();
        updateCodeStats();
        showToast('Code formatted successfully', 'success');
    } catch (error) {
        showToast('Error formatting code: ' + error.message, 'error');
    }
}

function syncToTable() {
    const format = dataGenState.currentFormat;
    const code = dataGenState.editedCode;
    
    try {
        let newData = [];
        let headers = [];
        
        if (format === 'json') {
            newData = JSON.parse(code);
            if (newData.length > 0) {
                headers = Object.keys(newData[0]);
            }
        } else if (format === 'jsonl') {
            newData = code.split('\n').filter(l => l.trim()).map(line => JSON.parse(line));
            if (newData.length > 0) {
                headers = Object.keys(newData[0]);
            }
        } else if (format === 'csv' || format === 'excel') {
            const lines = code.split('\n').filter(l => l.trim());
            const delimiter = dataGenState.formatOptions.csv.delimiter;
            
            if (dataGenState.formatOptions.csv.includeHeaders) {
                headers = lines[0].split(delimiter);
                lines.slice(1).forEach(line => {
                    const values = line.split(delimiter);
                    const row = {};
                    headers.forEach((h, i) => row[h] = values[i] || '');
                    newData.push(row);
                });
            }
        } else {
            showToast('Sync not supported for this format', 'warning');
            return;
        }
        
        if (newData.length > 0 && headers.length > 0) {
            state.generatedData = { headers, data: newData };
            filteredData = newData;
            currentPage = 1;
            renderDataTable();
            showToast(`Synced ${newData.length} rows to table`, 'success');
            switchFormat('table');
        } else {
            showToast('No valid data to sync', 'error');
        }
    } catch (error) {
        showToast('Error syncing: ' + error.message, 'error');
    }
}

function copyCodeToClipboard() {
    const code = dataGenState.editedCode;
    navigator.clipboard.writeText(code).then(() => {
        showToast('Copied to clipboard!', 'success');
    }).catch(() => {
        showToast('Failed to copy', 'error');
    });
}

function downloadCode() {
    const format = dataGenState.currentFormat;
    const code = dataGenState.editedCode;
    const extensions = { csv: 'csv', json: 'json', jsonl: 'jsonl', sql: 'sql', 'sql-update': 'sql', xml: 'xml', excel: 'tsv' };
    const ext = extensions[format] || 'txt';
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-data.${ext}`;
    a.click();
    showToast('File downloaded!', 'success');
}

function importCode() {
    const newCode = prompt('Paste your code here:');
    if (newCode) {
        const editor = document.getElementById('editableCode');
        if (editor) {
            editor.textContent = newCode;
            dataGenState.editedCode = newCode;
            updateLineNumbers();
            updateCodeStats();
            showToast('Code imported', 'success');
        }
    }
}

function findReplace() {
    const find = prompt('Find text:');
    if (!find) return;
    
    const replace = prompt('Replace with:');
    if (replace === null) return;
    
    const editor = document.getElementById('editableCode');
    if (editor) {
        const text = editor.textContent;
        const newText = text.replace(new RegExp(find, 'g'), replace);
        editor.textContent = newText;
        dataGenState.editedCode = newText;
        updateLineNumbers();
        updateCodeStats();
        showToast(`Replaced all occurrences`, 'success');
    }
}

function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    const icons = { success: '✅', error: '❌', warning: '⚠️', info: 'ℹ️' };
    toast.innerHTML = `<span style="font-size: 20px;">${icons[type]}</span><span>${message}</span>`;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function renderDataTable() {
    const { headers } = state.generatedData;
    const rowsPerPage = parseInt(document.getElementById('rowsPerPage').value) || 25;
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageData = filteredData.slice(start, end);
    
    const thead = document.getElementById('resultsTableHead');
    const tbody = document.getElementById('resultsTableBody');
    
    thead.innerHTML = `<tr>${headers.map(h => `<th style="padding: 16px; text-align: left; background: var(--bg-tertiary); position: sticky; top: 0; cursor: pointer;" onclick="sortTable('${h}')">${h} ${sortColumn === h ? (sortDirection === 'asc' ? '↑' : '↓') : ''}</th>`).join('')}</tr>`;
    tbody.innerHTML = pageData.map(row => 
        `<tr style="border-bottom: 1px solid var(--border-light);">${headers.map(h => `<td style="padding: 12px; font-size: 14px;">${row[h]}</td>`).join('')}</tr>`
    ).join('');
    
    document.getElementById('paginationInfo').textContent = `Showing ${start + 1}-${Math.min(end, filteredData.length)} of ${filteredData.length}`;
    renderPaginationControls();
}

function renderPaginationControls() {
    const rowsPerPage = parseInt(document.getElementById('rowsPerPage').value) || 25;
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const controls = document.getElementById('paginationControls');
    
    if (totalPages <= 1) {
        controls.innerHTML = '';
        return;
    }
    
    let html = '<button class="btn btn-sm btn-secondary" onclick="changePage(' + (currentPage - 1) + ')" ' + (currentPage === 1 ? 'disabled' : '') + '>← Prev</button>';
    
    for (let i = 1; i <= Math.min(totalPages, 10); i++) {
        html += `<button class="btn btn-sm ${i === currentPage ? 'btn-primary' : 'btn-ghost'}" onclick="changePage(${i})">${i}</button>`;
    }
    
    html += '<button class="btn btn-sm btn-secondary" onclick="changePage(' + (currentPage + 1) + ')" ' + (currentPage === totalPages ? 'disabled' : '') + '>→ Next</button>';
    controls.innerHTML = html;
}

function changePage(page) {
    const rowsPerPage = parseInt(document.getElementById('rowsPerPage').value) || 25;
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    if (page < 1 || page > totalPages) return;
    currentPage = page;
    renderDataTable();
}

function updatePagination() {
    currentPage = 1;
    renderDataTable();
}

function filterDataTable(query) {
    const { headers, data } = state.generatedData;
    if (!query) {
        filteredData = data;
    } else {
        filteredData = data.filter(row => 
            headers.some(h => String(row[h]).toLowerCase().includes(query.toLowerCase()))
        );
    }
    currentPage = 1;
    renderDataTable();
}

function sortTable(column) {
    if (sortColumn === column) {
        sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
        sortColumn = column;
        sortDirection = 'asc';
    }
    
    filteredData.sort((a, b) => {
        const aVal = a[column];
        const bVal = b[column];
        if (aVal < bVal) return sortDirection === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortDirection === 'asc' ? 1 : -1;
        return 0;
    });
    
    renderDataTable();
}

function toggleColumnVisibility() {
    showNotification('Column visibility toggle - feature simulated', 'info');
}

function exportDataAdvanced() {
    const format = document.getElementById('exportFormat').value;
    
    switch(format) {
        case 'csv':
            exportDataCSV();
            break;
        case 'json':
            exportDataJSON();
            break;
        case 'jsonl':
            exportDataJSONL();
            break;
        case 'sql':
            exportDataSQL();
            break;
        case 'sql-update':
            exportDataSQLUpdate();
            break;
        case 'xml':
            exportDataXML();
            break;
        case 'excel':
            showNotification('Excel export simulated - use CSV for actual export', 'info');
            exportDataCSV();
            break;
    }
}

function exportDataCSV() {
    const { headers, data } = state.generatedData;
    const csv = [headers, ...data.map(row => headers.map(h => row[h]))].map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-data.csv';
    a.click();
    showNotification('CSV exported successfully', 'success');
}

function exportDataJSON() {
    const { data } = state.generatedData;
    const json = JSON.stringify(data, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-data.json';
    a.click();
    showNotification('JSON exported successfully', 'success');
}

function exportDataJSONL() {
    const { data } = state.generatedData;
    const jsonl = data.map(row => JSON.stringify(row)).join('\n');
    const blob = new Blob([jsonl], { type: 'application/jsonl' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-data.jsonl';
    a.click();
    showNotification('JSONL exported successfully', 'success');
}

function exportDataSQL() {
    const { headers, data } = state.generatedData;
    const tableName = prompt('Enter table name:', 'generated_data');
    if (!tableName) return;
    
    const sql = data.map(row => {
        const values = headers.map(h => `'${String(row[h]).replace(/'/g, "''")}'`).join(', ');
        return `INSERT INTO ${tableName} (${headers.join(', ')}) VALUES (${values});`;
    }).join('\n');
    
    const blob = new Blob([sql], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tableName}-insert.sql`;
    a.click();
    showNotification('SQL INSERT statements exported', 'success');
}

function exportDataSQLUpdate() {
    const { headers, data } = state.generatedData;
    const tableName = prompt('Enter table name:', 'generated_data');
    const idColumn = prompt('Enter ID column name:', 'id');
    if (!tableName || !idColumn) return;
    
    const sql = data.map(row => {
        const sets = headers.filter(h => h !== idColumn).map(h => `${h} = '${String(row[h]).replace(/'/g, "''")}'`).join(', ');
        return `UPDATE ${tableName} SET ${sets} WHERE ${idColumn} = '${row[idColumn]}';`;
    }).join('\n');
    
    const blob = new Blob([sql], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${tableName}-update.sql`;
    a.click();
    showNotification('SQL UPDATE statements exported', 'success');
}

function exportDataXML() {
    const { headers, data } = state.generatedData;
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n<data>\n';
    
    data.forEach(row => {
        xml += '  <record>\n';
        headers.forEach(h => {
            xml += `    <${h}>${String(row[h]).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</${h}>\n`;
        });
        xml += '  </record>\n';
    });
    
    xml += '</data>';
    
    const blob = new Blob([xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'generated-data.xml';
    a.click();
    showNotification('XML exported successfully', 'success');
}

function copyDataToClipboard() {
    const { headers, data } = state.generatedData;
    const text = [headers.join('\t'), ...data.map(row => headers.map(h => row[h]).join('\t'))].join('\n');
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Data copied to clipboard', 'success');
    }).catch(() => {
        showNotification('Failed to copy to clipboard', 'error');
    });
}

function clearGeneratedData() {
    if (confirm('Clear all generated data?')) {
        state.generatedData = null;
        dataGenState.generatedData = null;
        filteredData = null;
        document.getElementById('dataResults').style.display = 'none';
        showNotification('Data cleared', 'success');
    }
}

// CMS, Data Management, MCP Views
function renderCMS() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="background: var(--bg-secondary); padding: 32px; border-radius: 12px; border: 1px solid var(--border);">
                <h2 style="margin: 0 0 24px 0;">Content Management System</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Create, edit, and publish content for your platform.</p>
                <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                    <button class="btn btn-primary">➕ New Article</button>
                    <button class="btn btn-secondary">📅 Content Calendar</button>
                </div>
                <div style="background: var(--bg-tertiary); padding: 24px; border-radius: 8px; text-align: center; color: var(--text-muted);">
                    <p>CMS features coming soon...</p>
                </div>
            </div>
        </div>
    `;
}

function renderDataManagement() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="background: var(--bg-secondary); padding: 32px; border-radius: 12px; border: 1px solid var(--border);">
                <h2 style="margin: 0 0 24px 0;">Data Management</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Import, export, and manage your data sources.</p>
                <div style="display: flex; gap: 12px; margin-bottom: 24px;">
                    <button class="btn btn-primary">📤 Import CSV</button>
                    <button class="btn btn-secondary">📥 Export Data</button>
                    <button class="btn btn-secondary">🔌 Connect API</button>
                </div>
                <div style="background: var(--bg-tertiary); padding: 24px; border-radius: 8px; text-align: center; color: var(--text-muted);">
                    <p>Data management features coming soon...</p>
                </div>
            </div>
        </div>
    `;
}

// AI Coding Agent View
function renderAICodingAgent() {
    const contentArea = document.getElementById('contentArea');
    
    // Ensure content area is visible and properly styled
    contentArea.style.display = 'block';
    contentArea.style.visibility = 'visible';
    contentArea.style.backgroundColor = '#0a0a0a';
    contentArea.style.color = '#FFFFFF';
    contentArea.style.minHeight = 'calc(100vh - 100px)';
    contentArea.classList.remove('edit-mode');
    
    contentArea.innerHTML = `
        <div style="max-width: 1600px; margin: 0 auto; height: calc(100vh - 150px); display: flex; flex-direction: column; background: #000000;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2A2A2A 100%); border: 1px solid #444444; border-radius: 12px; padding: 24px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(0,0,0,0.3); display: block;">
                <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 12px;">
                    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">🤖</div>
                    <div style="flex: 1;">
                        <h2 style="margin: 0; font-size: 28px; font-weight: 700;">AI Coding Master</h2>
                        <p style="margin: 4px 0 0 0; color: var(--text-secondary); font-size: 14px;">Your personal dashboard secretary - Ask me to modify anything!</p>
                    </div>
                    <button class="btn btn-secondary" onclick="openAIConfigModal()" style="white-space: nowrap;">⚙️ Configure API</button>
                </div>
            </div>
            
            <!-- Chat Container -->
            <div style="flex: 1; display: grid; grid-template-columns: 1fr 300px; gap: 24px; min-height: 400px; background: #000000;">
                <!-- Main Chat -->
                <div style="display: flex; flex-direction: column; background: #2A2A2A; border: 1px solid #444444; border-radius: 12px; overflow: hidden; min-height: 500px;">
                    <!-- Messages -->
                    <div id="aiChatMessages" style="flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 16px; background: #1a1a1a; min-height: 400px;">
                        ${renderAIChatMessages()}
                    </div>
                    
                    <!-- Input Area -->
                    <div style="padding: 20px; border-top: 1px solid #444444; background: #2A2A2A;">
                        <div style="display: flex; gap: 12px; align-items: flex-end;">
                            <textarea id="aiChatInput" placeholder="Ask me to add components, create pages, modify dashboard..." style="flex: 1; min-height: 60px; max-height: 150px; padding: 12px; background: #1a1a1a; color: #FFFFFF; border: 1px solid #444444; border-radius: 8px; font-family: inherit; font-size: 14px; resize: vertical;" onkeydown="handleAIChatKeydown(event)"></textarea>
                            <button class="btn btn-primary" onclick="sendAIMessage()" style="height: 60px; padding: 0 24px;">➤ Send</button>
                        </div>
                        <div style="margin-top: 8px; font-size: 12px; color: #999999; display: flex; justify-content: space-between;">
                            <span>Press Enter to send, Shift+Enter for new line</span>
                            <span id="charCounter">0 / 2000</span>
                        </div>
                    </div>
                </div>
                
                <!-- Sidebar -->
                <div style="display: flex; flex-direction: column; gap: 16px; min-height: 500px;">
                    <!-- Quick Actions -->
                    <div style="background: #2A2A2A; border: 1px solid #444444; border-radius: 12px; padding: 20px;">
                        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">⚡ Quick Actions</h3>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <button class="btn btn-sm btn-ghost" onclick="quickAIAction('add-button')" style="justify-content: flex-start;">➕ Add Button</button>
                            <button class="btn btn-sm btn-ghost" onclick="quickAIAction('add-chart')" style="justify-content: flex-start;">📊 Add Chart</button>
                            <button class="btn btn-sm btn-ghost" onclick="quickAIAction('add-table')" style="justify-content: flex-start;">📋 Add Table</button>
                            <button class="btn btn-sm btn-ghost" onclick="quickAIAction('add-menu')" style="justify-content: flex-start;">📄 Add Menu Item</button>
                            <button class="btn btn-sm btn-ghost" onclick="quickAIAction('theme')" style="justify-content: flex-start;">🎨 Change Theme</button>
                        </div>
                    </div>
                    
                    <!-- Example Prompts -->
                    <div style="background: #2A2A2A; border: 1px solid #444444; border-radius: 12px; padding: 20px; flex: 1; overflow-y: auto;">
                        <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">💡 Example Prompts</h3>
                        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 13px;">
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Add a button to the Analytics page that says 'Download Report'">"Add a button to Analytics page"</div>
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Create a new menu item called 'Reports' with a chart icon">"Create new menu item"</div>
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Add a stat card showing total revenue to the analytics page">"Add stat card to Analytics"</div>
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Generate a line chart showing revenue over time and add it to analytics">"Add revenue chart"</div>
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Create a custom dashboard page for monitoring servers">"Custom monitoring page"</div>
                            <div style="padding: 10px; background: #1a1a1a; border-radius: 6px; cursor: pointer; color: #CCCCCC;" onclick="loadExamplePrompt(this)" data-prompt="Remove the MCP menu item">"Remove MCP menu"</div>
                        </div>
                    </div>
                    
                    <!-- Recent Changes -->
                    <div style="background: #2A2A2A; border: 1px solid #444444; border-radius: 12px; padding: 20px;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <h3 style="margin: 0; font-size: 16px; font-weight: 600;">📝 Recent Changes</h3>
                            <button class="btn btn-sm btn-ghost" onclick="clearAIHistory()" style="padding: 4px 8px; font-size: 12px;">Clear</button>
                        </div>
                        <div id="aiChangeHistory" style="font-size: 12px; color: #CCCCCC;">
                            ${aiAgentState.changeHistory.length === 0 ? 'No changes yet' : renderChangeHistory()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Setup input character counter
    const input = document.getElementById('aiChatInput');
    if (input) {
        input.addEventListener('input', () => {
            const counter = document.getElementById('charCounter');
            if (counter) {
                counter.textContent = `${input.value.length} / 2000`;
            }
        });
    }
    
    // Scroll to bottom of chat
    setTimeout(() => {
        const messagesContainer = document.getElementById('aiChatMessages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }, 100);
}

function renderAIChatMessages() {
    return aiAgentState.messages.map(msg => {
        const isAI = msg.sender === 'ai';
        const time = new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div style="display: flex; ${isAI ? 'justify-content: flex-start' : 'justify-content: flex-end'};">
                <div style="max-width: 70%; padding: 12px 16px; border-radius: 12px; background: ${isAI ? '#2A2A2A' : 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)'}; color: ${isAI ? '#FFFFFF' : '#FFFFFF'}; border: 1px solid ${isAI ? '#444444' : 'transparent'};">
                    <div style="font-size: 14px; line-height: 1.6; word-wrap: break-word; white-space: pre-wrap;">${escapeHtml(msg.text)}</div>
                    <div style="font-size: 11px; color: ${isAI ? '#999999' : 'rgba(255,255,255,0.7)'}; margin-top: 6px;">${time}</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderChangeHistory() {
    return aiAgentState.changeHistory.slice(-5).reverse().map(change => `
        <div style="padding: 8px; background: #1a1a1a; border-radius: 4px; margin-bottom: 8px; border: 1px solid #333333;">
            <div style="font-weight: 500; color: #FFFFFF;">${change.action}</div>
            <div style="font-size: 11px; color: #999999; margin-top: 2px;">${new Date(change.timestamp).toLocaleTimeString()}</div>
        </div>
    `).join('');
}

function handleAIChatKeydown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendAIMessage();
    }
}

function sendAIMessage() {
    const input = document.getElementById('aiChatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    aiAgentState.messages.push({
        id: `msg_${Date.now()}`,
        sender: 'user',
        text: message,
        timestamp: new Date().toISOString()
    });
    
    input.value = '';
    document.getElementById('charCounter').textContent = '0 / 2000';
    
    // Re-render messages
    updateAIChatDisplay();
    
    // Process AI response
    setTimeout(() => processAIRequest(message), 500);
}

function processAIRequest(userMessage) {
    const lower = userMessage.toLowerCase();
    
    // Show processing message
    aiAgentState.messages.push({
        id: `msg_${Date.now()}`,
        sender: 'ai',
        text: '🤔 Processing your request...',
        timestamp: new Date().toISOString()
    });
    updateAIChatDisplay();
    
    // Simulate AI processing
    setTimeout(() => {
        // Remove processing message
        aiAgentState.messages.pop();
        
        // Parse intent and execute action
        executeAIAction(userMessage, lower);
        
        updateAIChatDisplay();
    }, 1000);
}

function executeAIAction(originalMessage, lowerMessage) {
    // Add component actions
    if (lowerMessage.includes('add') && (lowerMessage.includes('button') || lowerMessage.includes('btn'))) {
        const view = state.currentView;
        if (view === 'ai_coding_agent') {
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: 'Please navigate to the page where you want to add the button first, then ask me again.',
                timestamp: new Date().toISOString()
            });
            return;
        }
        
        const text = extractButtonText(originalMessage);
        addComponent('button', 'primary', 50, 50, 'text', '');
        
        // Update button text
        const components = state.views[view];
        if (components && components.length > 0) {
            const lastComp = components[components.length - 1];
            lastComp.content.text = text;
        }
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `✅ Done! I've added a button that says "${text}" to the ${state.menuItems.find(m => m.id === view)?.label || view} page.`,
            timestamp: new Date().toISOString()
        });
        
        aiAgentState.changeHistory.push({
            action: `Added button "${text}" to ${view}`,
            timestamp: new Date().toISOString()
        });
        
        renderContentArea();
    }
    else if (lowerMessage.includes('add') && lowerMessage.includes('chart')) {
        const view = state.currentView;
        if (view === 'ai_coding_agent') {
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: 'Please navigate to the page where you want to add the chart first.',
                timestamp: new Date().toISOString()
            });
            return;
        }
        
        addComponent('chart', 'primary', 50, 50, 'text', 'line');
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `✅ I've added a line chart to the ${state.menuItems.find(m => m.id === view)?.label || view} page!`,
            timestamp: new Date().toISOString()
        });
        
        aiAgentState.changeHistory.push({
            action: `Added chart to ${view}`,
            timestamp: new Date().toISOString()
        });
        
        renderContentArea();
    }
    else if (lowerMessage.includes('add') && (lowerMessage.includes('table') || lowerMessage.includes('data table'))) {
        const view = state.currentView;
        if (view === 'ai_coding_agent') {
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: 'Please navigate to the page where you want to add the table first.',
                timestamp: new Date().toISOString()
            });
            return;
        }
        
        addComponent('table', 'primary', 50, 50, 'text', '');
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `✅ I've added a data table to the ${state.menuItems.find(m => m.id === view)?.label || view} page!`,
            timestamp: new Date().toISOString()
        });
        
        aiAgentState.changeHistory.push({
            action: `Added table to ${view}`,
            timestamp: new Date().toISOString()
        });
        
        renderContentArea();
    }
    else if (lowerMessage.includes('add') && (lowerMessage.includes('stat card') || lowerMessage.includes('stat'))) {
        const view = state.currentView;
        if (view === 'ai_coding_agent') {
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: 'Please navigate to the page where you want to add the stat card first.',
                timestamp: new Date().toISOString()
            });
            return;
        }
        
        addComponent('stat_card', 'primary', 50, 50, 'text', '');
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `✅ I've added a stat card to the ${state.menuItems.find(m => m.id === view)?.label || view} page!`,
            timestamp: new Date().toISOString()
        });
        
        aiAgentState.changeHistory.push({
            action: `Added stat card to ${view}`,
            timestamp: new Date().toISOString()
        });
        
        renderContentArea();
    }
    // Menu item actions
    else if ((lowerMessage.includes('add') || lowerMessage.includes('create')) && (lowerMessage.includes('menu') || lowerMessage.includes('page'))) {
        const name = extractMenuName(originalMessage);
        const id = name.toLowerCase().replace(/\s+/g, '_');
        
        state.menuItems.push({
            id: id,
            label: name,
            icon: '📄'
        });
        
        state.views[id] = [];
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `✅ I've created a new menu item called "${name}"! You can find it in the sidebar.`,
            timestamp: new Date().toISOString()
        });
        
        aiAgentState.changeHistory.push({
            action: `Created menu item "${name}"`,
            timestamp: new Date().toISOString()
        });
        
        renderSidebar();
        switchView(id);
    }
    else if (lowerMessage.includes('remove') && lowerMessage.includes('menu')) {
        const menuName = extractMenuName(originalMessage);
        const menuItem = state.menuItems.find(m => m.label.toLowerCase().includes(menuName.toLowerCase()));
        
        if (!menuItem) {
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: `I couldn't find a menu item matching "${menuName}". Could you be more specific?`,
                timestamp: new Date().toISOString()
            });
            return;
        }
        
        // Ask for confirmation
        aiAgentState.pendingAction = {
            type: 'delete_menu',
            menuId: menuItem.id,
            menuLabel: menuItem.label
        };
        
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: `⚠️ Are you sure you want to remove the "${menuItem.label}" menu item? This will delete all components on that page. Reply with "confirm" to proceed or "cancel" to abort.`,
            timestamp: new Date().toISOString()
        });
    }
    else if (lowerMessage === 'confirm' && aiAgentState.pendingAction) {
        const action = aiAgentState.pendingAction;
        
        if (action.type === 'delete_menu') {
            state.menuItems = state.menuItems.filter(m => m.id !== action.menuId);
            delete state.views[action.menuId];
            
            aiAgentState.messages.push({
                id: `msg_${Date.now()}`,
                sender: 'ai',
                text: `✅ Done! I've removed the "${action.menuLabel}" menu item.`,
                timestamp: new Date().toISOString()
            });
            
            aiAgentState.changeHistory.push({
                action: `Removed menu item "${action.menuLabel}"`,
                timestamp: new Date().toISOString()
            });
            
            renderSidebar();
            if (state.currentView === action.menuId) {
                switchView('analytics');
            }
        }
        
        aiAgentState.pendingAction = null;
    }
    else if (lowerMessage === 'cancel' && aiAgentState.pendingAction) {
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: 'Action cancelled.',
            timestamp: new Date().toISOString()
        });
        aiAgentState.pendingAction = null;
    }
    // Help and general queries
    else if (lowerMessage.includes('help') || lowerMessage.includes('what can you do')) {
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: 'I can help you with:\n\n• Adding components (buttons, charts, tables, stat cards, etc.)\n• Creating new menu items and pages\n• Removing menu items\n• Modifying existing components\n• Generating custom code\n\nJust tell me what you want to do in plain English!',
            timestamp: new Date().toISOString()
        });
    }
    else {
        aiAgentState.messages.push({
            id: `msg_${Date.now()}`,
            sender: 'ai',
            text: 'I understand you want to: "' + originalMessage + '". This feature is coming soon! For now, I can:\n\n• Add buttons, charts, tables, and stat cards\n• Create new menu items\n• Remove menu items\n\nTry one of the example prompts on the right!',
            timestamp: new Date().toISOString()
        });
    }
}

function extractButtonText(message) {
    // Try to extract text in quotes
    const quoteMatch = message.match(/["']([^"']+)["']/);
    if (quoteMatch) return quoteMatch[1];
    
    // Try to extract after "says"
    const saysMatch = message.match(/says\s+["']?([^"'\n]+)["']?/);
    if (saysMatch) return saysMatch[1].trim();
    
    // Try to extract after "that says"
    const thatSaysMatch = message.match(/that says\s+["']?([^"'\n]+)["']?/);
    if (thatSaysMatch) return thatSaysMatch[1].trim();
    
    return 'New Button';
}

function extractMenuName(message) {
    // Try to extract text in quotes
    const quoteMatch = message.match(/["']([^"']+)["']/);
    if (quoteMatch) return quoteMatch[1];
    
    // Try to extract after "called"
    const calledMatch = message.match(/called\s+["']?([^"'\n]+)["']?/);
    if (calledMatch) return calledMatch[1].trim();
    
    return 'New Page';
}

function updateAIChatDisplay() {
    const container = document.getElementById('aiChatMessages');
    if (container) {
        container.innerHTML = renderAIChatMessages();
        container.scrollTop = container.scrollHeight;
    }
    
    const historyContainer = document.getElementById('aiChangeHistory');
    if (historyContainer) {
        historyContainer.innerHTML = aiAgentState.changeHistory.length === 0 ? 'No changes yet' : renderChangeHistory();
    }
}

function quickAIAction(action) {
    const prompts = {
        'add-button': 'Add a button to the current page',
        'add-chart': 'Add a line chart to the current page',
        'add-table': 'Add a data table to the current page',
        'add-menu': 'Create a new menu item called "Reports"',
        'theme': 'Change the dashboard theme'
    };
    
    const input = document.getElementById('aiChatInput');
    if (input) {
        input.value = prompts[action] || '';
        input.focus();
    }
}

function loadExamplePrompt(element) {
    const prompt = element.getAttribute('data-prompt');
    const input = document.getElementById('aiChatInput');
    if (input && prompt) {
        input.value = prompt;
        input.focus();
    }
}

function clearAIHistory() {
    if (confirm('Clear all AI chat history and changes?')) {
        aiAgentState.messages = [
            { id: 'msg_0', sender: 'ai', text: 'Hello! I\'m your AI Coding Master. How can I help you modify the dashboard today?', timestamp: new Date().toISOString() }
        ];
        aiAgentState.changeHistory = [];
        aiAgentState.pendingAction = null;
        updateAIChatDisplay();
        showNotification('AI history cleared', 'success');
    }
}

function openAIConfigModal() {
    const modal = document.createElement('div');
    modal.className = 'modal open';
    modal.innerHTML = `
        <div class="modal-content" style="max-width: 600px;">
            <div class="modal-header">
                <h3>⚙️ Configure AI Backend</h3>
                <button class="close-btn" onclick="this.closest('.modal').remove()">✕</button>
            </div>
            <div class="modal-body">
                <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.3); border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                    <div style="font-size: 14px; font-weight: 600; color: var(--info); margin-bottom: 8px;">ℹ️ Backend Configuration</div>
                    <div style="font-size: 13px; color: var(--text-secondary); line-height: 1.6;">Connect to your own AI backend API. The AI agent will send requests to your server to process commands and generate responses. Same system as the Data Generator.</div>
                </div>
                
                <div class="form-group">
                    <label>API Endpoint URL</label>
                    <input type="url" id="aiEndpoint" class="form-input" placeholder="https://api.yourserver.com/ai/chat" value="${aiAgentState.apiConfig.endpoint}">
                </div>
                
                <div class="form-group">
                    <label>AI Provider</label>
                    <select id="aiProvider" class="form-input">
                        <option value="openai" ${aiAgentState.apiConfig.provider === 'openai' ? 'selected' : ''}>OpenAI (GPT-4, GPT-3.5)</option>
                        <option value="anthropic" ${aiAgentState.apiConfig.provider === 'anthropic' ? 'selected' : ''}>Anthropic (Claude)</option>
                        <option value="perplexity" ${aiAgentState.apiConfig.provider === 'perplexity' ? 'selected' : ''}>Perplexity</option>
                        <option value="groq" ${aiAgentState.apiConfig.provider === 'groq' ? 'selected' : ''}>Groq (Llama)</option>
                        <option value="google" ${aiAgentState.apiConfig.provider === 'google' ? 'selected' : ''}>Google (Gemini)</option>
                        <option value="custom" ${aiAgentState.apiConfig.provider === 'custom' ? 'selected' : ''}>Custom Provider</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Model Name</label>
                    <input type="text" id="aiModel" class="form-input" placeholder="gpt-4" value="${aiAgentState.apiConfig.model}">
                </div>
                
                <div class="form-group">
                    <label>API Key Reference</label>
                    <input type="password" id="aiApiKey" class="form-input" placeholder="Your backend will manage the actual key" value="${aiAgentState.apiConfig.apiKey}">
                    <div style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">This is a reference ID. Your backend server holds the actual API key.</div>
                </div>
            </div>
            <div class="modal-footer">
                <button class="btn-secondary" onclick="this.closest('.modal').remove()">Cancel</button>
                <button class="btn-primary" onclick="saveAIConfig()">💾 Save Configuration</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

function saveAIConfig() {
    aiAgentState.apiConfig = {
        endpoint: document.getElementById('aiEndpoint').value,
        provider: document.getElementById('aiProvider').value,
        model: document.getElementById('aiModel').value,
        apiKey: document.getElementById('aiApiKey').value
    };
    
    document.querySelector('.modal').remove();
    showNotification('AI backend configuration saved!', 'success');
    
    aiAgentState.messages.push({
        id: `msg_${Date.now()}`,
        sender: 'ai',
        text: '✅ Backend configuration updated! I\'m now connected to ' + aiAgentState.apiConfig.provider + '. Ready to help!',
        timestamp: new Date().toISOString()
    });
    
    updateAIChatDisplay();
}

// Chatbot View
function renderChatbot() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.style.display = 'block';
    contentArea.style.visibility = 'visible';
    contentArea.style.backgroundColor = '#0a0a0a';
    contentArea.style.color = '#FFFFFF';
    contentArea.style.minHeight = 'calc(100vh - 100px)';
    contentArea.classList.remove('edit-mode');
    
    contentArea.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto; height: calc(100vh - 150px); display: flex; flex-direction: column;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2A2A2A 100%); border: 1px solid #444444; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
                <div style="display: flex; align-items: center; gap: 16px;">
                    <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #3B82F6 0%, #10B981 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px;">💬</div>
                    <div>
                        <h2 style="margin: 0; font-size: 28px; font-weight: 700;">Chatbot</h2>
                        <p style="margin: 4px 0 0 0; color: #CCCCCC; font-size: 14px;">Your friendly dashboard assistant</p>
                    </div>
                </div>
            </div>
            
            <!-- Chat Container -->
            <div style="flex: 1; display: flex; flex-direction: column; background: #2A2A2A; border: 1px solid #444444; border-radius: 12px; overflow: hidden; min-height: 500px;">
                <!-- Messages -->
                <div id="chatMessages" style="flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 16px; background: #1a1a1a;">
                    ${renderChatMessages()}
                </div>
                
                <!-- Input Area -->
                <div style="padding: 20px; border-top: 1px solid #444444; background: #2A2A2A;">
                    <div style="display: flex; gap: 12px; align-items: center;">
                        <input type="text" id="chatInput" placeholder="Type your message..." style="flex: 1; padding: 12px 16px; background: #1a1a1a; color: #FFFFFF; border: 1px solid #444444; border-radius: 8px; font-family: inherit; font-size: 14px;" onkeydown="handleChatKeydown(event)">
                        <button class="btn btn-primary" onclick="sendChatMessage()" style="height: 48px; padding: 0 24px; font-size: 18px;">→</button>
                    </div>
                    <div style="margin-top: 8px; font-size: 12px; color: #999999;">
                        Press Enter to send
                    </div>
                </div>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        const messagesContainer = document.getElementById('chatMessages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }, 100);
}

function renderChatMessages() {
    return chatbotState.messages.map(msg => {
        const isBot = msg.sender === 'bot';
        const time = new Date(msg.timestamp).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
        
        return `
            <div style="display: flex; ${isBot ? 'justify-content: flex-start' : 'justify-content: flex-end'};">
                <div style="max-width: 70%; padding: 12px 16px; border-radius: 12px; background: ${isBot ? '#2A2A2A' : '#3B82F6'}; color: #FFFFFF; ${isBot ? 'border-left: 3px solid #3B82F6;' : ''}">
                    <div style="font-size: 14px; line-height: 1.6; word-wrap: break-word;">${escapeHtml(msg.text)}</div>
                    <div style="font-size: 11px; color: ${isBot ? '#999999' : 'rgba(255,255,255,0.7)'}; margin-top: 6px;">${time}</div>
                </div>
            </div>
        `;
    }).join('');
}

function handleChatKeydown(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        sendChatMessage();
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (!message) return;
    
    // Add user message
    chatbotState.messages.push({
        id: `chat_${Date.now()}`,
        sender: 'user',
        text: message,
        timestamp: new Date().toISOString()
    });
    
    input.value = '';
    updateChatDisplay();
    
    // Get bot response
    setTimeout(() => {
        const botResponse = getBotResponse(message);
        chatbotState.messages.push({
            id: `chat_${Date.now()}`,
            sender: 'bot',
            text: botResponse,
            timestamp: new Date().toISOString()
        });
        updateChatDisplay();
    }, 500);
}

function getBotResponse(userMessage) {
    const lower = userMessage.toLowerCase();
    
    if (lower.includes('hello') || lower.includes('hi')) {
        return 'Hi there! How can I help you today?';
    }
    if (lower.includes('help')) {
        return "I'm here to help! You can ask me about this dashboard or any other questions.";
    }
    if (lower.includes('what is this') || lower.includes('what\'s this')) {
        return 'This is your personal management dashboard with analytics, data tools, and more!';
    }
    if (lower.includes('thanks') || lower.includes('thank you')) {
        return "You're welcome! Is there anything else I can help with?";
    }
    if (lower.includes('bye') || lower.includes('goodbye')) {
        return 'Goodbye! Feel free to come back anytime!';
    }
    if (lower.includes('dashboard')) {
        return 'The dashboard provides analytics, data management, key management, AI tools, and more. You can navigate using the menu on the left!';
    }
    if (lower.includes('analytics')) {
        return 'The Analytics page shows your key metrics, revenue, AI usage, and other statistics. Click "Analytics" in the sidebar to view it!';
    }
    if (lower.includes('data')) {
        return 'We have several data tools: Data Management for imports/exports, Data Generator for creating test data, and more!';
    }
    
    return "That's interesting! Tell me more about that.";
}

function updateChatDisplay() {
    const container = document.getElementById('chatMessages');
    if (container) {
        container.innerHTML = renderChatMessages();
        container.scrollTop = container.scrollHeight;
    }
}

function renderMCP() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `
        <div style="max-width: 1200px; margin: 0 auto;">
            <div style="background: var(--bg-secondary); padding: 32px; border-radius: 12px; border: 1px solid var(--border);">
                <h2 style="margin: 0 0 24px 0;">Settings & Configuration</h2>
                <p style="color: var(--text-secondary); margin-bottom: 32px;">Manage your dashboard settings and preferences.</p>
                <div style="display: grid; gap: 20px;">
                    <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 8px;">
                        <h3 style="margin: 0 0 12px 0; font-size: 16px;">Theme Settings</h3>
                        <p style="font-size: 14px; color: var(--text-secondary);">Customize the dashboard appearance</p>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 8px;">
                        <h3 style="margin: 0 0 12px 0; font-size: 16px;">Backup & Export</h3>
                        <p style="font-size: 14px; color: var(--text-secondary);">Export all dashboard data</p>
                    </div>
                    <div style="background: var(--bg-tertiary); padding: 20px; border-radius: 8px;">
                        <h3 style="margin: 0 0 12px 0; font-size: 16px;">API Configuration</h3>
                        <p style="font-size: 14px; color: var(--text-secondary);">Manage API keys and endpoints</p>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Document ready handler for CSS selector input
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('scrapingStrategy')) {
        document.getElementById('scrapingStrategy').addEventListener('change', (e) => {
            document.getElementById('cssSelector').style.display = e.target.value === 'css' ? 'block' : 'none';
        });
    }
    
    // Keyboard shortcuts for code editor
    document.addEventListener('keydown', (e) => {
        if (!document.getElementById('editableCode')) return;
        
        if (e.ctrlKey || e.metaKey) {
            if (e.key === 'l') {
                e.preventDefault();
                formatCode();
            } else if (e.key === 's') {
                e.preventDefault();
                syncToTable();
            } else if (e.key === 'f' && e.shiftKey) {
                e.preventDefault();
                validateCode();
            } else if (e.key === 'h') {
                e.preventDefault();
                findReplace();
            }
        }
    });
});

// UIverse Integration Functions
function openUIverseModal() {
    document.getElementById('uiverseModal').classList.add('open');
    loadUIverseComponents();
}

function closeUIverseModal() {
    document.getElementById('uiverseModal').classList.remove('open');
}

function loadUIverseComponents() {
    const grid = document.getElementById('uiverseGrid');
    
    // Simulated UIverse components (in production, would fetch from UIverse.io)
    const mockComponents = [
        { id: 'uiv_1', name: 'Animated Button', category: 'buttons', html: '<button class="uiverse-btn">Click Me</button>', css: '.uiverse-btn { background: linear-gradient(45deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 24px; border: none; border-radius: 8px; cursor: pointer; transition: transform 0.2s; } .uiverse-btn:hover { transform: scale(1.05); }' },
        { id: 'uiv_2', name: '3D Card', category: 'cards', html: '<div class="card-3d">3D Card Content</div>', css: '.card-3d { background: white; padding: 24px; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); transform: perspective(1000px) rotateY(5deg); }' },
        { id: 'uiv_3', name: 'Glowing Input', category: 'inputs', html: '<input class="glow-input" placeholder="Type here...">', css: '.glow-input { background: #1a1a1a; color: white; padding: 12px; border: 2px solid #667eea; border-radius: 8px; transition: box-shadow 0.3s; } .glow-input:focus { outline: none; box-shadow: 0 0 20px #667eea; }' },
        { id: 'uiv_4', name: 'Spinner Loader', category: 'loaders', html: '<div class="spinner"></div>', css: '.spinner { width: 40px; height: 40px; border: 4px solid rgba(255,255,255,0.2); border-top-color: #667eea; border-radius: 50%; animation: spin 1s linear infinite; } @keyframes spin { to { transform: rotate(360deg); } }' }
    ];
    
    grid.innerHTML = mockComponents.map(comp => `
        <div style="background: var(--bg-tertiary); border: 1px solid var(--border); border-radius: 8px; padding: 16px; cursor: pointer;" onclick="previewUIverseComponent('${comp.id}')">
            <h4 style="margin: 0 0 12px 0; font-size: 14px;">${comp.name}</h4>
            <div style="background: var(--bg-secondary); padding: 12px; border-radius: 4px; min-height: 60px; display: flex; align-items: center; justify-content: center;">
                <div style="font-size: 24px;">🎨</div>
            </div>
            <button class="btn btn-sm btn-primary" style="margin-top: 12px; width: 100%;" onclick="event.stopPropagation(); importUIverseComponent('${comp.id}')">⬇️ Import</button>
        </div>
    `).join('');
    
    // Store mock components
    window.mockUIverseComponents = mockComponents;
}

function filterUIverse(category) {
    showNotification(`Filtering by ${category}`, 'info');
}

function previewUIverseComponent(id) {
    const comp = window.mockUIverseComponents.find(c => c.id === id);
    if (!comp) return;
    
    showNotification(`Preview: ${comp.name}`, 'info');
}

function importUIverseComponent(id) {
    const comp = window.mockUIverseComponents.find(c => c.id === id);
    if (!comp) return;
    
    // Add to custom components
    uiverseComponents.push({
        id: `uiverse_${Date.now()}`,
        name: comp.name,
        html: comp.html,
        css: comp.css,
        js: comp.js || ''
    });
    
    showNotification(`${comp.name} imported successfully!`, 'success');
    closeUIverseModal();
    
    // Add to canvas
    if (state.editMode) {
        addCustomComponent(comp.html, comp.css, comp.js || '', 100, 100);
    }
}

// Custom Code Component Functions
let currentCodeTab = 'html';
let customCodeState = { html: '', css: '', js: '' };

function openCustomCodeModal() {
    document.getElementById('customCodeModal').classList.add('open');
    currentCodeTab = 'html';
    customCodeState = { html: '<div class="custom-component">\n  <h3>My Component</h3>\n  <p>Add your content here</p>\n</div>', css: '.custom-component {\n  padding: 20px;\n  background: var(--bg-secondary);\n  border-radius: 8px;\n}', js: '// Add interactivity\nconsole.log("Custom component loaded");' };
    document.getElementById('customCodeEditor').value = customCodeState.html;
    updateCustomCodePreview();
}

function closeCustomCodeModal() {
    document.getElementById('customCodeModal').classList.remove('open');
}

function switchCodeTab(tab) {
    currentCodeTab = tab;
    const editor = document.getElementById('customCodeEditor');
    
    // Save current tab content
    customCodeState[currentCodeTab] = editor.value;
    
    // Load new tab content
    if (tab === 'html') {
        editor.value = customCodeState.html;
        editor.placeholder = '<div>Your HTML here</div>';
    } else if (tab === 'css') {
        editor.value = customCodeState.css;
        editor.placeholder = '.my-class { color: red; }';
    } else if (tab === 'js') {
        editor.value = customCodeState.js;
        editor.placeholder = 'console.log("Hello!");';
    }
    
    currentCodeTab = tab;
}

function updateCustomCodePreview() {
    const preview = document.getElementById('customCodePreview');
    if (!preview) return;
    
    try {
        // Save current editor content
        customCodeState[currentCodeTab] = document.getElementById('customCodeEditor').value;
        
        // Create preview
        const styleId = 'custom-preview-style';
        let existingStyle = document.getElementById(styleId);
        if (existingStyle) existingStyle.remove();
        
        const style = document.createElement('style');
        style.id = styleId;
        style.textContent = customCodeState.css;
        document.head.appendChild(style);
        
        preview.innerHTML = customCodeState.html;
        
        // Execute JS in preview context (sandboxed)
        if (customCodeState.js) {
            try {
                const previewScope = preview;
                const scopedJs = `(function() { ${customCodeState.js} }).call(previewScope);`;
                eval(scopedJs);
            } catch (jsError) {
                console.error('JS Error:', jsError);
            }
        }
    } catch (error) {
        preview.innerHTML = `<div style="color: var(--error); padding: 12px;">❌ Error: ${error.message}</div>`;
    }
}

// Auto-update preview
let previewTimeout;
if (document.getElementById('customCodeEditor')) {
    document.getElementById('customCodeEditor').addEventListener('input', () => {
        clearTimeout(previewTimeout);
        previewTimeout = setTimeout(updateCustomCodePreview, 500);
    });
}

function saveCustomCode() {
    customCodeState[currentCodeTab] = document.getElementById('customCodeEditor').value;
    
    const name = prompt('Component name:', 'Custom Component');
    if (!name) return;
    
    customCodeComponents.push({
        id: `custom_${Date.now()}`,
        name: name,
        html: customCodeState.html,
        css: customCodeState.css,
        js: customCodeState.js
    });
    
    showNotification(`${name} saved!`, 'success');
    closeCustomCodeModal();
    
    // Add to canvas if in edit mode
    if (state.editMode) {
        addCustomComponent(customCodeState.html, customCodeState.css, customCodeState.js, 50, 50);
    }
}

function addCustomComponent(html, css, js, x, y) {
    const newComponent = {
        id: `comp_${Date.now()}`,
        type: 'custom_code',
        x: x,
        y: y,
        width: 400,
        height: 200,
        content: { html, css, js },
        size: 'medium',
        variant: 'primary'
    };
    
    if (!state.views[state.currentView]) {
        state.views[state.currentView] = [];
    }
    
    state.views[state.currentView].push(newComponent);
    renderContentArea();
}

// Interactive Component Handlers
let currentAudio = null;

function togglePlay(button) {
    if (!currentAudio) {
        // Create audio element (using a sample audio URL)
        currentAudio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
        currentAudio.volume = 0.5;
    }
    
    if (currentAudio.paused) {
        currentAudio.play();
        button.innerHTML = '⏸️ Pause';
        showNotification('Playing...', 'success');
    } else {
        currentAudio.pause();
        button.innerHTML = '▶️ Play';
        showNotification('Paused', 'info');
    }
}

function playPrevious() {
    showNotification('⏪ Previous track', 'info');
}

function playNext() {
    showNotification('⏩ Next track', 'info');
}

function setVolume(value) {
    if (currentAudio) {
        currentAudio.volume = value / 100;
    }
    event.target.nextElementSibling.textContent = `Volume: ${value}%`;
}

function selectOption(button, option) {
    // Remove active class from siblings
    const siblings = button.parentElement.querySelectorAll('button');
    siblings.forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-secondary');
    });
    
    // Make this button active
    button.classList.remove('btn-secondary');
    button.classList.add('btn-primary');
    
    showNotification(`Selected Option ${option}`, 'success');
}

function radioChanged(radio) {
    showNotification(`Radio selected: ${radio.value}`, 'info');
}

function checkboxChanged(checkbox) {
    const state = checkbox.checked ? 'checked' : 'unchecked';
    showNotification(`Checkbox ${checkbox.value} ${state}`, 'info');
}

function sliderChanged(slider) {
    const valueDisplay = slider.nextElementSibling.querySelector('span');
    if (valueDisplay) {
        valueDisplay.textContent = slider.value;
    }
}

function setRating(rating, compId) {
    const container = document.getElementById(`rating-${compId}`);
    const valueDisplay = document.getElementById(`rating-value-${compId}`);
    
    if (!container) return;
    
    const stars = container.querySelectorAll('span');
    stars.forEach((star, index) => {
        star.textContent = index < rating ? '★' : '☆';
        star.style.color = index < rating ? '#F59E0B' : 'inherit';
    });
    
    if (valueDisplay) {
        valueDisplay.textContent = rating;
    }
    
    showNotification(`Rated ${rating} stars`, 'success');
}

// Container Drop Zone Functionality
function makeContainerDropZone(containerId) {
    const container = document.querySelector(`[data-id="${containerId}"]`);
    if (!container) return;
    
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.borderColor = 'var(--primary)';
        container.style.backgroundColor = 'rgba(59, 130, 246, 0.1)';
    });
    
    container.addEventListener('dragleave', (e) => {
        e.stopPropagation();
        container.style.borderColor = '';
        container.style.backgroundColor = '';
    });
    
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        container.style.borderColor = '';
        container.style.backgroundColor = '';
        
        const type = e.dataTransfer.getData('componentType');
        if (type) {
            const rect = container.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Add component as child of container
            showNotification('Component added to container', 'success');
        }
    });
}

// Enhanced component rendering to support containers
// Initialize on load - ENHANCED
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    // DOM already loaded
    setTimeout(init, 0);
}

// Ensure AI Agent initial message is loaded
if (!aiAgentState.messages || aiAgentState.messages.length === 0) {
    aiAgentState.messages = [
        { id: 'msg_0', sender: 'ai', text: 'Hi there! I\'m your AI Coding Assistant. I can help you build and modify your dashboard in real-time:\n\n✓ Add components (buttons, inputs, charts, etc.)\n✓ Create new menu items and pages\n✓ Generate custom code (HTML, CSS, JavaScript)\n✓ Modify styling and layouts\n✓ Generate sample data\n✓ Create interactive widgets\n\nJust tell me what you\'d like to do!', timestamp: new Date().toISOString() }
    ];
}

// Fallback initialization
window.addEventListener('load', function() {
    if (!document.querySelector('.menu-item')) {
        console.log('Fallback init triggered');
        init();
    }
});

// Ensure format tabs work with event delegation
window.switchFormat = function(format) {
    dataGenState.currentFormat = format;
    
    // Update active tab
    document.querySelectorAll('.format-tab').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.format-tab').forEach(tab => {
        const text = tab.textContent.toLowerCase();
        if ((format === 'table' && text.includes('table')) ||
            (format === 'csv' && text.includes('csv')) ||
            (format === 'json' && text.includes('json') && !text.includes('jsonl')) ||
            (format === 'jsonl' && text.includes('jsonl')) ||
            (format === 'sql' && text.includes('insert')) ||
            (format === 'sql-update' && text.includes('update')) ||
            (format === 'xml' && text.includes('xml')) ||
            (format === 'excel' && text.includes('excel'))) {
            tab.classList.add('active');
        }
    });
    
    const contentDiv = document.getElementById('formatContent');
    if (!contentDiv) return;
    
    if (format === 'table') {
        contentDiv.innerHTML = '';
        return;
    }
    
    // Show format viewer/editor
    const code = generateFormatCode(format);
    dataGenState.editedCode = code;
    
    contentDiv.innerHTML = `
        <div class="format-viewer-container">
            <div class="code-editor-panel">
                <div class="editor-toolbar">
                    <button class="btn btn-sm btn-secondary" onclick="validateCode()" title="Ctrl+Shift+F">✓ Validate</button>
                    <button class="btn btn-sm btn-secondary" onclick="formatCode()" title="Ctrl+L">✨ Format</button>
                    <button class="btn btn-sm btn-primary" onclick="syncToTable()" title="Ctrl+S">🔄 Sync to Table</button>
                    <button class="btn btn-sm btn-secondary" onclick="findReplace()">🔍 Find &amp; Replace</button>
                </div>
                <div class="code-editor" id="codeEditor">
                    <div class="line-numbers" id="lineNumbers"></div>
                    <div class="code-editor-content code-with-numbers" contenteditable="true" spellcheck="false" id="editableCode" oninput="updateLineNumbers(); trackCodeChanges()">${escapeHtml(code)}</div>
                </div>
            </div>
            <div class="editor-side-panel">
                <div class="panel-section-editor">
                    <h4>⚙️ Format Options</h4>
                    ${getFormatOptions(format)}
                </div>
                <div class="panel-section-editor">
                    <h4>🚀 Actions</h4>
                    <div class="panel-actions">
                        <button class="btn btn-sm btn-primary btn-full" onclick="copyCodeToClipboard()">📋 Copy to Clipboard</button>
                        <button class="btn btn-sm btn-secondary btn-full" onclick="downloadCode()">💾 Download</button>
                        <button class="btn btn-sm btn-secondary btn-full" onclick="importCode()">📥 Import/Paste</button>
                        <button class="btn btn-sm btn-ghost btn-full" onclick="switchFormat('table')">👁️ Back to Table</button>
                    </div>
                </div>
                <div class="panel-section-editor">
                    <h4>📊 Statistics</h4>
                    <div class="editor-stats">
                        <div class="stat-item">
                            <div class="stat-label">Size</div>
                            <div class="stat-value" id="codeSize">-</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Lines</div>
                            <div class="stat-value" id="codeLines">-</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Records</div>
                            <div class="stat-value">${state.generatedData.data.length}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Columns</div>
                            <div class="stat-value">${state.generatedData.headers.length}</div>
                        </div>
                    </div>
                </div>
                <div class="panel-section-editor">
                    <h4>⌨️ Shortcuts</h4>
                    <div style="font-size: 12px; color: var(--text-secondary); line-height: 1.8;">
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+A</kbd> Select All</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+C</kbd> Copy</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+V</kbd> Paste</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+Z</kbd> Undo</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+L</kbd> Format</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+S</kbd> Sync to Table</div>
                        <div><kbd style="background: var(--bg-secondary); padding: 2px 6px; border-radius: 3px; font-family: monospace;">Ctrl+H</kbd> Find &amp; Replace</div>
                    </div>
                </div>
                <div id="validationResults"></div>
            </div>
        </div>
    `;
    
    setTimeout(() => {
        updateLineNumbers();
        updateCodeStats();
    }, 0);
};