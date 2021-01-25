# Autoflake README

[Project link](https://github.com/myint/autoflake)

## Introduction

_autoflake_ removes unused imports and unused variables from Python code. It makes use of `pyflakes` to do this.

By default, _autoflake_ only removes unused imports for modules that are part of the standard library. (Other modules may have side effects that make them unsafe to remove automatically.) Removal of unused variables is also disabled by default.

autoflake also removes useless `pass` statements.

## Usage

![Usage](https://raw.githubusercontent.com/trungnt13/vscode-autoflake/main/usage.png)

## License

[MIT License](https://github.com/myint/autoflake/blob/master/README.rst)
