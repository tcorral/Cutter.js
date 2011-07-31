# Cutter.js
Cutter.js is a class to truncate HTML code to limit its length, by words number, without losing the markup.

## Description

Cutter solves the problem when its needed to cut some content by a number of words but its mandatory no lose any markup.
Cutter cuts the content to the number of requested words and if needed puts a link to open the full content again.

### Some benefits:

*   No markup is lost.
*   Framework agnostic.
*   The content can be written without take care about the full content.
*   Not needed to have two different contents.
*   Crossbrowsing
    * Tested on:
        * IE >= 6
        * Firefox >= 3
        * Safari >= 4
        * Google Chrome >= 4
        * Opera >= 9.5
*   Only 1.4kb when Gzipped.

[API documentation](https://github.com/tcorral/Cutter.js/examples_and_documents/jsdoc/index.html)

[Examples](https://github.com/tcorral/Cutter.js/examples_and_documents/index.html) to see for yourself!

## Usage

### Before using it:
Insert in your code:

	<script type="text/javascript" src="/path/to/your/js/libs/Cutter.js"></script>

### Simple execution:

	Cutter.run(oApplyTo, oTarget, nWords, [oTexts, oClasses]);

####Mandatory

  >  **oAplyTo**: The element where the cutter will cut the content

  >  **oTarget**: The element where the content will be attached after cut it.

  >  **nWords**: Number of words to cut the content.

####Optional

  >  **oTexts**: The texts config object with the text that will be showed if the link, to open the full content,is needed

  >>    oTexts by default: { more: "View more"}.

  >  **oClasses**: The style config object with the class to style the link if needed.

  >>    oClasses by default: { more: "more"}.

*Tip: oTarget Could be the same oApplyTo element if we want to replace the full content with the cut content*

*Tip: If you only need to change the style you must put "undefined" where oTexts must be placed.*

## Documentation

[API documentation](https://github.com/tcorral/Cutter.js/examples_and_documents/jsdoc/index.html)

[Examples](https://github.com/tcorral/Cutter.js/examples_and_documents/index.html) to see for yourself!

## License

Cutter.js is licensed under the MIT license.