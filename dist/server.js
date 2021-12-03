/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Query = exports.connection = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar recipes_1 = __webpack_require__(/*! ./recipes */ \"./src/server/db/recipes.ts\");\r\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\nexports.connection = mysql.createConnection({\r\n    host: process.env.DB_HOST,\r\n    user: process.env.DB_USER,\r\n    database: process.env.DB_DATABASE,\r\n    password: process.env.DB_PASS\r\n});\r\nexports.connection.connect(function (err) {\r\n    if (err)\r\n        throw err;\r\n    console.log('Connected to Database!');\r\n});\r\nvar Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        exports.connection.query(query, values, function (err, results) {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.Query = Query;\r\nexports[\"default\"] = {\r\n    Recipes: recipes_1.default\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/recipes.ts":
/*!**********************************!*\
  !*** ./src/server/db/recipes.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar getRecipe = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes\\n  join users on users.id=recipes.userid\")];\r\n    });\r\n}); };\r\nvar getRandomRecipe = function () { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes\\n  join users on users.id=recipes.userid\\n  order by rand()\\n  limit 2\")];\r\n    });\r\n}); };\r\nvar oneRecipe = function (id) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  recipes WHERE recipes.id = ?\", [id])];\r\n    });\r\n}); };\r\nvar oneUser = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  users WHERE users.id = ?\", [id])];\r\n}); }); };\r\nvar oneIngredient = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  ingredients WHERE ingredients.recipeid = ?\", [id])];\r\n}); }); };\r\nvar oneComments = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  comments WHERE comments.recipeid = ?\", [id])\r\n        // const oneRecipe = async (id: any) =>\r\n        //   Query(\r\n        //     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes\r\n        //   join ingredients on recipes.id = ingredients.recipeid\r\n        //   join users on recipes.userid=users.id\r\n        //   join comments on recipes.id = comments.recipeid\r\n        //   where recipes.id = ?`,\r\n        //     [id]\r\n        //   );\r\n    ];\r\n}); }); };\r\n// const oneRecipe = async (id: any) =>\r\n//   Query(\r\n//     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes\r\n//   join ingredients on recipes.id = ingredients.recipeid\r\n//   join users on recipes.userid=users.id\r\n//   join comments on recipes.id = comments.recipeid\r\n//   where recipes.id = ?`,\r\n//     [id]\r\n//   );\r\nvar postUser = function (username) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"insert into users(username) values(?);\", [username])];\r\n}); }); };\r\nvar postRecipe = function (imagelink, title, directions, description, meals, cooktime, servings, userid, username) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"insert into recipes(imagelink, title, directions, description, cooktime, servings, userid) values(?,?,?,?,?,?,?);\", [imagelink, title, directions, description, meals, cooktime, servings, userid, username])];\r\n    });\r\n}); };\r\nvar postIngredients = function (name, amount, recipeid) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"insert into ingredients(name, amount, recipeid) values(?,?,?);\", [\r\n                name,\r\n                amount,\r\n                recipeid,\r\n            ])];\r\n    });\r\n}); };\r\nvar postComments = function (comment, recipeid) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    return [2 /*return*/, (0, index_1.Query)(\"insert into comments(comment, recipeid) values(?,?)\", [comment, recipeid])];\r\n}); }); };\r\nvar searchRecipesByIngredient = function (ingname) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.*, ingredients.name,  users.username from recipes\\njoin ingredients on recipes.id = ingredients.recipeid\\njoin users on users.id=recipes.userid\\nwhere ingredients.name = ?\", [ingname])];\r\n    });\r\n}); };\r\nvar searchRecipesByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username from recipes\\n\\njoin users on users.id=recipes.userid\\nwhere users.username = ?\", [username])];\r\n    });\r\n}); };\r\nvar searchRecipesByTitle = function (title) { return __awaiter(void 0, void 0, void 0, function () {\r\n    return __generator(this, function (_a) {\r\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username \\nfrom users\\njoin recipes on users.id=recipes.userid\\nwhere recipes.title = ?\", [title])];\r\n    });\r\n}); };\r\nexports[\"default\"] = {\r\n    getRecipe: getRecipe,\r\n    oneRecipe: oneRecipe,\r\n    oneUser: oneUser,\r\n    oneIngredient: oneIngredient,\r\n    oneComments: oneComments,\r\n    postUser: postUser,\r\n    postRecipe: postRecipe,\r\n    postIngredients: postIngredients,\r\n    postComments: postComments,\r\n    searchRecipesByIngredient: searchRecipesByIngredient,\r\n    searchRecipesByUsername: searchRecipesByUsername,\r\n    searchRecipesByTitle: searchRecipesByTitle,\r\n    getRandomRecipe: getRandomRecipe\r\n};\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/recipes.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar recipe_1 = __webpack_require__(/*! ./recipe */ \"./src/server/routes/recipe.ts\");\r\nvar router = express.Router();\r\nrouter.use('/recipes', recipe_1.default);\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/recipe.ts":
/*!*************************************!*\
  !*** ./src/server/routes/recipe.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar router = express.Router();\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipes, e_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.getRecipe()];\r\n            case 1:\r\n                recipes = _a.sent();\r\n                res.json(recipes);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_1 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/random\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipes, e_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.getRandomRecipe()];\r\n            case 1:\r\n                recipes = _a.sent();\r\n                res.json(recipes);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_2 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/search-user/:username\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipesByUsername, e_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByUsername(req.params.username)];\r\n            case 1:\r\n                recipesByUsername = _a.sent();\r\n                res.json(recipesByUsername);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_3 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/search-ing/:ingname\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipesByIngredient, e_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByIngredient(req.params.ingname)];\r\n            case 1:\r\n                recipesByIngredient = _a.sent();\r\n                res.json(recipesByIngredient);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_4 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/search-recipetitle/:title\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipesByTitle, e_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByTitle(req.params.title)];\r\n            case 1:\r\n                recipesByTitle = _a.sent();\r\n                res.json(recipesByTitle);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_5 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipe, user, comment, ingredients, e_6;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 5, , 6]);\r\n                return [4 /*yield*/, db_1.default.Recipes.oneRecipe(req.params.id)];\r\n            case 1:\r\n                recipe = _a.sent();\r\n                return [4 /*yield*/, db_1.default.Recipes.oneUser(req.params.id)];\r\n            case 2:\r\n                user = _a.sent();\r\n                return [4 /*yield*/, db_1.default.Recipes.oneComments(req.params.id)];\r\n            case 3:\r\n                comment = _a.sent();\r\n                return [4 /*yield*/, db_1.default.Recipes.oneIngredient(req.params.id)];\r\n            case 4:\r\n                ingredients = _a.sent();\r\n                res.json({\r\n                    recipe: recipe,\r\n                    user: user,\r\n                    comment: comment,\r\n                    ingredients: ingredients,\r\n                });\r\n                return [3 /*break*/, 6];\r\n            case 5:\r\n                e_6 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 6];\r\n            case 6: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var recipes, e_7;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Recipes.getRecipe()];\r\n            case 1:\r\n                recipes = _a.sent();\r\n                res.json(recipes);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                e_7 = _a.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post(\"/:id?\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var _a, _b, e_8, User, userid, Recipe, recipeid_1, e_9;\r\n    return __generator(this, function (_c) {\r\n        switch (_c.label) {\r\n            case 0:\r\n                if (!req.params.id) return [3 /*break*/, 5];\r\n                _c.label = 1;\r\n            case 1:\r\n                _c.trys.push([1, 3, , 4]);\r\n                console.log(\"comment ok\");\r\n                _b = (_a = res).json;\r\n                return [4 /*yield*/, db_1.default.Recipes.postComments(req.body.comment, req.params.id)];\r\n            case 2:\r\n                _b.apply(_a, [_c.sent()]);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                e_8 = _c.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 4];\r\n            case 4: return [3 /*break*/, 9];\r\n            case 5:\r\n                _c.trys.push([5, 8, , 9]);\r\n                return [4 /*yield*/, db_1.default.Recipes.postUser(req.body.username)];\r\n            case 6:\r\n                User = _c.sent();\r\n                userid = User.insertId;\r\n                return [4 /*yield*/, db_1.default.Recipes.postRecipe(req.body.imagelink, req.body.title, req.body.directions, req.body.description, req.body.meals, req.body.cooktime, req.body.servings, req.body.username, userid)];\r\n            case 7:\r\n                Recipe = _c.sent();\r\n                recipeid_1 = Recipe.insertId;\r\n                req.body.ingredients.forEach(function (ingredient) { return __awaiter(void 0, void 0, void 0, function () {\r\n                    return __generator(this, function (_a) {\r\n                        switch (_a.label) {\r\n                            case 0: return [4 /*yield*/, db_1.default.Recipes.postIngredients(ingredient.ingredientsName, ingredient.ingredientsAmount, recipeid_1)];\r\n                            case 1: return [2 /*return*/, _a.sent()];\r\n                        }\r\n                    });\r\n                }); });\r\n                res.sendStatus(200);\r\n                return [3 /*break*/, 9];\r\n            case 8:\r\n                e_9 = _c.sent();\r\n                res.sendStatus(500);\r\n                return [3 /*break*/, 9];\r\n            case 9: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\n// router.post('/:id', async(req, res) => {\r\n// })\r\nexports[\"default\"] = router;\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/recipe.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar app = express();\r\napp.use(express.json());\r\napp.use(express.static('public'));\r\napp.get('/api', routes_1.default);\r\napp.get(\"/*\", function (req, res) { return res.sendFile(path.join(__dirname, \"../public/index.html\")); });\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;