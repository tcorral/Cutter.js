# Cutter.js
Cutter.js is a library used for truncating HTML code to limit its length, by word number, without losing the markup.

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
*   Only 1.5kb when [Gzipped](http://tcorral.github.com/Cutter.js/versions/cutter.js.gz).

(Links will only work if you clone the repo.)

[API documentation](https://github.com/tcorral/Cutter.js/examples_and_documents/jsdoc/index.html)

[Examples](https://github.com/tcorral/Cutter.js/examples_and_documents/index.html) to see for yourself!

## Usage

### Before using it:
Insert in your code:

	<script type="text/javascript" src="/path/to/your/js/libs/Cutter.js"></script>

### Simple execution:

	Cutter.run(oApplyTo, oTarget, nWords, [configuration]);

####Mandatory

  >  **oAplyTo**: The element that will have its text truncated

  >  **oTarget**: The element where the truncated content will be placed.

  >  **nWords**: Maximum word count. Any additional word will be truncated.

####Optional

  >  **configuration**: This object contains both the text that will be displayed in the "view more" link and its style.

  >>    configuration.viewMoreText: The text that will be displayed in the "view more" link. The default is "View more"

  >>    configuration.class: The class that will be applied to the "View more" link. The default is "more"

*Tip: oTarget Could be the same oApplyTo element if we want to replace the full content with the cut content*

## Example

cutElement = document.getElementById("test");
Cutter.run(cutElement, cutElement, 30, {viewMoreText:"Expand", class:"expandLink"});

*On the example above, the element with id "test" will display a maximum of 30 words and a link entitled "Expand". The "expandLink" class will be applied to this link. The remaining words that were previously truncated will show up in the element when the link is clicked.

## License

Cutter.js is licensed under the MIT license.
