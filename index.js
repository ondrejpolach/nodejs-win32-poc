var ref = require('ref-napi');
var ffi = require('ffi-napi');

var hellLib = ffi.Library('dll/HelloDll++', {
    "add": [ref.types.int32, [ref.types.int32, ref.types.int32]]
});

console.log(hellLib.add(100, 525))