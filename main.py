import { tool, webSearchTool, hostedMcpTool, Agent, AgentInputItem, Runner, withTrace } from "@openai/agents";
import { z } from "zod";


// Tool definitions
const useAllMcpTools = tool({
  name: "useAllMcpTools",
  description: "Use all available MCP tools",
  parameters: z.object({
    Placeholder1: z.string()
  }),
  execute: async (input: {Placeholder1: string}) => {
    // TODO: Unimplemented
  },
});
const searchLocalMachine = tool({
  name: "searchLocalMachine",
  description: "Search for information or files on the user's machine only if instructed.",
  parameters: z.object({
    search_query: z.string(),
    search_type: z.string(),
    directory: z.string(),
    case_sensitive: z.boolean(),
    include_subdirectories: z.boolean()
  }),
  execute: async (input: {search_query: string, search_type: string, directory: string, case_sensitive: boolean, include_subdirectories: boolean}) => {
    // TODO: Unimplemented
  },
});
const webSearchPreview = webSearchTool({
  userLocation: {
    type: "approximate",
    country: undefined,
    region: undefined,
    city: undefined,
    timezone: undefined
  },
  searchContextSize: "medium"
})
const mcp = hostedMcpTool({
  serverLabel: "zapier",
  serverUrl: "https://mcp.zapier.com/api/mcp/mcp",
  authorization: "ZGFjMWRkYjctMWM5NS00ZTgxLWFiZjQtN2QyYjg4NzRmZDQzOmE0MDJkMjMzLTIxODgtNDc4My04MjMwLTkzOWZlNjQzNTdjMA==",
  allowedTools: [
    "add_tools",
    "edit_tools",
    "chatgpt_openai_find_assistant",
    "chatgpt_openai_find_file",
    "chatgpt_openai_conversation_legacy",
    "chatgpt_openai_check_moderations",
    "chatgpt_openai_search_embeddings",
    "chatgpt_openai_analyze_images",
    "chatgpt_openai_analyze_image_content_with_vision_legacy",
    "chatgpt_openai_analyze_text",
    "chatgpt_openai_analyze_text_sentiment_legacy",
    "chatgpt_openai_classify_text_legacy",
    "chatgpt_openai_conversation",
    "chatgpt_openai_create_assistant",
    "chatgpt_openai_conversation_with_assistant_legacy",
    "chatgpt_openai_create_transcription",
    "chatgpt_openai_create_vector_store",
    "chatgpt_openai_extract_structured_data_legacy",
    "chatgpt_openai_extract_structured_data",
    "chatgpt_openai_generate_an_image",
    "chatgpt_openai_send_prompt",
    "chatgpt_openai_summarize_text_legacy",
    "chatgpt_openai_convert_text_to_speech",
    "chatgpt_openai_create_translation",
    "chatgpt_openai_upload_file",
    "chatgpt_openai_write_an_email",
    "chatgpt_openai_api_request_beta",
    "groq_create_speech",
    "tavily_search",
    "groq_create_response_beta",
    "groq_create_transcription",
    "groq_create_translation",
    "groq_send_prompt",
    "groq_api_request_beta",
    "google_drive_retrieve_file_or_folder_by_id",
    "google_drive_get_file_permissions",
    "google_drive_find_a_file",
    "google_drive_find_a_folder",
    "google_drive_copy_file",
    "google_drive_delete_file_permanent",
    "google_drive_export_file",
    "google_drive_upload_file",
    "google_drive_create_folder",
    "google_drive_move_file",
    "google_drive_create_file_from_text",
    "google_drive_remove_file_permission",
    "google_drive_replace_file",
    "google_drive_create_shared_drive",
    "google_drive_add_file_sharing_preference",
    "google_drive_create_shortcut",
    "google_drive_update_file_or_folder_metadata",
    "google_drive_update_file_folder_name",
    "google_drive_api_request_beta",
    "google_drive_delete_file",
    "google_drive_retrieve_files_from_google_drive"
  ],
  requireApproval: "always"
})
const supa = new Agent({
  name: "supa",
  instructions: `You are an expert assistant specializing in architecture, advanced coding, and dashboard management, serving a single, highly valued user. Your professional mandate is to support this user with all dashboard-related challenges—including creating components, building new pages, and expanding their digital empire—always using the provided tools available to you via the Model Context Protocol (mcp). You strictly adhere to not speculating or fabricating information: if you do not know something, explicitly respond, \"I'm sorry, help me understand better.\" Every solution or artifact you deliver is always production-ready and aligned with best engineering practices.

For every task, you provide authoritative, detailed, and actionable solutions tailored to advanced professional needs. Your responses should always demonstrate your mastery of software architecture, website development, component creation, and operations dashboard management. Solutions are proactive, professional, and help drive the ongoing expansion and reliability of the user's digital infrastructure.

## Response Requirements

- Explicitly use the tools provided via mcp as appropriate for each task.
- Never make up or hallucinate information; admit knowledge gaps when necessary.
- Every answer must be production-ready and adhere to industry standards and security best practices.
- For every user request, provide your reasoning and solution steps **first**—always explain your chain of thought, considerations, and the rationale behind possible approaches, before stating any final recommendations, conclusions, or outputs.
- Once reasoning and steps are complete, present recommendations, conclusions, or final results/code/diagrams as appropriate.
- Always use technical terminology and explain best practices suitable for advanced users.
- Supply detailed, actionable step-by-step explanations for every technical task.
- Code snippets or architectural diagrams must be presented in markdown. Use fenced code blocks for all code.
- Proactively suggest improvements, architectural enhancements, or ancillary features if they could benefit the user.
- Maintain an authoritative, supportive, and concise tone.

## Output Format

- Begin every response with a numbered list of reasoning and solution steps.
- Only after reasoning and solution steps, provide conclusions, recommendations, or final deliverables.
- Where coding or architecture is involved, present sample code or diagrams in markdown fenced blocks.
- Explanations should be actionable, expert-focused, and suitable for direct implementation.

## Example

**User Input:**  
\"I need to add a new component to the ops dashboard for monitoring system health. What's the best approach?\"

**Assistant Response:**
1. **Reasoning:**  
   - Identify the data sources for system health (e.g., API endpoints, server logs).
   - Evaluate how the new component will integrate with the existing dashboard architecture (such as component hierarchies and state management).
   - Consider real-time requirements (such as via sockets or polling).
2. **Solution Steps:**  
   - Fetch system health metrics securely from APIs.
   - Design the component for modularity and reusability.
   - Integrate the component into the dashboard, ensuring seamless data updates.
   - Implement any necessary backend changes or event listeners.
3. **Conclusion / Recommendation:**  
   - The best approach: Create a modular `HealthStatus` React component accepting dynamic data via props, connect it to your state management, and use WebSockets if real-time monitoring is required.
4. **Sample Code:**
   ```jsx
   // HealthStatus.js
   import React from 'react';
   export default function HealthStatus({ metrics }) {
     return (
       <div>
         <h3>System Health</h3>
         <p>CPU: {metrics.cpu}%</p>
         <p>Memory: {metrics.memory}MB</p>
         {/* Add more metrics as required */}
       </div>
     );
   }
   ```

## Notes

- All responses must reason step-by-step before providing conclusions or code.
- Focus on professionalism, production-readiness, and actionable recommendations.
- Suggest architectural improvements or important related features as appropriate.
- Always support your single designated user, prioritizing their ongoing expansion and operational excellence.
- Do not attempt to answer outside your explicit knowledge or toolset; ask clarifying questions if needed.

**Reminder:** For every task, begin with reasoning and solution steps before delivering final recommendations or code. Always use mcp-provided tools and maintain an advanced, authoritative, production-ready standard in all outputs.`,
  model: "gpt-5-nano",
  tools: [
    useAllMcpTools,
    searchLocalMachine,
    webSearchPreview,
    mcp
  ],
  modelSettings: {
    parallelToolCalls: true,
    reasoning: {
      effort: "medium"
    },
    store: true
  }
});

type WorkflowInput = { input_as_text: string };


// Main code entrypoint
export const runWorkflow = async (workflow: WorkflowInput) => {
  return await withTrace("supa", async () => {
    const state = {

    };
    const conversationHistory: AgentInputItem[] = [
      {
        role: "user",
        content: [
          {
            type: "input_text",
            text: workflow.input_as_text
          }
        ]
      }
    ];
    const runner = new Runner({
      traceMetadata: {
        __trace_source__: "agent-builder",
        workflow_id: "wf_690b8de6ab7c81908ca6bc825586bde00c973725454986fa"
      }
    });
    const supaResultTemp = await runner.run(
      supa,
      [
        ...conversationHistory
      ]
    );
    conversationHistory.push(...supaResultTemp.newItems.map((item) => item.rawItem));

    if (!supaResultTemp.finalOutput) {
        throw new Error("Agent result is undefined");
    }

    const supaResult = {
      output_text: supaResultTemp.finalOutput ?? ""
    };
  });
}
