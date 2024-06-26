import { HandleAbstraction } from "../../nodes/handleAbstraction";

export const NodeTypes = () => {
    return {
        customInput: HandleAbstraction,
        llm: HandleAbstraction,
        customOutput: HandleAbstraction,
        text: HandleAbstraction,
        mail: HandleAbstraction,
        dynamic: HandleAbstraction
    };
}
