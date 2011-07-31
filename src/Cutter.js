/**
 * CutterClasses is the config singleton for classes used in Cutter
 * @author Tomas Corral Casas
 * @version 1.1
 * @type Object
 */
var CutterClasses = function()
{
    this.more = "more";
};
/**
 * CutterTexts is the config singleton for texts used in Cutter
 * @author Tomas Corral Casas
 * @version 1.0
 * @type Object
 */
var CutterTexts = function()
{
    this.more =  "View more";
};
/**
 * Cutter is a class that allows HTML code to cut a number of words contained in the nodes, keeping intact the HTML markup.
 * @author Tomas Corral Casas
 * @version 1.0
 * @class Cutter
 * @constructor
 * @type Object
 */
var Cutter = function()
{
    /**
     * oApplyTo is the Dom object where we want to use the cutter.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oApplyTo = null;
    /**
     * oBackupApplyTo is the clone from Dom object to get it when showing the content.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oBackupApplyTo = null;
    /**
     * oTarget is the Dom object where to put the cutted code
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oTarget = null;
    /**
     * oClasses is the config singleton for classes used in Cutter
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oClasses = new CutterClasses();
    /**
     * oTexts is the config singleton for texts used in Cutter
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oTexts = new CutterTexts();
    /**
     * nWords is the number of words to Cut
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Number
     */
    this.nWords = 0;
    /**
     * nWordsCounter is the counter of words when finding them in code
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Number
     */
    this.nWordsCounter = 0;
    /**
     * oViewMore is a reference to the "see more" link.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oViewMore = null;
    /**
     * oSerialized is the JSON object where Cutter serializes all the DOM objects inside the oApplyTo Dom element
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oSerialized = {};
    /**
     * oDocumentFragment is the DocumentFragment where the Dom elements are inserted before insert on Target
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Object
     */
    this.oDocumentFragment = document.createDocumentFragment();
	/**
	 * bTest is a property to now if you want to test the Cutter class
	 * This is used to change the type of id for each element.
     * false by default.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Boolean
	 */
    this.bTest = false;
    /**
     * nIdTest is the property for testing that will save the order for id.
     * 0 by default.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Number
     */
    this.nIdTest = 0;
	/**
	 * bNeedViewMore is a property that will check it it's necessary to add the link to view more or not
	 * It checks if its necessary if for some reason the content is cutted.
	 * false by default.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Boolean
	 */
	this.bNeedViewMore = false;
	/**
	 * bNotViewMore is a property that could be setted by the user to add or not the link to view more content if needed.
	 * false by default.
     * @member Cutter.prototype
     * @author Tomas Corral Casas
     * @type Boolean
	 */
	this.bNotViewMore = false;
};
/**
 * applyTo is the method that sets the Dom object where to apply the cutter
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oApplyTo This is the Dom element
 * @return the instance of the Cutter
 * @type Object
 */
Cutter.prototype.applyTo = function(oApplyTo)
{
    if(!oApplyTo)
    {
    	return this;
    }
    this.oApplyTo = oApplyTo;
    this.oBackupApplyTo = oApplyTo.cloneNode(true);
    return this;
};
/**
 * setTarget is the method that sets the Dom object where to put the cutted code
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oTarget This is the Dom element
 * @return the instance of the Cutter
 * @type Object
 */
Cutter.prototype.setTarget = function(oTarget)
{
    if(!oTarget)
    {
    	return this;
    }
    this.oTarget = oTarget;
    return this;
};
/**
 * setClasses is the method that sets the config singleton of Classes used in Cutter
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oClasses This is the singleton config
 * @return the instance of the Cutter
 * @type Object
 */
Cutter.prototype.setClasses = function(oClasses)
{
    if(!oClasses)
    {
    	return this;
    }
    this.oClasses = oClasses;
    return this;
};
/**
 * setTexts is the method that sets the config singleton of Texts used in Cutter
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oTexts This is the singleton config
 * @return the instance of the Cutter
 * @type Object
 */
Cutter.prototype.setTexts = function(oTexts)
{
    if(!oTexts)
    {
    	return this;
    }
    this.oTexts = oTexts;
    return this;
};
/**
 * setWords is the method used to set the max number of words before cut the code.
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {number} nWords This is the number of words to see.
 * @return the instance of the Cutter
 * @type Object
 */
Cutter.prototype.setWords = function(nWords)
{
    if(!nWords)
    {
    	return this;
    }
    this.nWords = nWords - 1;
    return this;
};
/**
 * _trim is an utilities method used to keep out all the spaces before or after the sentence
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {string} sString This is the text to be trimmed
 * @private
 * @return the trimmed string
 * @type String
 */
Cutter.prototype._trim = function(sString)
{
    return sString.replace(/^\s+/g, '').replace(/\s+$/g, '');
};
/**
 * _countWords is an utilities method used to count the words in a String
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {string} sText The text where to know how many words are.
 * @private
 * @return the number of words in the string
 * @type Number
 */
Cutter.prototype._countWords = function(sText)
{
    return this._trim(sText).split(" ").length;
};
/**
 * _getOnlyNumberOfWords is an utilities method used to get a number of words from the string
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {string} sString The text from which to extract the words
 * @param  {number} nWords The number of words to get
 * @private
 * @return the number of words in the string
 * @type Number
 */
Cutter.prototype._getOnlyNumberOfWords = function(sString, nWords)
{
    return this._trim(sString).split(" ").splice(0, nWords).join(" ");
};
/**
 * createViewMore is the method that creates the link to see all the content again
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @private
 */
Cutter.prototype.createViewMore = function()
{
	var oLink = document.createElement("a");
	oLink.className = this.oClasses.more;
	oLink.title = this.oTexts.more;
	oLink.innerHTML = this.oTexts.more;
	this.oViewMore = oLink;
};
/**
 * _getFirstElementOfObject is an utilities method used to get the first element in a JSON object
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oObject The JSON object from which to obtain the first element
 * @private
 * @return the first element in the JSON object
 * @type Object
 */
Cutter.prototype._getFirstElementOfObject = function(oObject)
{
    var oFirstElement = undefined;
    for (var sKey in oObject)
    {
        if (oObject.hasOwnProperty(sKey))
        {
            oFirstElement = oObject[sKey];
            break;
        }
    }
    return oFirstElement;
};
/**
 * deserializeObject is an utilities method used to deserialize a JSON object in a Dom element
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oSerialized The JSON object from which to obtain the Dom element information
 * @param  {object} oParent The Dom element where to add the new Dom element
 * @private
 */
Cutter.prototype.deserializeObject = function(oSerialized, oParent)
{
    var oDom = undefined;
    if (oSerialized.nodeType == 1)
    {
        oDom = document.createElement(oSerialized.tagName);
        if (typeof oSerialized.attributes != "undefined")
        {
            if(typeof jQuery !== "undefined")
			{
				$(oDom).attr(oSerialized.attributes);
			}else
			{
				for(var sKey in oSerialized.attributes)
				{
					if(oSerialized.attributes.hasOwnProperty(sKey))
					{
						oDom.setAttribute(sKey, oSerialized.attributes[sKey]);
					}
				}
			}
        }
        oParent.appendChild(oDom);
    }
    else
        if (oSerialized.nodeType == 3)
        {
            if (typeof oSerialized.textContent != "undefined")
            {
                oDom = document.createTextNode(oSerialized.textContent);
            }
            else
            {
                if (oSerialized.data)
                {
                    oDom = document.createTextNode(oSerialized.data);
                }
                else
                {
                    oDom = document.createTextNode(oSerialized.innerText);
                }
            }

            oParent.appendChild(oDom);
        }
    if (typeof oSerialized.childNodes != "undefined")
    {
        this.loopOnDeserialize(oSerialized.childNodes, oDom);
    }
};
/**
 * loopOnDeserialize is an utilities method used to loop over all the serialized elements
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oSerializedElements The JSON object on which to run the loop
 * @private
 */
Cutter.prototype.loopOnDeserialize = function(oSerializedElements, oParent)
{
    for (var sKey in oSerializedElements)
    {
        if (oSerializedElements.hasOwnProperty(sKey))
        {
            this.deserializeObject(oSerializedElements[sKey], oParent);
        }
    }
};
/**
 * deserializeSerializedObject is an utilities method used to deserialize all the Dom elements that where serialized and is where the cut is applied.
 * This method is the core of the class.
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oSerialized The JSON object to deserialize
 * @param  {object} oParent The DOM object where to put the new finished code.
 * @private
 */
Cutter.prototype.deserializeSerializedObject = function(oSerialized, oParent)
{
    var bLoopOnChilds = false;
    if (typeof oSerialized == "undefined")
    {
        oSerialized = this._getFirstElementOfObject(this.oSerialized);
        this.oDocumentFragment = document.createDocumentFragment();
        bLoopOnChilds = true;
    }
    if (typeof oParent == "undefined")
    {
     	var oLayer = document.createElement("div");
		this.oDocumentFragment.appendChild(oLayer);
	    oParent = oLayer;
    }

    this.deserializeObject(oSerialized, oParent);

    if (typeof oSerialized.childNodes != "undefined")
    {
        this.loopOnDeserialize(oSerialized.childNodes, oParent);
    }
};
/**
 * serializeDomObject is an utilities method used to serialize all the Dom elements in a JSON object
 * This method is the brain of the class.
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @param  {object} oDom The Dom element to serialize
 * @param  {object} oSerializeObject The JSON object where to serialize the Dom element
 * @private
 */
Cutter.prototype.serializeDomObject = function(oDom, oSerializeObject)
{
   	var sId = Math.random() * 15412457562;
   	if(this.bTest)
   	{
		sId = "__" + (this.nIdTest++) + "__";
   	}
    if (this.nWordsCounter < this.nWords)
    {
        var oSerialized = {};
        oSerialized.nodeType = oDom.nodeType;
        if (typeof oDom.tagName != "undefined")
        {
            oSerialized.tagName = oDom.tagName.toLowerCase();
        }
        var aAttributes = oDom.attributes;
        if (aAttributes)
        {
            oSerialized.attributes = {};
            var oAttribute = undefined;

            for (var nAttribute = 0, nLenAttributes = aAttributes.length; nAttribute < nLenAttributes; nAttribute++)
            {
				oAttribute = aAttributes[nAttribute];
				if(oAttribute.nodeValue)
				{
					oSerialized.attributes[oAttribute.name] = oAttribute.value;
				}
            }
        }
        if (oSerialized.nodeType == 3)
        {
            var nLastWordsCounter = this.nWordsCounter;
            if (typeof oDom.textContent != "undefined")
            {
                this.nWordsCounter += this._countWords(this._trim(oDom.textContent));
            }
            else
            {
                if (oDom.data)
                {
                    this.nWordsCounter += this._countWords(this._trim(oDom.data));
                }
                else
                {
                    this.nWordsCounter += this._countWords(this._trim(oDom.innerText));
                }

            }


            if (this.nWordsCounter < this.nWords)
            {
                if (typeof oDom.textContent != "undefined")
                {
                    oSerialized.textContent = oDom.textContent;
                }
                else
                {
                    if (oDom.data)
                    {
                        oSerialized.innerText = oDom.data;
                    }
                    else
                    {
                        oSerialized.innerText = oDom.innerText;
                    }
                }

            }
            else
			{
				this.bNeedViewMore = true;
				if (nLastWordsCounter < this.nWords && this.nWordsCounter > this.nWords)
                {
                    if (typeof oDom.textContent != "undefined")
                    {
                        oSerialized.textContent = this._getOnlyNumberOfWords(oDom.textContent, (this.nWords - nLastWordsCounter));
                    }
                    else
                    {
                        if (oDom.data)
                        {
                            oSerialized.innerText = this._getOnlyNumberOfWords(oDom.data, (this.nWords - nLastWordsCounter));
                        }
                        else
                        {
                            oSerialized.innerText = this._getOnlyNumberOfWords(oDom.innerText, (this.nWords - nLastWordsCounter));
                        }
                    }

                }
                else
                {
					if (document.body.textContent)
                    {
                        oSerialized.textContent = "";
                    }
                    else
                    {
                        oSerialized.innerText = "";
                    }
                }
			}

        }
        if (oDom.hasChildNodes())
        {
            oSerialized.childNodes = {};
            for (var nChild = 0, nLenChilds = oDom.childNodes.length; nChild < nLenChilds; nChild++)
            {
                this.serializeDomObject(oDom.childNodes[nChild], oSerialized.childNodes);
            }
        }

        if (typeof oSerializeObject == "undefined")
        {
            this.oSerialized[sId] = oSerialized;
        }
        else
        {
            oSerializeObject[sId] = oSerialized;
        }
    }
};
Cutter.prototype.addEvent = function(oElement, sType, fpCallback)
{
	if(oElement.addEventListener)
	{
		oElement.addEventListener(sType, fpCallback, false);
	}
	else if(oElement.attachEvent)
	{
		oElement.attachEvent("on" + sType, fpCallback);
	}
};
/**
 * setBehaviour is the method that applies the behaviour to the "see more" link to get the full content again when makink click on it
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @private
 */
Cutter.prototype.setBehaviour = function()
{
    var self = this;
    this.addEvent(this.oViewMore, "click", function()
    {
    	self.showAll();
    });
};
/**
 * showAll is the method that put the initial content to the target Dom element
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 * @private
 */
Cutter.prototype.showAll = function()
{
    var oTarget = this.oTarget;
    var oParent = oTarget.parentNode;
    oParent.insertBefore(this.oBackupApplyTo, oTarget);
    oParent.removeChild(oTarget);
};
/**
 * init is the method that makes all the work.
 * Serialize the Dom.
 * Deserialize the JSON object to Dom elements only with the words that were wanted
 * Remove the firstChild in oDocumentFragment because this node is the oApplyTo content.
 * Clean the content on oTarget.
 * Create the "see more" link
 * Append the "see more" link to the oDocumentFragment.
 * Insert the oDocumentFragment content in the oTarget element
 * At least the behaviour is applied to the link to make possible to get the original content before the cut.
 * @member Cutter.prototype
 * @author Tomas Corral Casas
 */
Cutter.prototype.init = function()
{
    this.serializeDomObject(this.oApplyTo);
    this.deserializeSerializedObject();
	var oElement = this.oDocumentFragment.childNodes[0];
    oElement.removeChild(this.oDocumentFragment.childNodes[0].childNodes[0]);

    this.oTarget.innerHTML = "";
    this.createViewMore();
	var oFinalContent = this.oDocumentFragment.childNodes[0].childNodes[this.oDocumentFragment.childNodes[0].childNodes.length-1];
	if(oFinalContent.nodeType !== 3)
	{
		oFinalContent.appendChild(document.createTextNode("..."));
	}

	if(this.bNeedViewMore && !this.bNotViewMore)
	{
		oElement.appendChild(this.oViewMore);
    	this.setBehaviour();
	}
	this.oTarget.appendChild(this.oDocumentFragment);
};
Cutter.run = function(oApplyTo, oTarget, nWords, oTexts, oClasses)
{
	var oCutter = new Cutter();
		oCutter
			.applyTo(oApplyTo)
			.setTarget(oTarget)
			.setWords(nWords);
		if(typeof oTexts !== "undefined")
		{
			oCutter.setTexts(oTexts);
		}
		if(typeof oClasses !== "undefined")
		{
			oCutter.setClasses(oClasses);
		}
		oCutter.init();
}
