"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/users", (_req, res) => {
    res.json({
        "name": "waqar",
        "age": 12,
        "Education": "Aspire college school",
    });
});
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
