// draggableNode.js

import { Tooltip } from "@mui/material";
import { useHover } from "./shared/customHook/shadow";
import { EText } from "./shared/components/text";
;
export const DraggableNode = ({ type, label, icon, tooltip }) => {

  const [hoverRef, isHovered] = useHover();

  const onDragStart = (event, nodeType) => {
    const appData = { nodeType }
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      ref={hoverRef}
      className={type}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{
        cursor: 'grab',
        width: 64,
        height: 64,
      }}
      draggable
    >
      <Tooltip title={tooltip}>
        <div style={{
          border: isHovered ? '1px solid #7a7df3' : `1px solid #6c737f`,
          display: 'flex',
          gap: 10,
          padding: 5,
          alignItems: 'center',
          borderRadius: 8,
          boxShadow: isHovered ? '0px 1px 1px 1px #7a7df3' : '',
          borderColor: isHovered ? '#7a7df3' : `#6c737f`,
          backgroundColor: isHovered ? '#FFFFFI' : '#ffffff',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <i class={isHovered ? `ph-fill ${icon}` : icon} style={{ fontSize: 24, color: isHovered ? '#7a7df3' : `#6c737f` }}></i>
          <EText title={label} color={isHovered ? '#7a7df3' : `#6c737f`} size={12} />
        </div>
      </Tooltip>
    </div>
  );
};
