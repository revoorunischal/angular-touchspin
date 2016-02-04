import { TouchSpinController } from './touchspin.controller';

export class TouchSpinDirective implements angular.IDirective {
	public restrict = 'EA';
    public require = '^ngModel';
    public scope = {};
    public bindToController = {
        options: '=?touchSpinOptions'
    };
    public controller = TouchSpinController;
    public controllerAs = 'vm';
    public template = require<string>('./touchspin.directive.html');
}