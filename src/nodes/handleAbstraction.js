// inputNode.js
import { NodeManager } from './nodeManager';
import { NodeTypesForm } from '../shared/components/nodeTypesForm';
import { NodeTypesDetails } from '../shared/components/nodeTypeDetails';

export const HandleAbstraction = ({ id, data }) => {
    const form = NodeTypesForm() // json forms
    const details = NodeTypesDetails() // getting all the nodes
    return (
        <NodeManager details={details[data.nodeType]} formArray={form[data.nodeType]} node={id}>
        </NodeManager>

    );
}
