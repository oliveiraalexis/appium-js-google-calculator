# Google Calculator Test on Android Using Appium JS
### Project creation steps
- Project startup: ``` npm init -y ```
- Android Webdriver installation: ```npm install webdriverio ```

### Downloads
- Google Calculator APK: https://www.apkmirror.com/apk/google-inc/google-calculator/google-calculator-8-3-477856174-release/google-calculator-8-3-477856174-android-apk-download/
- APK to get "appActivity" and "appPackage": https://m.apkpure.com/br/apk-info/com.wt.apkinfo

### Commands to run the test
- To start the Appium server: ``` appium ``` 
- To run the test: ``` node index.js ``` 

### Useful commands
- Check if the server port is in use: ``` netstat -ano|findstr "PID :4723" ```
- kill the session: ``` taskkill /pid 9100 /f ```