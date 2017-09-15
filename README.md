### Objective
* To demonstrate the 3 methods on importing external JavaScript to your Splunk dashboard in version 6+
* This demo app will be importing the [Bootstrap Switch](http://bootstrapswitch.com/) code

### Usage
* Make sure the app name stays as `splunk_import`, otherwise some of the JavaScript files will point to the wrong directory. Don't forget to restart Splunk after changing an app name.

### Note
* For this case, I didn't need to directly require jQuery in RequireJS since Bootstrap Switch loads jQuery and "exports" the same global variable `$`

### Thanks to
* Itay Neeman
* David Foster
* Mathew Elting
* Vladimir Skoryk
