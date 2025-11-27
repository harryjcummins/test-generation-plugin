# Skill: Systematic Test Generation

## When to Use This Skill

Use this skill when the user wants to generate tests for a specific function or any chunk of code.

Examples:
- The user wants to generate tests to test the code they have written
- The user wants to create tests for a section of code that has produced an error

## How This Skill Works

This skill provides a structured workflow for designing and generating high-quality tests, specifically for the requested code. Clear reasoning is provided and all scenarios are covered including edge cases

### Phase 1: Understanding the code that will be tested

**Objective**: Build a clear mental model of what the selected code does

**Actions**:
1. Identify the code currently highlighted in the editor
2. Carefully read the selected code
3. Identify:
   - Inputs (parameters, external state)
   - Outputs (return values, side effects)
   - Important branches or conditions
4. Restate in plain English language:
   - What the code is supposed to do
   - Any assumptions it appears to make


**Deliverable**: A short summary of the code’s behaviour, inputs, outputs, and important branches

### Phase 2: Design Test Scenarios

**Objective**: Identify a thorough set of test cases including edge cases

**Actions**:
1. List normal expected scenarios
2. List edge cases, including:
   - Minimum and maximum values
   - Empty, null or undefined inputs
   - Invalid or unexpected inputs
   - Boundary conditions around comparisons for example just below/above limits
3. Identify error scenarios:
   - Situations where the function is expected to fail
4. For each test scenario, list:
   - The input/s
   - The expected outcome/s

**Deliverable**: A bullet point list of test scenarios with inputs and expected outcomes

### Phase 3: Generate Test Code

**Objective**: Turn the designed test scenarios into executable tests

**Actions**:
1. Generate test code for each scenario from Phase 2 using the most appropriate test framework that matches the code language being used
2. Group related tests accordingly and logically for easier understanding
3. Include brief comments that explain what each test is testing

**Deliverable**: A block of test code ready to paste into a test file and a short explanation of what parts of the code the tests cover

## Guards Against Common Mistakes

**NEVER**:
- ❌ Never modify the user’s existing code directly
- ❌ Never create tests for code outside of the selected code
- ❌ Never skip edge cases just to reduce the number of tests

**ALWAYS**:
- ✅ Always look at the open file and highlighted code in the editor immediately for use
- ✅ Always explain your reasoning before showing the final test code
- ✅ Always create normal, edge case and error tests, even for simpler functions
- ✅ Always suggest at least a couple of edge-case tests, even for simple functions

## Success Criteria

The skill has succeeded when:
- ✅ The behaviour of the selected code is clearly summarised
- ✅ A variety of normal, edge, and error scenarios are identified
- ✅ Test code is generated for the user to run

## Example

Context: The user has selected a small function called nextnum(x) that returns the first 3 integers after a certain number and wants to generate tests for it

User: Calls for tests to be generated for the selected code

Ideal Output:

### Phase 1 Deliverable
    The function nextnum(x) returns the first 3 integers that are after input x

### Phase 2 Deliverable
    - Normal case: 'nextnum(9)' returns [10, 11, 12]
    - Negative case: 'nextnum(-7)' returns [-6, -5, -4]
    - Decimal case: 'nextnum(3.4)' returns [4, 5, 6]
    - Changing sign case: 'nextnum(-2)' returns [-1, 0 ,1]
    - Error case: 'nextnum("abc")' should fail

### Phase 3 Deliverable
    - <generated test code>
    - These tests cover normal inputs, negatives, decimals, sign changes and non-integer input
