# Smartr Claude Code Plugin Challenge

## 1. Problem Statement
   Developers often spend a large amount of time manually designing tests for their code, wasting time having to think through all scenarios. 
   
   My plugin is designed automate this process by generating a plethora of tests to reduce time taken thinking of and designing these tests.

   **Who is this for?**
   Designed for any developers, engineers or anyone who has to create tests for their code 

   **Why is it important?**
   - Saves lots of time
   - Boosts efficiency 
   - Ensures coverage of all test types 
   - Focus can be on tasks of higher importance

## 2. Architecture
   This plugin consists of three components: 
   - A **command**
   - A **skill**
   - A **hook**
   
   ### ### Command: `/generate-tests`
   - This is how the user initiates the test generation
   - It gives a general description of the task and triggers the generation.

   ### ### Skill: Systematic Test Generation
   The skill defines a structured workflow to illustrate and break down every step whilst being extremely descriptive and concise to ensure accuracy and consistency.

   It is broken down into three phases:

   #### Phase 1: Understanding the code
      - Reading the code
      - Summarising its behaviour, inputs, outputs and branches

   #### Phase 2: Designing test scenarios
      - Identifying normal cases, edge cases and error cases
      - Creates a list of all cases with matched expected outputs

   #### Phase 3: Generating executable tests
      - Translates the scenarios into executable, commented test code 
      - Designed for the user to run

   ### ### Hook: `onPromptSubmit`
   The hook improves the UX by adding helpful catches:
      - If a user is dealing with errors, Claude will recommend generating tests via hidden injected advice
      - If the user wants to test but no code is provided, Claude suggests selecting the specific code
      - If the user wants to test but doesn't call the command, Claude reminds them that is how to generate the tests

   These components work effectively together to provide a clear, logical and thorough set of instructions for Claude Code to follow so that in the area of testing, it is prepared for all situations and can respond to them appropriately.

## 3. Installation & Usage

   ### **Installation**

      1. Clone or download the plugin
      2. Place it inside your local Claude Code marketplace directory

      .claude-plugin/
            test-generation-plugin/

      3. Add the plugin to marketplace.json
      using:


      ``` json
      {
      "name": "local-test-marketplace",
      "version": 1,
      "plugins": [
         {
            "name": "test-generation-plugin",
            "source": "./test-generation-plugin"
         }
      ]
      } 
      ```


      4. Open Claude Code terminal and run:
      
      /plugins install

   ### **Usage**

      Option A:
         1. Type and run /generate-tests
         2. Claude will ask for code to be given
         3. Highlight relevant code
         4. Send any new prompt to acknowledge you have

      Option B:
         1. Copy and paste selected code into the terminal and enter
         2. Run /generate-tests

   Outcome will consist of:
      1. Code acknowledgement
      2. Code summary
      3. Test scenarios
      4. Test code


## 4. Demo

   Video provided as a part of submission

## 5. Reflection

   ### What I would improve with more time:
   - Have the plugin work in one prompt, whether that be running the command and having the code in the same message, or Claude being able to read the selected text when a command is called
   - Testing for multiple functions at once
   
   ### Trade offs:
   - Using two prompts to fully generate tasks instead of spending hours researching how to complete the task in one prompt only
   
   ### What I learned:
   - How Claude interacts with selected text 
   - The importance of designing with UX limitations in mind 
   - The importance of methodical, structured and precise prompting


