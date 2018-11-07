module.exports = {
    apps: [{
        name : "worbli-www",
        script : "npm",
        args : "start",
        watch : true,
        exec_mode : "cluster",
        instances  : 4,
    }]
}
