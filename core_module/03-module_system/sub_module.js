function SubSystem() {
    var cc_age = 20

    this.default_string = 'hello , this is sub_module'

    this.persionSetAge = function(age) {
        cc_age = age 
    }

    this.persionGetAge = function () {
        return cc_age
    }
}

// module.exports = SubSystem;

// module.exports.cc_age2 = 18
exports.cc_age2 = 18