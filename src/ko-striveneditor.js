import StrivenEditor from './striveneditor';

export default class KoStrivenEditor {
    constructor(ko) {
        ko.bindingHandlers.striveneditor = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                var valueOption = valueAccessor();
                var value = ko.utils.unwrapObservable(valueOption);

                var editor = new StrivenEditor(value);
            }
        }
    }
}