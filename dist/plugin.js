var capacitorPlugin = (function (exports, core) {
    'use strict';

    var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    class CapacitorSQLiteWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'CapacitorSQLite',
                platforms: ['web'],
            });
        }
        echo(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('ECHO in Web plugin', options);
                return options;
            });
        }
        open(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('open', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        close(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('close', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        execute(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('execute', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        executeSet(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('execute', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        run(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('run', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        query(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('query', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        isDBExists(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('in Web isDBExists', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        deleteDatabase(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('deleteDatabase', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        isJsonValid(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('isJsonValid', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        importFromJson(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('importFromJson', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        exportToJson(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('exportToJson', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        createSyncTable() {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('createSyncTable');
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        setSyncDate(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('setSyncDate', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
        addUpgradeStatement(options) {
            return __awaiter(this, void 0, void 0, function* () {
                console.log('addUpgradeStatement', options);
                return Promise.resolve({
                    result: false,
                    message: `Not implemented on Web Platform`,
                });
            });
        }
    }
    const CapacitorSQLite = new CapacitorSQLiteWeb();
    core.registerWebPlugin(CapacitorSQLite);

    exports.CapacitorSQLite = CapacitorSQLite;
    exports.CapacitorSQLiteWeb = CapacitorSQLiteWeb;

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
