import StrivenEditor from "./striveneditor";
import React, {useLayoutEffect, useRef, useCallback, useMemo, forwardRef} from "react";

export function createEditor(options) {
    return forwardRef(({defaultContent}, ref) => {
        let container = useRef(null);
        /** @type {{current: StrivenEditor|null}}  **/
        let editor = useRef(null);

        useLayoutEffect(
            () => {
                editor.current = new StrivenEditor(container.current, options);
                if (ref) {
                    ref.current = editor.current;
                }
                if (defaultContent !== undefined) {
                    editor.current.setContent(defaultContent);
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
