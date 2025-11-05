// State Management module: exports state and initializeDefaultViews

export let state = {
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

export function initializeDefaultViews() {
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
        ai_coding_agent: []
    };
}