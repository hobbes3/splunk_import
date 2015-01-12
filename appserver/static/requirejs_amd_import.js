require.config({
    paths: {
        "app": "../app"
    }
});

require([
    'app/hobbes3_import/bootstrap-switch-amd',
    'splunkjs/mvc/simplexml/ready!'
],
function(
    $
) {
    $("[name='my-checkbox']").bootstrapSwitch();
});
