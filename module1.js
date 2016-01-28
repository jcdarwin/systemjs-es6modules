import module2 from 'module2'

var module1  = {

    msg: function(text) {
        module2.report(text);
    }

};

module1.msg('module1 loaded');

export default module1;
