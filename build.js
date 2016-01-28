System.register('module2.js', [], function (_export) {
    'use strict';

    var module2;
    return {
        setters: [],
        execute: function () {
            module2 = {

                report: function report(msg) {
                    //alert(msg);
                    var li = document.createElement("li");
                    li.innerText = msg;

                    var el = document.querySelector('.content');
                    el.appendChild(li);
                }
            };

            module2.report('module2 loaded');

            _export('default', module2);
        }
    };
});
System.register('module1.js', ['module2.js'], function (_export) {
    'use strict';

    var module2, module1;
    return {
        setters: [function (_module2Js) {
            module2 = _module2Js['default'];
        }],
        execute: function () {
            module1 = {

                msg: function msg(text) {
                    module2.report(text);
                }

            };

            module1.msg('module1 loaded');

            _export('default', module1);
        }
    };
});
System.register('main.js', ['module1.js'], function (_export) {
  'use strict';

  var module1, nz;
  return {
    setters: [function (_module1Js) {
      module1 = _module1Js['default'];
    }],
    execute: function () {
      nz = {};

      nz.ffx = {};

      nz.ffx.module1 = module1;

      nz.ffx.module1.msg('main calling module1.msg');
    }
  };
});
//# sourceMappingURL=build.js.map