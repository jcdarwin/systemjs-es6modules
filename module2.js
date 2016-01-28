var module2  = {

    report: function(msg) {
        //alert(msg);
        var li = document.createElement("li");
        li.innerText = msg;

        var el = document.querySelector('.content');
        el.appendChild(li);
    }
}

module2.report('module2 loaded')

export default module2
