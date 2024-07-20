const IS_DEV = process.env.APP_VARIANT !== "production";

module.exports = {
  expo: {
    name: IS_DEV ? "Hybrid AI dev" : "Hybrid AI",
    slug: "frontend",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    androidStatusBar: {
      "backgroundColor": "#ffffff",
      "barStyle": "dark-content" // 또는 "dark-content"
    },
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.teamcruise.hybridai",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.teamcruise.hybridai",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "expo-font",
        {
          fonts: [
            "./assets/fonts/NotoSerif.ttf",
            "./assets/fonts/NotoSerifBold.ttf",
          ],
        },
      ],
    ],
  },
};
