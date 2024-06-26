import * as React from 'react';
import TextField from '@mui/material/TextField';
import { CommonHandle } from '../../../nodes/commonHandle';

export default function CommonForm({ onChange, form = {}, node, extra = { height: 0, width: 0, sourceCount: 0 } }) {

    const onValueChange = ((e) => {
        let textValue = e.target.value
        textValue.length > 25 ? setwidth((textValue.length * 9)) : setwidth(250)
    })
    const [width, setwidth] = React.useState(250)

    const formType = (form) => {
        switch (form?.type) {
            case 'text':
                return <TextField name={form?.label} id={form?.id} label={form?.label} placeholder={form.placeholder} variant="outlined" size="small"
                    style={{ width: width }}
                    onChange={onValueChange} />
            case 'variables':
                return <TextField name={form?.label} id={form?.id} label={form?.label} placeholder={form.placeholder} variant="outlined" size="small"
                    style={{ width: width }}
                    onChange={onChange} />
            case 'inputHandle':
                return <CommonHandle
                    type={form.source}
                    position={form.position}
                    style={form?.style}
                    id={`${node}${form.id}`}
                />
            case 'outputHandle':
                return <CommonHandle
                    type={form.source}
                    position={form.position}
                    style={form?.style}
                    id={`${node}${form.id}`}
                />
            case 'select':
                return <select
                    value={form?.value}
                    label={form?.label}

                >
                    {form?.options.map((response, index) => <option id={index} value={response.key}>{response.value}</option>)}
                </select>

            default:
                return <></>
        }
    }
    return formType(form)



}