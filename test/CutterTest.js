function cutterSetUp()
{
	this.oCutter = new Cutter();
}
function cutterTearDown()
{
	this.oCutter = null;
}
TestCase("CutterConstructorTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should return null for the oApply property by default": function()
	{
		assertNull(this.oCutter.oApplyTo);
	},
	"test should return null for the oBackupApplyTo property by default": function()
	{
		assertNull(this.oCutter.oBackupApplyTo);
	},
	"test should return null for the oTarget property by default": function()
	{
		assertNull(this.oCutter.oTarget);
	},
	"test should return CutterClasses instance for oClasses by default": function()
	{
		assertEquals("more", this.oCutter.oClasses);
	},
	"test should return CutterTexts instance for oTexts by default": function()
	{
		assertEquals("View more", this.oCutter.oTexts);
	},
	"test should return 0 for nWords by default": function()
	{
		assertNumber(this.oCutter.nWords);
		assertEquals(0, this.oCutter.nWords);
	},
	"test should return 0 for nWordsCounter by default": function()
	{
		assertNumber(this.oCutter.nWordsCounter);
		assertEquals(0, this.oCutter.nWordsCounter);
	},
	"test should return null for the oViewMore property by default": function()
	{
		assertNull(this.oCutter.oViewMore);
	},
	"test should return false for the bNeedViewMore property by default": function()
	{
		assertFalse(this.oCutter.bNeedViewMore);
	},
	"test should return false for the bNotViewMore property by default": function()
	{
		assertFalse(this.oCutter.bNotViewMore);
	},
	"test should return empty object for the oSerialized property by default": function()
	{
		assertObject(this.oCutter.oSerialized);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterApplyToTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should not change the oApplyTo object if we don't provide nothing": function()
	{
		var oObject = {};
		this.oCutter.oApplyTo = oObject;

		this.oCutter.applyTo();

		assertSame(oObject, this.oCutter.oApplyTo);
	},
	"test should not change the oApplyTo object if we provide null": function()
	{
		var oObject = {};
		this.oCutter.oApplyTo = oObject;

		this.oCutter.applyTo(null);

		assertSame(oObject, this.oCutter.oApplyTo);
	},
	"test should not change the oBackupApplyTo object if we don't provide nothing": function()
	{
		var oObject = {};
		this.oCutter.oBackupApplyTo = oObject;

		this.oCutter.applyTo();

		assertSame(oObject, this.oCutter.oBackupApplyTo);
	},
	"test should not change the oBackupApplyTo object if we provide null": function()
	{
		var oObject = {};
		this.oCutter.oBackupApplyTo = oObject;

		this.oCutter.applyTo(null);

		assertSame(oObject, this.oCutter.oBackupApplyTo);
	},
	"test should return the Cutter instance if we don't provide anything": function()
	{
		var oResult = null;

		oResult = this.oCutter.applyTo();

		assertInstanceOf(Cutter, oResult);
	},
	"test should return the Cutter instance if we provide null": function()
	{
		var oResult = null;

		oResult = this.oCutter.applyTo(null);

		assertInstanceOf(Cutter, oResult);
	},
	"test should change the oApplyTo object if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		this.oCutter.oApplyTo = oObject;

		this.oCutter.applyTo(oObject2);

		assertSame(oObject2, this.oCutter.oApplyTo);
	},
	"test should change the oBackupApplyTo object if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		this.oCutter.oBackupApplyTo = oObject;

		this.oCutter.applyTo(oObject2);

		assertNotSame(oObject, this.oCutter.oBackupApplyTo);
	},
	"test should return the Cutter instance if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		var oResult = null;

		oResult = this.oCutter.applyTo(oObject2);

		assertInstanceOf(Cutter, oResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterSetTargetTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should not change the oTarget object if we don't provide nothing": function()
	{
		var oObject = {};
		this.oCutter.oTarget = oObject;

		this.oCutter.setTarget();

		assertSame(oObject, this.oCutter.oTarget);
	},
	"test should not change the oTarget object if we provide null": function()
	{
		var oObject = {};
		this.oCutter.oTarget = oObject;

		this.oCutter.setTarget(null);

		assertSame(oObject, this.oCutter.oTarget);
	},
	"test should return the Cutter instance if we don't provide nothing": function()
	{
		var oResult = null;

		oResult = this.oCutter.setTarget();

		assertInstanceOf(Cutter, oResult);
	},
	"test should return the Cutter instance if we provide null": function()
	{
		var oResult = null;

		oResult = this.oCutter.setTarget(null);

		assertInstanceOf(Cutter, oResult);
	},
	"test should change the oTarget object if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		this.oCutter.oTarget = oObject;

		this.oCutter.setTarget(oObject2);

		assertSame(oObject2, this.oCutter.oTarget);
	},
	"test should return the Cutter instance if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 = {};
		var oResult = null;

		oResult = this.oCutter.setTarget(oObject2);

		assertInstanceOf(Cutter, oResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterSetClassesTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should not change the oClasses object if we don't provide nothing": function()
	{
		var oObject = {};
		this.oCutter.oClasses = oObject;

		this.oCutter.setClasses();

		assertSame(oObject, this.oCutter.oClasses);
	},
	"test should not change the oClasses object if we provide null": function()
	{
		var oObject = {};
		this.oCutter.oClasses = oObject;

		this.oCutter.setClasses(null);

		assertSame(oObject, this.oCutter.oClasses);
	},
	"test should return the Cutter instance if we don't provide nothing": function()
	{
		var oResult = null;

		oResult = this.oCutter.setClasses();

		assertInstanceOf(Cutter, oResult);
	},
	"test should return the Cutter instance if we provide null": function()
	{
		var oResult = null;

		oResult = this.oCutter.setClasses(null);

		assertInstanceOf(Cutter, oResult);
	},
	"test should change the oTarget object if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		this.oCutter.oClasses = oObject;

		this.oCutter.setClasses(oObject2);

		assertSame(oObject2, this.oCutter.oClasses);
	},
	"test should return the Cutter instance if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 = {};
		var oResult = null;

		oResult = this.oCutter.setClasses(oObject2);

		assertInstanceOf(Cutter, oResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterSetTextsTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should not change the oTexts object if we don't provide nothing": function()
	{
		var oObject = {};
		this.oCutter.oTexts = oObject;

		this.oCutter.setText();

		assertSame(oObject, this.oCutter.oTexts);
	},
	"test should not change the oTexts object if we provide null": function()
	{
		var oObject = {};
		this.oCutter.oTexts = oObject;

		this.oCutter.setText(null);

		assertSame(oObject, this.oCutter.oTexts);
	},
	"test should return the Cutter instance if we don't provide nothing": function()
	{
		var oResult = null;

		oResult = this.oCutter.setText();

		assertInstanceOf(Cutter, oResult);
	},
	"test should return the Cutter instance if we provide null": function()
	{
		var oResult = null;

		oResult = this.oCutter.setText(null);

		assertInstanceOf(Cutter, oResult);
	},
	"test should change the oTexts object if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 =
		{
			cloneNode: function(){}
		};
		this.oCutter.oTexts = oObject;

		this.oCutter.setText(oObject2);

		assertSame(oObject2, this.oCutter.oTexts);
	},
	"test should return the Cutter instance if we provide a valid value": function()
	{
		var oObject = {};
		var oObject2 = {};
		var oResult = null;

		oResult = this.oCutter.setText(oObject2);

		assertInstanceOf(Cutter, oResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterSetWordsTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should not change the oTexts object if we don't provide nothing": function()
	{
		var nNumber = 100;
		this.oCutter.nWords = nNumber;

		this.oCutter.setWords();

		assertSame(nNumber, this.oCutter.nWords);
	},
	"test should not change the oTexts object if we provide null": function()
	{
		var nNumber = 100;
		this.oCutter.nWords = nNumber;

		this.oCutter.setWords(null);

		assertSame(nNumber, this.oCutter.nWords);
	},
	"test should return the Cutter instance if we don't provide nothing": function()
	{
		var oResult = null;

		oResult = this.oCutter.setWords();

		assertInstanceOf(Cutter, oResult);
	},
	"test should return the Cutter instance if we provide null": function()
	{
		var oResult = null;

		oResult = this.oCutter.setWords(null);

		assertInstanceOf(Cutter, oResult);
	},
	"test should change the oTexts object if we provide a valid value": function()
	{
		var nNumber = 100;
		var nNumber2 = 200;
		var nExpected = 199;
		this.oCutter.nWords = nNumber;

		this.oCutter.setWords(nNumber2);

		assertSame(nExpected, this.oCutter.nWords);
	},
	"test should return the Cutter instance if we provide a valid value": function()
	{
		var nNumber = 100;
		var nNumber2 = 200;
		var oResult = null;

		oResult = this.oCutter.setWords(nNumber2);

		assertInstanceOf(Cutter, oResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterTrimTest", sinon.testCase({
	setUp: cutterSetUp,
	"test should remove the trailing spaces before": function()
	{
		var sString = " pepe";
		var sExpected = "pepe";
		var sResult = '';

		sResult = this.oCutter.trim(sString);

		assertSame(sExpected, sResult);
	},
	"test should remove the trailing spaces after": function()
	{
		var sString = "pepe ";
		var sExpected = "pepe";
		var sResult = '';

		sResult = this.oCutter.trim(sString);

		assertSame(sExpected, sResult);
	},
	"test should remove the trailing spaces before and after": function()
	{
		var sString = " pepe ";
		var sExpected = "pepe";
		var sResult = '';

		sResult = this.oCutter.trim(sString);

		assertSame(sExpected, sResult);
	},
	tearDown: cutterTearDown
}));

TestCase("CutterCountWordsTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		sinon.spy(this.oCutter, "trim");
	},
	"test should call the trim method one time": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";

		this.oCutter.countWords(sString);

		assertTrue(this.oCutter.trim.calledOnce);
	},
	"test should return 12 for the number of words": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nExpected = 12;
		var nResult = 0;

		nResult = this.oCutter.countWords(sString);

		assertEquals(nExpected, nResult);
	},
	tearDown: function()
	{
		this.oCutter.trim.restore();
		cutterTearDown.call(this);
	}
}));

TestCase("CutterGetOnlyNumberOfWordsTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		sinon.spy(this.oCutter, "trim");
		sinon.spy(Array.prototype, "join");
		sinon.spy(Array.prototype, "splice");
		sinon.spy(String.prototype, "split");
	},
	"test should call the trim method method one time": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nWords = 8;

		this.oCutter.getOnlyNumberOfWords(sString, nWords);

		assertTrue(this.oCutter.trim.calledOnce);
	},
	"test should call the split String method one time": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nWords = 8;

		this.oCutter.getOnlyNumberOfWords(sString, nWords);

		assertTrue(String.prototype.split.calledOnce);
	},
	"test should call the join Array method one time": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nWords = 8;

		this.oCutter.getOnlyNumberOfWords(sString, nWords);

		assertTrue(Array.prototype.join.calledOnce);
	},
	"test should call the splice Array method one time": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nWords = 8;

		this.oCutter.getOnlyNumberOfWords(sString, nWords);

		assertTrue(Array.prototype.splice.calledOnce);
	},
	"test should return 'En un lugar de la mancha de cuyo' words": function()
	{
		var sString = " En un lugar de la mancha de cuyo nombre no quiero acordarme ";
		var nWords = 8;
		var sExpected = 'En un lugar de la mancha de cuyo';
		var sResult = '';

		sResult = this.oCutter.getOnlyNumberOfWords(sString, nWords);

		assertEquals(sExpected, sResult);
	},
	tearDown: function()
	{
		Array.prototype.splice.restore();
		Array.prototype.join.restore();
		String.prototype.split.restore();
		this.oCutter.trim.restore();
		cutterTearDown.call(this);
	}
}));

TestCase("CutterCreateViewMoreTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
	},
	"test should create a link object and it must be set to oViewMore": function()
	{
		this.oCutter.createViewMore();

		assertTagName("a", this.oCutter.oViewMore);
		assertClassName(this.oCutter.oClasses, this.oCutter.oViewMore);
		assertEquals(this.oCutter.oTexts, this.oCutter.oViewMore.innerHTML);
		assertEquals(this.oCutter.oTexts, this.oCutter.oViewMore.title);
	},
	tearDown: function()
	{
		cutterTearDown.call(this);
	}
}));

TestCase("CutterGetFirstElementOfObjectTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
	},
	"test should return 10 after checking this object { o: 10, p: 20}": function()
	{
		var oObject =
		{
			o: 10,
			p: 20
		};
		var oResult = null;

		oResult = this.oCutter.getFirstElementOfObject(oObject);

		assertEquals(oObject.o, oResult);
	},
	tearDown: function()
	{
		cutterTearDown.call(this);
	}
}));

TestCase("CutterSerializeDomObjectTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		this.oCutter.bTest = true;
		this.oCutter.nIdTest = 0;
		this.oCutter.nWords = 100;
		/*:DOC += <div id='test'>
		 			<p>
		 				Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		 				Pellentesque fermentum malesuada <strong>elit</strong> eu feugiat.
		 				Cras venenatis justo nec nisl imperdiet placerat.
		 				Mauris <em>convallis</em> orci non lectus accumsan lacinia.
		 				Praesent semper porta erat vel gravida. Maecenas varius,
		 				quam nec convallis pulvinar, turpis nunc tincidunt enim,
		 				eu dapibus leo erat et lorem. Pellentesque id tortor volutpat tortor tempor tempus.
		 				Praesent vehicula velit vitae tellus porttitor sit amet pellentesque lorem auctor.
		 				Morbi malesuada turpis vel mi vestibulum et sollicitudin mi suscipit.
		 				Nam pretium tempor elit, eu volutpat felis molestie ut. Donec id vulputate massa.
		 			</p>
				  </div>*/
	},
	"test should return the Dom object serialized in a JSON object": function()
	{
		var oExpected =
		{
			"__1__":
			{

				"nodeType":1,
				"tagName":"div",
				"attributes":
				{
					"id":"test"
				},
				"childNodes":
				{
					"__2__":
					{
						"nodeType":3,
						"textContent":"\u000a\u0009\u0009 \u0009\u0009\u0009"
					},
					"__3__":
					{
						"nodeType":1,
						"tagName":"p",
						"attributes":{},
						"childNodes":
						{
							"__4__":
							{
								"nodeType":3,
								"textContent":"\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Lorem ipsum dolor sit amet, consectetur adipiscing elit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Pellentesque fermentum malesuada "
							},
							"__5__":
							{
								"nodeType":1,
								"tagName":"strong",
								"attributes":{},
								"childNodes":
								{
									"__6__":
									{
										"nodeType":3,
										"textContent":"elit"
									}
								}
							},
							"__7__":
							{
								"nodeType":3,
								"textContent":" eu feugiat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Cras venenatis justo nec nisl imperdiet placerat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Mauris "
							},
							"__8__":
							{
								"nodeType":1,
								"tagName":"em",
								"attributes":{},
								"childNodes":
								{
									"__9__":
									{
										"nodeType":3,
										"textContent":"convallis"
									}
								}
							},
							"__10__":
							{
								"nodeType":3,
								"textContent":" orci non lectus accumsan lacinia.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent semper porta erat vel gravida. Maecenas varius,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009quam nec convallis pulvinar, turpis nunc tincidunt enim,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009eu dapibus leo erat et lorem. Pellentesque id tortor volutpat tortor tempor tempus.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent vehicula velit vitae tellus porttitor sit amet pellentesque lorem auctor.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Morbi malesuada turpis vel mi vestibulum et sollicitudin mi suscipit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Nam pretium tempor elit, eu volutpat felis molestie ut. Donec id vulputate massa.\u000a\u0009\u0009 \u0009\u0009\u0009"
							}
						}
					},
					"__11__":
					{
						"nodeType":3,
						"textContent":"\u000a\u0009\u0009\u0009\u0009  "
					}
				}
			}
		};
		this.oCutter.serializeDomObject(document.getElementById("test"));

		assertEquals(oExpected, this.oCutter.oSerialized);
	},
	tearDown: function()
	{
		this.oCutter.oSerialized = null;
		this.oCutter.bTest = false;
		this.oCutter.nIdTest = 0;
		cutterTearDown.call(this);
	}
}));

TestCase("CutterDeserializeSerializedObjectTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		this.oCutter.bTest = true;
		this.oCutter.nWords = 100;
		this.oCutter.nIdTest = 0;
		this.oCutter.oSerialized =
		{
			"__1__":
			{

				"nodeType":1,
				"tagName":"div",
				"attributes":
				{
					"id":"test"
				},
				"childNodes":
				{
					"__2__":
					{
						"nodeType":3,
						"textContent":"\u000a\u0009\u0009 \u0009\u0009\u0009"
					},
					"__3__":
					{
						"nodeType":1,
						"tagName":"p",
						"attributes":{},
						"childNodes":
						{
							"__4__":
							{
								"nodeType":3,
								"textContent":"\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Lorem ipsum dolor sit amet, consectetur adipiscing elit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Pellentesque fermentum malesuada "
							},
							"__5__":
							{
								"nodeType":1,
								"tagName":"strong",
								"attributes":{},
								"childNodes":
								{
									"__6__":
									{
										"nodeType":3,
										"textContent":"elit"
									}
								}
							},
							"__7__":
							{
								"nodeType":3,
								"textContent":" eu feugiat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Cras venenatis justo nec nisl imperdiet placerat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Mauris "
							},
							"__8__":
							{
								"nodeType":1,
								"tagName":"em",
								"attributes":{},
								"childNodes":
								{
									"__9__":
									{
										"nodeType":3,
										"textContent":"convallis"
									}
								}
							},
							"__10__":
							{
								"nodeType":3,
								"textContent":" orci non lectus accumsan lacinia.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent semper porta erat vel gravida. Maecenas varius,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009quam nec convallis pulvinar, turpis nunc tincidunt enim,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009eu dapibus leo erat et lorem. Pellentesque id tortor volutpat tortor tempor tempus.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent vehicula velit vitae tellus porttitor sit amet pellentesque lorem auctor.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Morbi malesuada turpis vel mi vestibulum et sollicitudin mi suscipit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Nam pretium tempor elit, eu volutpat felis molestie ut. Donec id vulputate massa.\u000a\u0009\u0009 \u0009\u0009\u0009"
							}
						}
					},
					"__11__":
					{
						"nodeType":3,
						"textContent":"\u000a\u0009\u0009\u0009\u0009  "
					}
				}
			}
		};
		this.sHTML = "\u000a\u0009\u0009 \u0009\u0009\u0009<p>\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Lorem ipsum dolor sit amet, consectetur adipiscing elit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Pellentesque fermentum malesuada <strong>elit</strong> eu feugiat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Cras venenatis justo nec nisl imperdiet placerat.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Mauris <em>convallis</em> orci non lectus accumsan lacinia.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent semper porta erat vel gravida. Maecenas varius,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009quam nec convallis pulvinar, turpis nunc tincidunt enim,\u000a\u0009\u0009 \u0009\u0009\u0009\u0009eu dapibus leo erat et lorem. Pellentesque id tortor volutpat tortor tempor tempus.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Praesent vehicula velit vitae tellus porttitor sit amet pellentesque lorem auctor.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Morbi malesuada turpis vel mi vestibulum et sollicitudin mi suscipit.\u000a\u0009\u0009 \u0009\u0009\u0009\u0009Nam pretium tempor elit, eu volutpat felis molestie ut. Donec id vulputate massa.\u000a\u0009\u0009 \u0009\u0009\u0009</p>\u000a\u0009\u0009\u0009\u0009  ";
	},
	"test should return the Dom object serialized in a JSON object": function()
	{
		this.oCutter.deserializeSerializedObject();

		document.body.appendChild(this.oCutter.oDocumentFragment);

		assertEquals(this.sHTML, document.getElementById("test").innerHTML);
	},
	tearDown: function()
	{
		this.oCutter.bTest = false;
		this.oCutter.nIdTest = 0;
		this.oCutter.oSerialized = null;
		cutterTearDown.call(this);
	}
}));

TestCase("CutterSetBehaviourTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		sinon.stub(this.oCutter, "addEvent");
	},
	"test ": function()
	{
		this.oCutter.setBehaviour();

		assertTrue(this.oCutter.addEvent.calledOnce);
	},
	tearDown: function()
	{
		this.oCutter.addEvent.restore();
		cutterTearDown.call(this);
	}
}));

TestCase("CutterShowAllTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		var self = this;
		this.fpInsertBefore = sinon.spy();
		this.fpRemoveChild = sinon.spy();
		this.oCutter.oTarget =
		{
			parentNode:
			{
				insertBefore: function()
				{
					self.fpInsertBefore();
				},
				removeChild: function()
				{
					self.fpRemoveChild();
				}
			}
		}
	},
	"test should call the insertBefore and removeChild on oTarget.parentNode": function()
	{
		this.oCutter.showAll();

		assertTrue(this.fpInsertBefore.calledOnce);
		assertTrue(this.fpRemoveChild.calledOnce);
	},
	tearDown: function()
	{
		cutterTearDown.call(this);
	}
}));

TestCase("CutterInitTest", sinon.testCase({
	setUp: function()
	{
		cutterSetUp.call(this);
		var self = this;
		this.fpRemoveChild = sinon.spy();
		this.fpAppendChild = sinon.spy();
		this.fpAppendChild2 = sinon.spy();
		this.fpAppendChild3 = sinon.spy();
		this.oCutter.oTarget =
		{
			innerHTML : 'test',
			appendChild: function()
			{
				self.fpAppendChild3();
			}
		};
		this.oCutter.oDocumentFragment =
		{
			childNodes:
			[
				{
					removeChild: function()
					{
						self.fpRemoveChild();
					},
					childNodes:
					[
						{
							appendChild: function()
							{
								self.fpAppendChild();
							}
						}
					],
					appendChild: function()
					{
						self.fpAppendChild2();
					}
				}
			]
		};
		sinon.stub(this.oCutter, "serializeDomObject");
		sinon.stub(this.oCutter, "createViewMore");
		sinon.stub(this.oCutter, "deserializeSerializedObject");
		sinon.stub(this.oCutter, "setBehaviour");
	},
	"test should call the serializeDomObject, createViewMore, deserializeSerializedObject on Cutter if bNeedViewMore is false": function()
	{
		this.oCutter.init();

		assertTrue(this.oCutter.serializeDomObject.calledOnce);
		assertTrue(this.oCutter.createViewMore.calledOnce);
		assertTrue(this.oCutter.deserializeSerializedObject.calledOnce);
	},
	"test should call the setBehaviour  if bNeedViewMore is true and bNotViewMore is false": function()
	{
		this.oCutter.bNeedViewMore = true;
		this.oCutter.bNotViewMore = false;

		this.oCutter.init();

		assertTrue(this.oCutter.setBehaviour.calledOnce);
	},
	tearDown: function()
	{
		this.oCutter.serializeDomObject.restore();
		this.oCutter.createViewMore.restore();
		this.oCutter.deserializeSerializedObject.restore();
		this.oCutter.setBehaviour.restore();
		cutterTearDown.call(this);
	}
}));
