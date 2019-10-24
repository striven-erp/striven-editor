import StrivenEditor from "./striveneditor";
import React, {useLayoutEffect, useRef, useMemo, forwardRef} from "react";

export function createEditor(options) {
    return forwardRef(({defaultContent}, ref) => {
        let container = useRef(null);
        /** @type {{current: StrivenEditor|null}}  **/
        let editor = useRef(null);

        useLayoutEffect(
            () => {
                ref.current = new StrivenEditor(container.current, options);
                if (defaultContent !== undefined) {
                    ref.current.setContent(defaultContent);
                }
            },
            []
        );

        return <div ref={container} />
    });
}

export function useEditor(options, input) {
    return useMemo(
        () => createEditor(options),
        input
    )
}