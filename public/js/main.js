requirejs.config({
    baseUrl: "/js",
    paths: {
        //"test": "test",
        "page/post-list-page": "page/post-list-page",
        "page/post-new-page": "page/post-new-page",
        //"module1": "module1"
    }
});

requirejs([MODULE_INITIALIZER], function () {

});