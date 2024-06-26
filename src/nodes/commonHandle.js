import { Handle, Position } from "reactflow";

export const CommonHandle = ({ type = 'target' | 'source', position = Position.Left, id = 'default', style = {} }) => {
    return (
        <Handle
            type={type}
            position={position}
            id={id}
            style={style}
        />
    );
}