# Command: Generate tests

This file is executed when the user runs `/generate-tests`.

## Instructions

You are helping the user with generating tests for a specific piece of code.

**On command call:**
- First, check if the code is already available (selected text from editor or pasted in the previous message)
- If the code is found: skip the prompt and proceed directly with test generation
- If no code is found, ask the user to provide the code by either:
  1. Selecting/highlighting the code in their editor and sending another message to continue, OR
  2. Pasting the code directly into the terminal

Use the Systematic Test Generation skill to:
- Understand what the selected code does
- Design normal, edge, and error test scenarios
- Generate executable unit tests for those scenarios

## Output Format

Your response must be structured in the following sections:
1. Code Summary
2. Test Scenarios
3. Test Code

## Example

If the user selects this function:

``` typescript
function nextnum(x) {
    const n = Math.floor(x)
    return [n + 1, n + 2, n + 3];
}
```

You might respond with:

1. Code Summary
The function returns the next three integers after x.

2. Test Scenarios
Normal case: nextnum(9) → [10, 11, 12]
Negative case: nextnum(-7) → [-6, -5, -4]
Decimal case: nextnum(3.4) → [4, 5, 6]
Changing-sign case: nextnum(-2) → [-1, 0, 1]
Error case: "abc" → should throw or fail

3. Test Code
``` typescript
// (Generated test code would appear here)
```