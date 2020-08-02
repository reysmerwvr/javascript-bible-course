# Javascript Engine Phase

- Compilation
  - Create Activation Object with all variables
- Execution
  - Execute code line by line

## Variable lifecycle phases

- Declaration: Register variable in the corresponding scope
- Initialization: Allocate memory for the variable. Variable decleared with "var" will get automatic value "undefined"
- Assignment: Assign value to the initialized variable

## Temporal Dead Zone (TDZ)

Accessing variable in the TDZ will lead to the following error:
ReferenceError: Variable is not defined

## Hoisting

Describes process of compilation and execution phases.
