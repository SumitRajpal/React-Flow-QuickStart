import { Position } from "reactflow";

export function NodeTypesForm() {
    return {
        customInput: [
            {
                label: 'custominput', value: '', placeholder: 'email', type: 'text'
            },
            {
                label: 'address', value: '60/85 236', placeholder: 'name', type: 'text'
            },
            {
                label: 'email', value: '', placeholder: 'email', type: 'text'
            },
            {
                source: 'source', position: Position.Left, id: '-value', type: 'inputHandle', count: 1
            },
            {
                label: 'Select Input', value: 10, options: [{
                    key: 'gdrive', value: 'GDrive'
                },
                {
                    key: 'vs', value: 'VS'
                },
                {
                    key: 'apple', value: 'Apple'
                }], placeholder: 'email', type: 'select'
            }
        ],
        llm: [
            {
                label: 'llm', value: '', placeholder: 'email', type: 'text'
            },
            {
                label: 'Select LLM', value: 10, options: [{
                    key: 'gdrive', value: 'LITE LLM'
                },
                {
                    key: 'vs', value: 'MLX'
                },
                {
                    key: 'apple', value: 'Whisper'
                }], placeholder: 'email', type: 'select'
            },
            {
                source: 'source', position: Position.Left, id: '-system', type: 'inputHandle', count: 1, style: {}
            },
            {
                source: 'target', position: Position.Right, id: '-prompt', type: 'outputHandle', count: 2, style: { top: `${100 / 3}%` }
            },
            {
                source: 'target', position: Position.Right, id: '-response', type: 'outputHandle', count: 3, style: { top: `${200 / 3}%` }
            }
        ],
        customOutput: [
            {
                label: 'custompoutput', value: '60/85 236', placeholder: 'name', type: 'text'
            },
            {
                source: 'target', position: Position.Right, id: '-value', type: 'outputHandle', style: { top: `${200 / 3}%` }
            },
        ],
        text: [
            {
                label: 'email', value: '', placeholder: 'email', type: 'text'
            }
        ],
        dynamic: [
            {
                label: 'variable', value: '', placeholder: 'variable', type: 'variables'
            }
        ],
        mail: [
            {
                label: 'email', value: '', placeholder: 'email', type: 'text'
            },
            {
                label: 'cc', value: '', placeholder: 'cc', type: 'text'
            },
            {
                label: 'body', value: '', placeholder: 'body', type: 'text'
            },
            {
                source: 'source', position: Position.Left, id: '-prompt', type: 'inputHandle', count: 1, style: { top: 50 }
            },
            {
                source: 'source', position: Position.Left, id: '-response', type: 'inputHandle', count: 2, style: { top: 70 }
            },
            {
                source: 'source', position: Position.Left, id: '-value', type: 'inputHandle', count: 3, style: { top: 90 }
            },
            {
                source: 'target', position: Position.Right, id: '-value', type: 'outputHandle', style: {}
            },
        ]
    };
}
