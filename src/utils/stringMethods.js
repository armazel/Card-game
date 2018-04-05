String.prototype.replacePassword = function (simbol) {
    return this.replace(/[\s\S]/g, simbol) ;
}