var extend = function (source, target) {
    for (var p in source) {
        if (source.hasOwnProperty(p)) {
            target[p] = source[p];
        }
    }
    return target;
};

var BackTop = function(options){
    var self = this;

    this.options = extend(options, {
        // 点击返回顶部元素
        elId : 'goTopBtn',
        // 过渡时间
        transition : 10
    });

    /***
     * 滚动到顶部
     */
    this._scrollMove = function(interval) {
        self.setScrollTop(self.getScrollTop() / 1.1);
        if (self.getScrollTop() < 1) clearInterval(interval);
    };

    if(options.elId){
        /***
         * 初始化"返回顶部"容器
         * @type {Element}
         */
        this.el = document.getElementById(this.options.elId);

        /***
         * "返回顶部"容器绑定点击事件
         */
        this.el.onclick = function() {
            self.back();
        };

        /***
         * 监听滚动事件,显示或隐藏"返回顶部"容器
         */
        window.onscroll = function() {
            self.getScrollTop() > 0 ? self.el.style.display = "": self.el.style.display = "none";
        };
    }

};

/***
 * 获取滚动距离顶部的距离
 * @returns {number} 距离值
 */
BackTop.prototype.getScrollTop = function() {
    return document.documentElement.scrollTop + document.body.scrollTop;
};

/***
 * 设置滚动距离顶部的距离
 * @param {number} value 要设置的距离值
 */
BackTop.prototype.setScrollTop = function(value) {
    if (document.documentElement.scrollTop) {
        document.documentElement.scrollTop = value;
    } else {
        document.body.scrollTop = value;
    }
};

/***
 * 返回顶部
 */
BackTop.prototype.back = function(){
    var self = this;
    var goTop = setInterval(function () {
        self._scrollMove(goTop);
    }, self.options.transition);
};

module.exports = BackTop;
