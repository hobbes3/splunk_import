require.config({
    paths: {
        "app": "../app"
    }
});

require([
    'app/test_import/bootstrap-switch-amd',
    'splunkjs/mvc/simplexml/ready!'
],
function(
    $
) {
    $("[name='my-checkbox']").bootstrapSwitch();
});
