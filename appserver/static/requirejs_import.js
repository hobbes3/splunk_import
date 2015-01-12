require.config({
    paths: {
        "bootstrap-switch": "../app/hobbes3_import/bootstrap-switch",
    },
    shim: {
        "bootstrap-switch": {
            deps: ["jquery"],
            exports: "$"
        }
    }
});

require([
    'bootstrap-switch',
    'splunkjs/mvc/simplexml/ready!'
],
function(
    $
) {
    $("[name='my-checkbox']").bootstrapSwitch();
});
