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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Query = exports.connection = void 0;\nvar mysql = __webpack_require__(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module 'mysql'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nvar recipes_1 = __webpack_require__(/*! ./recipes */ \"./src/server/db/recipes.ts\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module 'dotenv'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()).config();\nexports.connection = mysql.createConnection({\n    host: process.env.DB_HOST,\n    user: process.env.DB_USER,\n    database: process.env.DB_DATABASE,\n    password: process.env.DB_PASS\n});\nexports.connection.connect(function (err) {\n    if (err)\n        throw err;\n    console.log('Connected to Database!');\n});\nvar Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            return resolve(results);\n        });\n    });\n};\nexports.Query = Query;\nexports[\"default\"] = {\n    Recipes: recipes_1.default\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/db/recipes.ts":
/*!**********************************!*\
  !*** ./src/server/db/recipes.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar getRecipe = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes\\n  join users on users.id=recipes.userid\")];\n    });\n}); };\nvar getRandomRecipe = function () { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.meals, recipes.servings, recipes.imagelink, recipes._created, users.username from recipes\\n  join users on users.id=recipes.userid\\n  order by rand()\\n  limit 3\")];\n    });\n}); };\nvar oneRecipe = function (id) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  recipes WHERE recipes.id = ?\", [id])];\n    });\n}); };\nvar oneUser = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  users WHERE users.id = ?\", [id])];\n}); }); };\nvar oneIngredient = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  ingredients WHERE ingredients.recipeid = ?\", [id])];\n}); }); };\nvar oneComments = function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, (0, index_1.Query)(\"SELECT * FROM  comments WHERE comments.recipeid = ?\", [id])\n        // const oneRecipe = async (id: any) =>\n        //   Query(\n        //     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes\n        //   join ingredients on recipes.id = ingredients.recipeid\n        //   join users on recipes.userid=users.id\n        //   join comments on recipes.id = comments.recipeid\n        //   where recipes.id = ?`,\n        //     [id]\n        //   );\n    ];\n}); }); };\n// const oneRecipe = async (id: any) =>\n//   Query(\n//     `select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink,  ingredients.name, ingredients.amount, users.username, comments.comment from recipes\n//   join ingredients on recipes.id = ingredients.recipeid\n//   join users on recipes.userid=users.id\n//   join comments on recipes.id = comments.recipeid\n//   where recipes.id = ?`,\n//     [id]\n//   );\nvar postUser = function (username) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, (0, index_1.Query)(\"insert into users(username) values(?);\", [username])];\n}); }); };\nvar postRecipe = function (imagelink, title, directions, description, meals, cooktime, servings, userid, username) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"insert into recipes(imagelink, title, directions, description, cooktime, servings, userid) values(?,?,?,?,?,?,?);\", [imagelink, title, directions, description, meals, cooktime, servings, userid, username])];\n    });\n}); };\nvar postIngredients = function (name, amount, recipeid) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"insert into ingredients(name, amount, recipeid) values(?,?,?);\", [\n                name,\n                amount,\n                recipeid,\n            ])];\n    });\n}); };\nvar postComments = function (comment, recipeid) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    return [2 /*return*/, (0, index_1.Query)(\"insert into comments(comment, recipeid) values(?,?)\", [comment, recipeid])];\n}); }); };\nvar searchRecipesByIngredient = function (ingname) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.*, ingredients.name,  users.username from recipes\\njoin ingredients on recipes.id = ingredients.recipeid\\njoin users on users.id=recipes.userid\\nwhere ingredients.name = ?\", [ingname])];\n    });\n}); };\nvar searchRecipesByUsername = function (username) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username from recipes\\n\\njoin users on users.id=recipes.userid\\nwhere users.username = ?\", [username])];\n    });\n}); };\nvar searchRecipesByTitle = function (title) { return __awaiter(void 0, void 0, void 0, function () {\n    return __generator(this, function (_a) {\n        return [2 /*return*/, (0, index_1.Query)(\"select recipes.id, recipes.title, recipes.directions, recipes.description, recipes.cooktime, recipes.servings, recipes.imagelink, users.username \\nfrom users\\njoin recipes on users.id=recipes.userid\\nwhere recipes.title = ?\", [title])];\n    });\n}); };\nexports[\"default\"] = {\n    getRecipe: getRecipe,\n    oneRecipe: oneRecipe,\n    oneUser: oneUser,\n    oneIngredient: oneIngredient,\n    oneComments: oneComments,\n    postUser: postUser,\n    postRecipe: postRecipe,\n    postIngredients: postIngredients,\n    postComments: postComments,\n    searchRecipesByIngredient: searchRecipesByIngredient,\n    searchRecipesByUsername: searchRecipesByUsername,\n    searchRecipesByTitle: searchRecipesByTitle,\n    getRandomRecipe: getRandomRecipe\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/recipes.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar recipe_1 = __webpack_require__(/*! ./recipe */ \"./src/server/routes/recipe.ts\");\nvar router = express.Router();\nrouter.use('/recipes', recipe_1.default);\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/routes/recipe.ts":
/*!*************************************!*\
  !*** ./src/server/routes/recipe.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar router = express.Router();\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipes, e_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.getRecipe()];\n            case 1:\n                recipes = _a.sent();\n                res.json(recipes);\n                return [3 /*break*/, 3];\n            case 2:\n                e_1 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/random\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipes, e_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.getRandomRecipe()];\n            case 1:\n                recipes = _a.sent();\n                res.json(recipes);\n                return [3 /*break*/, 3];\n            case 2:\n                e_2 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/search-user/:username\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipesByUsername, e_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByUsername(req.params.username)];\n            case 1:\n                recipesByUsername = _a.sent();\n                res.json(recipesByUsername);\n                return [3 /*break*/, 3];\n            case 2:\n                e_3 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/search-ing/:ingname\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipesByIngredient, e_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByIngredient(req.params.ingname)];\n            case 1:\n                recipesByIngredient = _a.sent();\n                res.json(recipesByIngredient);\n                return [3 /*break*/, 3];\n            case 2:\n                e_4 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/search-recipetitle/:title\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipesByTitle, e_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.searchRecipesByTitle(req.params.title)];\n            case 1:\n                recipesByTitle = _a.sent();\n                res.json(recipesByTitle);\n                return [3 /*break*/, 3];\n            case 2:\n                e_5 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipe, user, comment, ingredients, e_6;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 5, , 6]);\n                return [4 /*yield*/, db_1.default.Recipes.oneRecipe(req.params.id)];\n            case 1:\n                recipe = _a.sent();\n                return [4 /*yield*/, db_1.default.Recipes.oneUser(req.params.id)];\n            case 2:\n                user = _a.sent();\n                return [4 /*yield*/, db_1.default.Recipes.oneComments(req.params.id)];\n            case 3:\n                comment = _a.sent();\n                return [4 /*yield*/, db_1.default.Recipes.oneIngredient(req.params.id)];\n            case 4:\n                ingredients = _a.sent();\n                res.json({\n                    recipe: recipe,\n                    user: user,\n                    comment: comment,\n                    ingredients: ingredients,\n                });\n                return [3 /*break*/, 6];\n            case 5:\n                e_6 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 6];\n            case 6: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var recipes, e_7;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Recipes.getRecipe()];\n            case 1:\n                recipes = _a.sent();\n                res.json(recipes);\n                return [3 /*break*/, 3];\n            case 2:\n                e_7 = _a.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post(\"/:id?\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var _a, _b, e_8, User, userid, Recipe, recipeid_1, e_9;\n    return __generator(this, function (_c) {\n        switch (_c.label) {\n            case 0:\n                if (!req.params.id) return [3 /*break*/, 5];\n                _c.label = 1;\n            case 1:\n                _c.trys.push([1, 3, , 4]);\n                console.log(\"comment ok\");\n                _b = (_a = res).json;\n                return [4 /*yield*/, db_1.default.Recipes.postComments(req.body.comment, req.params.id)];\n            case 2:\n                _b.apply(_a, [_c.sent()]);\n                return [3 /*break*/, 4];\n            case 3:\n                e_8 = _c.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 4];\n            case 4: return [3 /*break*/, 9];\n            case 5:\n                _c.trys.push([5, 8, , 9]);\n                return [4 /*yield*/, db_1.default.Recipes.postUser(req.body.username)];\n            case 6:\n                User = _c.sent();\n                userid = User.insertId;\n                return [4 /*yield*/, db_1.default.Recipes.postRecipe(req.body.imagelink, req.body.title, req.body.directions, req.body.description, req.body.meals, req.body.cooktime, req.body.servings, req.body.username, userid)];\n            case 7:\n                Recipe = _c.sent();\n                recipeid_1 = Recipe.insertId;\n                req.body.ingredients.forEach(function (ingredient) { return __awaiter(void 0, void 0, void 0, function () {\n                    return __generator(this, function (_a) {\n                        switch (_a.label) {\n                            case 0: return [4 /*yield*/, db_1.default.Recipes.postIngredients(ingredient.ingredientsName, ingredient.ingredientsAmount, recipeid_1)];\n                            case 1: return [2 /*return*/, _a.sent()];\n                        }\n                    });\n                }); });\n                res.sendStatus(200);\n                return [3 /*break*/, 9];\n            case 8:\n                e_9 = _c.sent();\n                res.sendStatus(500);\n                return [3 /*break*/, 9];\n            case 9: return [2 /*return*/];\n        }\n    });\n}); });\n// router.post('/:id', async(req, res) => {\n// })\nexports[\"default\"] = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/recipe.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar path = __webpack_require__(/*! path */ \"path\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.json());\napp.use(express.static('public'));\napp.use('/api', routes_1.default);\napp.use(\"*\", function (req, res) { return res.sendFile(path.join(__dirname, \"../public/index.html\")); });\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

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