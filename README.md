### Objective
* To demonstrate the 3 methods on importing external JavaScript to your Splunk dashboard in version 6+
* This demo app will be importing the [Bootstrap Switch](http://bootstrapswitch.com/) code

### Usage
* You *must rename* the app folder from `splunk_import` to `hobbes3_import` for all the JavaScript to work (don't forget to restart Splunk)

### Note
* For this case, I didn't need to directly require jQuery in RequireJS since Bootstrap Switch loads jQuery and "exports" the same global variable `$`

### Thanks to
* Itay Neeman
* David Foster
* Mathew Elting
* Vladimir Skoryk
