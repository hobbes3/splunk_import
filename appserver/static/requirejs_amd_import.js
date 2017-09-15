require.config({
    paths: {
        "app": "../app"
    }
});

require([
    'app/splunk_import/bootstrap-switch-amd',
    'splunkjs/mvc/simplexml/ready!'
],
function(
    $
) {
    $("[name='my-checkbox']").bootstrapSwitch();
});
