import StrivenEditor from './striveneditor';

export default class KoStrivenEditor {
  constructor(ko, bindingName = 'striveneditor') {
    ko.bindingHandlers[bindingName] = {
      init: function(
        element,
        valueAccessor,
        allBindings,
        viewModel,
        bindingContext,
      ) {
        // Get options
        let options = valueAccessor();
        // Options must be passed as an observable
        if (!ko.isObservable(options)) {
          throw 'Options must be an observable.';
        }

        // Get the value binding in case we are binding the editor's contents to an observable
        let value = allBindings().value;
        if (value && !ko.isObservable(value)) {
          throw 'Value must be an observable.';
        }

        // Pass the value to the editor in options
        options().value = value();

        let onChange = null;
        let changeOpt = options().change;
        if (changeOpt) {
          if (ko.isObservable(changeOpt)) {
            onChange = val => changeOpt(val);
          } else {
            onChange = changeOpt;
          }
        }

        let editor = new StrivenEditor(element, {
          ...options(),
          change: onChange,
          toolbarTemplate:
            options().toolbarTemplate && options().toolbarTemplate(),
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
          value.subscribe(newValue => {
            // Update the content if it's not being updated from within the editor
            if (!pauseUpdate) {
              editor.setContent(newValue);
            }
          });
        }

        // Set the editor in options
        options().api = editor;

        return {controlsDescendantBindings: true};
      },
   };
  }
}
