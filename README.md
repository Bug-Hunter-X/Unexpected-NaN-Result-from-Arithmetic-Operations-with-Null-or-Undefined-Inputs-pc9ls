# Unexpected NaN Result from Arithmetic Operations with Null or Undefined Inputs

This repository demonstrates a common JavaScript bug where using null or undefined values in arithmetic operations leads to NaN (Not a Number) results. The provided code examples illustrate the problem and offer a solution involving input validation to prevent such errors.

## Bug Description

The `foo` function adds two numbers. The `bar` function uses `foo` and multiplies the result by 2.  If either argument passed to `bar` is null or undefined, the result is NaN. This happens because JavaScript's loose typing converts null/undefined to 0 in addition but not in multiplication.

## Solution

The solution involves adding input validation to the functions to handle null or undefined inputs appropriately.  In this case, we replace such values with 0 before the arithmetic operations.