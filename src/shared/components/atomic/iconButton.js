
import * as React from 'react';
import { useHover } from '../../customHook/shadow';
export default function IconButton({ icon }) {
    const [hoverRef, isHovered] = useHover();
    return (
        <i ref={hoverRef} class={isHovered ? `ph-fill ${icon}` : icon} style={{ fontSize: 12, color: isHovered ? '#7a7df3' : `#6c737f`, cursor: 'auto' }}></i>
    );
}