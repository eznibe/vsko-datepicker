
//require( './css/bootstrap-datepicker.css' );
require( './css/bootstrap-datepicker3.css' );

require( './bootstrap-datepicker.js' );

var module =
  angular.module( 'vsko-datepicker', [] );

module.directive( 'datePicker', require( './angular-vsko-datepicker.js' ) );


module.exports = module;