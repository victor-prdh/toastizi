(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
      define(factory)
    } else if (typeof exports === 'object') {
      module.exports = factory()
    } else {
      root.toastizi = factory()
    }
  }(this, function () {
    /* ----------------------------------------------------------- */
    /* == modal */
    /* ----------------------------------------------------------- */
  
    function Toast (options) {
      var defaults = {
        content: 'You dont set content for this toast',
        closeButton: true,
        autoClose: true,
        autoCloseTime: 8000,
        backgroundColor: "#fff",
        color: "#000",
      }
  
      this.toast = 'test';
      // extends config
      this.options = extend({}, defaults, options)
  
      // init modal
      this.init()
    }


    Toast.prototype.init = function () {
        var id = random(7);
        if (this.options.closeButton) {
            this.toast = document.createElement("div");
            this.toast.classList.add('toastizi');
            this.toast.id = id
            var text = document.createElement("div");
            text.classList.add("toastizi-content");
            text.innerText = this.options.content;
            this.toast.appendChild(text)
            var closeDiv = document.createElement("div");
            closeDiv.addEventListener("click", function (e) {
                document.querySelector("#"+id).classList.remove("toastizi-show")
            });
            
            closeDiv.classList.add("toastizi-close-btn");
            var closeButton = document.createElement("div");
            closeButton.classList.add("toastizi-close-content");
            closeButton.innerText = '×';
            closeDiv.appendChild(closeButton);
            this.toast.appendChild(closeDiv);
            
            
        } else {
            this.toast = document.createElement("div");
            this.toast.classList.add('toastizi');
            this.toast.innerText = this.options.content;
        }

        this.toast.style.backgroundColor = this.options.backgroundColor;
        this.toast.style.color = this.options.color;
        document.body.appendChild(this.toast)
        return this
    }

    Toast.prototype.open = function () {
        this.toast.classList.add("toastizi-show");
        if (this.options.autoClose) {
            setTimeout(() => {
                this.close()
            }, this.options.autoCloseTime);
        }
    }

    Toast.prototype.close = function () {

             
            this.toast.classList.remove("toastizi-show")
        
    }


    /* ----------------------------------------------------------- */
    /* == helpers */
    /* ----------------------------------------------------------- */

    function extend () {
        for (var i = 1; i < arguments.length; i++) {
        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key)) {
            arguments[0][key] = arguments[i][key]
            }
        }
        }
        return arguments[0]
    }
  
    /* ----------------------------------------------------------- */
    /* == return */
    /* ----------------------------------------------------------- */
  
    return {
      toast: Toast
    }
  }))

  const random = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};