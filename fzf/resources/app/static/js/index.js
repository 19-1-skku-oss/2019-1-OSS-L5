let index = {
    about: function(html) {
        let c = document.createElement("div");
        c.innerHTML = html;
        asticode.modaler.setContent(c);
        asticode.modaler.show();
    },    
    init: function() {
        // Init
        asticode.loader.init();
        asticode.modaler.init();
        asticode.notifier.init();

        // Wait for astilectron to be ready
        document.addEventListener('astilectron-ready', function() {
            // Listen
            index.listen();
        })
    },
    clickNum: function(id) {
        let textarea = document.getElementById("view");
        textarea.value = textarea.value+id;

        let number = document.getElementById("num");
        number.value = number.value+id; 
    },
    clickSymbol: function(id) {
        let textarea = document.getElementById("view");
        textarea.value = textarea.value+" "+id+" ";
        index.sendNumber();
        index.sendSymbol(id);
    },
    sendNumber: function() {
        let message = {"name": "sendNum"};
        
        let number = document.getElementById("num");
        message.payload = number.value;
        
        astilectron.sendMessage(message, function(message) {
            // Check error
            if (message.name === "error") {
                asticode.notifier.error(message.payload);
                return
            }            
        })
        number.value = ""
    },
    sendSymbol: function(id) {
        let message = {"name": "sendSymbol"};
        message.payload = id;
        astilectron.sendMessage(message, function(message) {

            // Check error
            if (message.name === "error") {
                asticode.notifier.error(message.payload);
                return
            }
            
        })
    },    
    reqResult: function() {
        index.sendNumber();

        let message = {"name": "result"};

        astilectron.sendMessage(message, function(message) {
            // Check error
            if (message.name === "error") {
                asticode.notifier.error(message.payload);
                return
            }            
        })
    },
    clear: function() {
        let textarea = document.getElementById("view");
        textarea.value = "";

        let number = document.getElementById("num");
        number.value = ""; 

        let message = {"name": "clear"};
        
        astilectron.sendMessage(message, function(message) {
            // Check error
            if (message.name === "error") {
                asticode.notifier.error(message.payload);
                return
            }            
        })
    },
    listen: function() {
        astilectron.onMessage(function(message) {
            switch (message.name) {
                case "about":
                    index.about(message.payload);
                    return {payload: "payload"};
                    break;
                case "resResult":
                    index.clear();
                    let textarea = document.getElementById("view");
                    textarea.value = message.payload;
                    let number = document.getElementById("num");
                    number.value = message.payload;
                    break;
            }
        });
    }
};