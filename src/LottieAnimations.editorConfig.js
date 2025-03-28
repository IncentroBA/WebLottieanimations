/**
 * @typedef Property
 * @type {object}
 * @property {string} key
 * @property {string} caption
 * @property {string} description
 * @property {string[]} objectHeaders
 * @property {ObjectProperties[]} objects
 * @property {Properties[]} properties
 */

/**
 * @typedef ObjectProperties
 * @type {object}
 * @property {PropertyGroup[]} properties
 * @property {string[]} captions
 */

/**
 * @typedef PropertyGroup
 * @type {object}
 * @property {string} caption
 * @property {PropertyGroup[]} propertyGroups
 * @property {Property[]} properties
 */

/**
 * @typedef Properties
 * @type {PropertyGroup}
 */

/**
 * @typedef Problem
 * @type {object}
 * @property {string} property
 * @property {("error" | "warning" | "deprecation")} severity
 * @property {string} message
 * @property {string} studioMessage
 * @property {string} url
 * @property {string} studioUrl
 */

/**
 * @param {object} values
 * @param {Properties} defaultProperties
 * @param {("web"|"desktop")} target
 * @returns {Properties}
 */
export function getProperties(values, defaultProperties, target) {
    // Do the values manipulation here to control the visibility of properties in Studio and Studio Pro conditionally.
    /* Example
    if (values.myProperty === "custom") {
        delete defaultProperties.properties.myOtherProperty;
    }
    */
    return defaultProperties;
}

// /**
//  * @param {Object} values
//  * @returns {Problem[]} returns a list of problems.
//  */
// export function check(values) {
//    /** @type {Problem[]} */
//    const errors = [];
//    // Add errors to the above array to throw errors in Studio and Studio Pro.
//    /* Example
//    if (values.myProperty !== "custom") {
//        errors.push({
//            property: `myProperty`,
//            message: `The value of 'myProperty' is different of 'custom'.`,
//            url: "https://github.com/myrepo/mywidget"
//        });
//    }
//    */
//    return errors;
// }

// /**
//  * @param {object} values
//  * @param {boolean} isDarkMode
//  * @param {number[]} version
//  * @returns {object}
//  */
export function getPreview(isDarkMode) {
    return {
        type: "Container",
        backgroundColor: isDarkMode ? "#575757" : "#FFFFFF",
        borderRadius: 4,
        padding: 4,
        children: [
            {
                type: "RowLayout",
                columnSize: "grow",
                padding: 10,
                children: [
                    {
                        type: "Image",
                        document: decodeURIComponent(
                            "%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='30' viewBox='0 0 150 30'%3E%3Cpath d='M117.4,10.68h-3.55v12.49h3.55V10.68Zm0-4.12h-3.55v2.76h3.55v-2.76Zm-77.48,0h-3.71V23.17h11.34v-3.18h-7.63V6.57Zm14.96,3.08c-3.95,0-7.08,3.05-7.08,6.89s3.13,6.9,7.08,6.9,7.11-3.05,7.11-6.9-3.13-6.9-7.11-6.9Zm0,10.5c-1.99,0-3.47-1.51-3.47-3.62s1.48-3.6,3.47-3.6,3.47,1.54,3.47,3.61-1.48,3.62-3.47,3.62Zm22.01,.21c-.64,0-1.19-.37-1.19-1.51v-5.3h3.39v-2.86h-3.39v-3.6h-3.55v3.6h-4.67v-3.6h-3.55v3.6h-1.94v2.86h1.94v5.36c0,3,1.43,4.54,4.08,4.54,1.2,0,2.37-.35,3.37-1l-1-2.62c-.5,.34-1.09,.53-1.7,.56-.64,0-1.19-.37-1.19-1.51v-5.31h4.67v5.36c0,3,1.43,4.54,4.08,4.54,1.2,0,2.37-.35,3.37-1l-1-2.62c-.5,.34-1.09,.53-1.7,.55h0Zm22.46-4.75c-.54-3.73-3.79-6.36-7.36-5.84-1.81,.25-3.45,1.22-4.54,2.69-1.09,1.47-1.55,3.32-1.26,5.13,.63,4.33,4.35,6.34,8.18,5.78,1.73-.24,3.36-.99,4.67-2.15l-1.68-2.33c-.96,.83-2.14,1.36-3.39,1.54-1.73,.25-3.35-.4-4.04-2.15l9.52-1.39c-.01-.42-.05-.85-.1-1.27h0Zm-9.81,.33c.1-1.7,1.25-3,2.77-3.22,1.6-.25,3.13,.73,3.58,2.28l-6.36,.93Zm48.38-.33c-.54-3.73-3.79-6.36-7.36-5.84-2.77,.38-5.03,2.41-5.69,5.12-.22,.88-.25,1.79-.11,2.69,.63,4.33,4.35,6.34,8.18,5.78,1.73-.24,3.36-.99,4.67-2.15l-1.68-2.33c-.96,.83-2.14,1.36-3.39,1.54-1.73,.25-3.35-.4-4.04-2.15l9.53-1.39c-.01-.42-.05-.85-.1-1.27h0Zm-9.81,.33c.1-1.7,1.25-3,2.78-3.22,1.6-.25,3.13,.73,3.57,2.28l-6.35,.93Zm-4.87-9.36h-3.55V23.17h3.55V6.57Zm22.04,8.3c-1.22-.27-2.33-.5-2.33-1.25,0-.56,.77-.93,1.59-.93,1.28,.02,2.55,.34,3.69,.93l1.19-2.65c-1.48-.91-3.2-1.37-4.93-1.33-2.49,0-5.14,1.43-5.14,4.14,0,2.55,2.15,3.42,4.77,4.11,1.14,.32,2.28,.5,2.28,1.3s-1.35,1.11-2.18,1.11c-1.5,.03-2.96-.47-4.14-1.41l-1.27,2.73c.74,.69,2.57,1.81,5.41,1.81,2.47,0,5.78-1.09,5.78-4.35,0-2.71-2.46-3.69-4.72-4.22h0Zm-60.7-4.19h-3.55v12.49h3.55V10.68Zm0-4.12h-3.55v2.76h3.55v-2.76Zm16.29,16.6h3.71v-6.78h6.28v-3.15h-6.28v-3.49h7.63v-3.18h-11.34V23.17Z'/%3E%3Cpath d='M21.86,.37H7.41C3.32,.37,0,3.68,0,7.77v14.46c0,4.09,3.32,7.4,7.41,7.4h14.46c4.09,0,7.4-3.32,7.4-7.4V7.77c0-4.09-3.32-7.41-7.4-7.41Z' fill='%2300ddb3'/%3E%3Cpath d='M22.24,6.92c-5.04,0-6.9,3.6-8.41,6.49l-.98,1.85c-1.59,3.06-2.78,4.93-5.84,4.93-.38,0-.75,.15-1.02,.42-.56,.56-.56,1.48,0,2.05h0c.27,.27,.64,.42,1.02,.42,5.04,0,6.91-3.6,8.41-6.49l.98-1.85c1.59-3.06,2.78-4.93,5.84-4.93,.38,0,.75-.15,1.02-.42,.27-.27,.42-.64,.42-1.02,0-.8-.65-1.45-1.45-1.45h0Z' fill='%23fff'/%3E%3C/svg%3E"
                        ),
                        width: 150,
                        height: 30
                    }
                ]
            }
        ]
    };
}

// /**
//  * @param {Object} values
//  * @param {("web"|"desktop")} platform
//  * @returns {string}
//  */
// export function getCustomCaption(values, platform) {
//     return "LottieAnimations";
// }
