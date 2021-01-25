"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");
const child_process = require("child_process");
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {
    const remove_unused = (textEditor, edit) => {
        let config = vscode.workspace.getConfiguration('autoflake');
        const all_imports = config.get('removeAllUnusedImports');
        const remove_vars = config.get('removeAllUnusedVariables');
        const remove_duplicate = config.get('removeDuplicateKeys');
        const autoflake = config.get('path');
        // get the activate editor
        let filepath = textEditor.document.uri.path;
        // skip if not python file
        if (textEditor.document.languageId != 'python') {
            vscode.window.showErrorMessage('Skip autoflake, not python script.');
            return;
        }
        // skip if not python file
        const exec_script = `${autoflake} --in-place \
      ${all_imports ? '--remove-all-unused-imports' : ' '} \
      ${remove_vars ? '--remove-unused-variables' : ' '} \
      ${remove_duplicate ? '--remove-duplicate-keys' : ' '} \
      ${filepath}`;
        vscode.window.showInformationMessage(exec_script);
        child_process.exec(exec_script, (err, stdout, stderr) => {
            if (stdout.length > 0) {
                vscode.window.showInformationMessage('stdout: ' + stdout);
            }
            if (err) {
                vscode.window.showErrorMessage(stderr);
            }
        });
    };
    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let cmd = vscode.commands.registerTextEditorCommand('autoflake.removeUnused', remove_unused);
    context.subscriptions.push(cmd);
}
exports.activate = activate;
// this method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map