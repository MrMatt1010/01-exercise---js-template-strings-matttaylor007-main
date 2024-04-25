import { fullName, listHTML, albumText } from "../Submission/static/js/script";

describe("template strings", () => {
  it("should have the correct fullName", () => {
    expect(fullName).toEqual("Bill Murray");
  });

  it("should have the correct listHTML", () => {
    // Remove double spaces so string is on one line
    // This is to make the test more flexible in case the indentation is slightly different
    // between submissions
    const singleLineListHTML = listHTML.replace(/\s+/g, " ").trim();
    expect(singleLineListHTML).toEqual(
      "<ul> <li>Banana</li> <li>Orange</li> </ul>"
    );
  });

  it("should have the correct albumText", () => {
    expect(albumText).toEqual("Purple Rain by Prince was released in 1984");
  });
});
