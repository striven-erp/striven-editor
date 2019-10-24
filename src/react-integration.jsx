import './striveneditor.css';

import StrivenEditor from "./striveneditor";
import React, {useLayoutEffect, useRef, useMemo, forwardRef} from "react";

/**
 * Creates an editor component that mounts with the given option.
 * If you pass a ref to the component, it binds to the wrapped StrivenEditor instance
 *
 * @param {Object} options - accepted by StrivenEditor
 * @returns {React.ComponentType<{readonly defaultContent?: *}>}
 */
export function createEditor(options) {
    return forwardRef(({defaultContent}, ref) => {

        let container = useRef(null);
        // on mount create a striven editor from given options and set the ref
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

/**
 *
 * @param {Object} options - options passed to StrivenEditor
 * @param {Array} input - see input of useMemo
 * @returns {React.ComponentType<{readonly, defaultContent?: *}>}
 */
export function useEditor(options, input) {
    return useMemo(
        () => createEditor(options),
        input
    )
}