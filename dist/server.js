"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = 8086;
app_1.default.listen(process.env.PORT || PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`);
});
//# sourceMappingURL=server.js.map