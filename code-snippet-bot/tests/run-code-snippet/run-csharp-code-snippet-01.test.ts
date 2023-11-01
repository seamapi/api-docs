import test from "ava"
import { runCsharpCodeSample } from "../../src/run-code-snippet/run-csharp-code-snippet"

test("run csharp code snippet 01", async (t) => {
  const { logged_content, execution_result } = await runCsharpCodeSample(`
    Console.WriteLine("Hello, World!");
  `)

  // Assert that the execution result and log contain the expected output
  t.deepEqual(logged_content, ["Hello, World!"])
  t.is(execution_result, "Hello, World!")
})

