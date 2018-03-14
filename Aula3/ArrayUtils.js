var arrayutils = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },

    max: function (array) {
        var m = Number.NEGATIVE_INFINITY;
        for (i = 0; i < array.length; i++) {
            if (array[i] > m) {
                m = array[i];
            }
        }
        return m;
    },

    min: function (array) {
        var m = Number.POSITIVE_INFINITY;
        for (i = 0; i < array.length; i++) {
            if (array[i] < m) {
                m = array[i];
            }
        }
        return m;
    },

    media: function(array) {
        var soma=0;
        for (i = 0; i < array.length; i++) {
            soma+=array[i];
        }
        return soma/array.length;
    },

    idx:function(array,element) {
        for(i=0;i!=array.length;i++){
            if (array[i]==element){
                return i;
            }
        }
    }
};

module.exports = arrayutils