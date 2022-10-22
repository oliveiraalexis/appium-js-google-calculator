const wdio = require("webdriverio");
//const assert = require("assert");

const opts = {
  path: '/wd/hub',
  port: 4723,
  capabilities: {
    platformName: "Android",
    platformVersion: "9",
    deviceName: "Android Emulator",
    app: "apk/com.google.android.calculator_8.3.apk",
    appPackage: "com.google.android.calculator",
    appActivity: "com.android.calculator2.Calculator",
    automationName: "UiAutomator2"
  }
};

async function main () {
  const client = await wdio.remote(opts);

//   const field = await client.$("android.widget.EditText");
//   await field.setValue("Hello World!");
//   const value = await field.getText();
//   assert.strictEqual(value,"Hello World!");

  await client.deleteSession();
}

main();