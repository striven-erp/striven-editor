import StrivenEditor from './striveneditor';

export default class KoStrivenEditor {
    constructor(ko) {
        ko.bindingHandlers.striveneditor = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                // Get options
                let options = valueAccessor();
                // Options must be passed as an observable
                if (!ko.isObservable(options)) {
                    throw "Options must be an observable.";
                }

                // Get the value binding in case we are binding the editor's contents to an observable
                let value = allBindings().value;
                if (value && !ko.isObservable(value)) {
                    throw "Value must be an observable.";
                }

                // Pass the value to the editor in options
                options().value = value();

                let editor = new StrivenEditor(element, { 
                    ...options(), 
                    customToolbarButton: (options().customToolbarButton && options.customToolbarButton()) 
                });
                let pauseUpdate = false;

                // Handle updates and changes to value observable
                if (ko.isObservable(value)) {
                    // Listen to input event
                    editor.body.oninput = e => {
                        pauseUpdate = true;
                        value(editor.getContent());
                        pauseUpdate = false;
                    };

                    // Subscribe to the value observable to detect when it is changed and update the editor
                    value.subscribe((newValue) => {
                        // Update the content if it's not being updated from within the editor
                        if (!pauseUpdate) {
                            editor.setContent(newValue);
                        }
                    });
                }

                // Set the editor in options
                options().api = editor;

            }
        };
    }
}