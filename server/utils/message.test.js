const expect = require("expect");

const { generateMessage } = require("./message");

describe("generate message", () => {
  it("should generate correct message object", () => {
    let from = "Tom",
      text = "Some msg about niggers";
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA("number");
    expect(message).toInclude({ from, text });
  });
});
