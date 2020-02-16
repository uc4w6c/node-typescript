"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JSError_1 = require("./types/JSError");
console.log('hogehoge');
const jsErrorBool = new JSError_1.JSError('Invalid partition metadata', { retriable: true });
const jsErrorString = new JSError_1.JSError('The group is rebalancing');
const jsErrorError = new JSError_1.JSError(new Error('💣'), { retriable: true });
const jsError = new JSError_1.JSError('Invalid partition metadata', { topic: "topic", partitionId: 11 });
//# sourceMappingURL=app.js.map