import { useEffect, useState } from "react";

/**
 * most of the time try to create a model and use properties accordingly
 * ex: a text can have click feature or not 
 * so on vectorshift we have different kinds of text text with onclick option 
 * 
 * so if we have to create funtional component of Text we can use props with model
 * with conditional approach  we can achieve the desired output
 *  
 type TextType = {
    [key in ETextType]?: ITextTypes {size,color,weight,etc}
 }
 * 
 */

export const EText = ({ title = '', color = 'white', size = 14 }) => {
    const [hover, setHover] = useState(0);
    return (
        <div id={title} style={{ flex: 1, color: color, fontSize: size, alignSelf: 'center' }} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)}>
            {title}
        </div>
    );
}
