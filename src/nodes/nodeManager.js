import { EText } from "../shared/components/text";
import { useHover } from "../shared/customHook/shadow";
import IconButton from "../shared/components/atomic/iconButton";
import CommonForm from "../shared/components/atomic/commonForm";
import { useMemo, useRef, useState } from "react";
import { useContainerDimensions } from "../shared/customHook/dimensions";
import { Position } from "reactflow";
/**
 * 
 * Nodes = [
 * {
 * component : 'Input'
 * title:'Input'
 * icon :''
 * toolbar:<Toolbar>
 * form : Dynamic Forms
 * }
 * ] 
 */
export const NodeManager = ({ formArray, details, node }) => {
    const [hoverRef, isHovered] = useHover();
    const componentRef = useRef()
    const { width, height } = useContainerDimensions(componentRef)
    const [variables, setVariables] = useState(null);
    const handleChange = ((e) => {
        if (e.target.name === 'variable') {
            setVariables(e.target.value)
        }
    })
    /**
      * handling input variables starts
      */
    const convertT2V = (str) => {
        const regEx = /({{.+?}})/g
        let splitArray = str?.split(regEx)?.filter((value) => regEx.test(value))
        return splitArray
    }
    const variablesArray = useMemo(() => {
        return convertT2V(variables);
    }, [variables]);
    const alteredFormArray = useMemo(() => {
        let formData = formArray

        variablesArray && variablesArray?.forEach((value, index) => {
            const handleObject = {
                source: 'source', position: Position.Left, id: `${value}-prompt`, type: 'inputHandle', count: 1, style: { top: (index + 1) * 20 }
            }
            formData.push(handleObject)
        }
        )
        return formArray
    }, [variables]);
    /**
      * handling input variables ends
      */
    return (
        <div ref={componentRef} style={{ flex: 1 }}>
            <div ref={hoverRef} style={{
                flex: 1, backgroundColor: '#ffffff', padding: 2,
                border: isHovered ? `1px solid ${details.color}` : `1px solid #6c737f`,
                display: 'flex',
                padding: 5,
                gap: 10,
                flexDirection: "column",
                borderRadius: 4,
                boxShadow: isHovered ? `0px 1px 0px 0px ${details.color}` : '',
                borderColor: isHovered ? `${details.color}` : `#6c737f`,
                backgroundColor: isHovered ? '#FFFFFI' : '#ffffff',
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', gap: 20, marginLeft: 5, marginRight: 5, alignItems: 'center' }}>
                    <div style={{ flex: 4 }}>
                        <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                            <IconButton icon={details.icon} />
                            <EText title={details?.title} color="#6c737f" size={12} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', flex: 1, gap: 5, justifyContent: 'flex-end' }}>
                        <IconButton icon={'ph ph-info'} />
                        <IconButton icon={'ph ph-x-circle'} />
                        <IconButton icon={'ph ph-gear-six'} />
                    </div>
                </div>
                {/*
 We can achive more with dynamic behaviour with json forms  like validation,etc
  */}
                {alteredFormArray?.map((value, i) =>
                    <CommonForm form={value} onChange={handleChange} node={node} extra={{ width, height }} />
                )}
            </div>
        </div >
    );

}
