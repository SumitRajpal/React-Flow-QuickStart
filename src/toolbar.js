// toolbar.js

import { Box, Tab, Tabs } from '@mui/material';
import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
    /**
     * @define model for toolbar
     * 
     * export interface IToolbar {
        type: string
        label: string
        icon: string
        tooltip:string
    }
     */

    const toolbar = [
        {
            type: 'customInput',
            label: 'Input',
            icon: 'ph ph-sign-in',
            tooltip: 'Drag & Drop creating INPUT'
        },
        {
            type: 'llm',
            label: 'LLM',
            icon: 'ph ph-open-ai-logo',
            tooltip: 'Drag & Drop creating LLM'
        },
        {
            type: 'customOutput',
            label: 'Output',
            icon: 'ph ph-sign-out',
            tooltip: 'Drag & Drop creating OUTPUT'
        },
        {
            type: 'text',
            label: 'Text',
            icon: 'ph ph-file-text',
            tooltip: 'Drag & Drop creating TEXT'
        },
        {
            type: 'mail',
            label: 'Mail',
            icon: 'ph ph-envelope-simple',
            tooltip: 'Drag & Drop creating MAIL'
        },
        {
            type: 'dynamic',
            label: 'Variable',
            icon: 'ph ph-brackets-curly',
            tooltip: 'Drag & Drop creating variable'
        },
    ]
    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {toolbar?.map((value, i) => <DraggableNode id={i} type={value?.type} label={value?.label} icon={value?.icon} tooltip={value.tooltip} />)}
            </div>
        </div>
    );
};
