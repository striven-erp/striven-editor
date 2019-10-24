import StrivenEditor from "./striveneditor";
import React, {useLayoutEffect, useRef, forwardRef} from "react";

export function createEditor(options) {
    return forwardRef((props, ref) => {
        let container = useRef(null);
        /** @type {{current: StrivenEditor|null}}  **/
        let editor = useRef(null);

        useLayoutEffect(
            () => {
                editor.current = new StrivenEditor(container.current, options);
                if (ref) {
                    ref.current = editor.current;
                }
            },
            []
        );

        return <div ref={container} />
    });
}
