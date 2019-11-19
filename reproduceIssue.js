const {
  openBrowser,
  goto,
  below,
  dropDown,
  closeBrowser,
  text
} = require("taiko");

(async () => {
  try {
    await openBrowser();
    await goto("localhost:3000");
    await dropDown(below("learn react")).select("2");
    await dropDown(below("learn react")).select("4");
    await text("option4").exists();
  } catch (error) {
    console.error(error);
  } finally {
    await closeBrowser();
  }
})();
