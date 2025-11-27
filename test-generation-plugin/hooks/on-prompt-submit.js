/**
 * Hook: onPromptSubmit
 *
 * This hook runs before the user's prompt is sent to Claude.
 * It enhances prompts in three situations:
 *
 * 1. If the user appears to be dealing with an error,
 *    Claude receives an extra suggestion that is hidden to the user that encourages testing and
 *    suggesting the `/generate-tests` command.
 *
 * 2. If the user is talking about testing but not providing specific code,
 *    Claude receives an extra suggestion that is hidden to the user that suggests
 *    asking the user for specific code to test.
 *    
 * 3. If the user asks to test some code but doesn't use the command `/generate-tests`,
 *    Claude receives an extra suggestion that is hidden to the user that asks the user
 *    to use the command for best results.
 */

module.exports = async (context) => {
  const { prompt, metadata } = context;

  // Ensures prompt is an existing string
  if (!prompt || typeof prompt !== "string") {
    return context;
  }

  const lower = prompt.toLowerCase();

  // Detect when user is facing runtime errors or test failures
  const looksLikeError =
    lower.includes("error") ||
    lower.includes("exception") ||
    lower.includes("stack trace") ||
    lower.includes("stacktrace") ||
    lower.includes("typeerror") ||
    lower.includes("referenceerror") ||
    lower.includes("assertionerror") ||
    lower.includes("test failed") ||
    lower.includes("failing test");

  // Detect when the user is talking about tests but has not provided code.
  const mentionsTesting =
    lower.includes("test")

  const looksLikeCode =
    lower.includes("```") ||
    lower.includes("function") ||
    lower.includes("class") ||
    lower.includes("def") ||
    lower.includes("{") ||
    lower.includes("};") ||
    lower.includes(");");

  const mentionsTestsWithoutCode = mentionsTesting && !looksLikeCode;

  // Detect when the user is explicitly asking to test some code,
  // but hasn't used the `/generate-tests` command.

  const mentionsGenerateCommand = lower.includes("/generate-tests");

  const asksToTestCodeWithoutCommand =
    mentionsTesting && !mentionsGenerateCommand;

  let appendedHint = "";

  // CASE 1: User appears to be dealing with an error
  if (looksLikeError) {
    appendedHint +=
      "\n\n[Testing Helper Plugin Hint] The user appears to be dealing with an error or failing behaviour. " +
      "Where useful suggest that test scenarios could help understand and solve this issue, " +
      "and you may remind them that selecting the relevant code and running `/generate-tests` will automatically generate tests.";
  }

  // CASE 2: User is talking about tests but has not provided any code
  if (mentionsTestsWithoutCode) {
    appendedHint +=
      "\n\n[Testing Helper Plugin Hint] The user is talking about tests but has not provided specific code. " +
      "Ask them to paste or select the function or code they want to test so you can generate tests.";
  }

  // CASE 3: User is asking to test some code but is not using the command
  if (asksToTestCodeWithoutCommand) {
    appendedHint +=
      "\n\n[Testing Helper Plugin Hint] The user is asking you to write tests for some code but has not used the `/generate-tests` command. " +
      "You can suggest that they select the relevant code and run `/generate-tests` for proper results.";
  }

  // If no conditions matched, leave the prompt unchanged
  if (!appendedHint) {
    return context;
  }

  // Otherwise return new context with hint appended
  return {
    ...context,
    prompt: prompt + appendedHint,
    metadata: {
      ...metadata,
      testHelperHookActivated: true,
    },
  };
};
