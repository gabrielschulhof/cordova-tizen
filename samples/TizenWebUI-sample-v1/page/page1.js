/*******************************************************************************
* This file was generated by Tizen Web UI Builder.
* User should hand edit this file.
********************************************************************************/


function setupBatteryButtonTitle () {
	
	console.log("page1, setupBatteryButtonTitle" + gAppBatteryValue + ", "+ gAppBatteryLowValue + ", "+ gAppBatteryCriticalValue  + ", "+ gAppPowerPlugged);

	var levelStr = "Battery Level";
	
	console.log 

	if (gAppBatteryValue < gAppBatteryLowValue) {
		if (gAppBatteryValue < gAppBatteryCriticalValue) {
			levelStr = "Battery Critical";
		}
		else {
			levelStr = "Battery Low";
		}
	}
	gAppBatteryLevelStr = levelStr + " = " + gAppBatteryValue + "%, Status: " + ((gAppPowerPlugged) ? "Plugged" : "Unplugged");
	document.getElementById('button2').innerHTML = gAppBatteryLevelStr;
	
	console.log ("document.getElementById('button2').innerHTML = " + document.getElementById('button2').innerHTML);
}


/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.button1_ontap = function(event) {
	pageManager.changePage("page2");
};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.button2_ontap = function(event) {
	window.addEventListener("batterystatus", function (info) {

		gAppBatteryValue = info.level;
		gAppPowerPlugged = info.isPlugged;
		
		setupBatteryButtonTitle();
		}, false);

	window.addEventListener("batterylow", function (info) {

		gAppBatteryValue = info.level;
		gAppPowerPlugged = info.isPlugged;
		gAppBatteryLowValue=info.level;
		
		setupBatteryButtonTitle();
	}, false);

	window.addEventListener("batterycritical", function (info) {

		gAppBatteryValue = info.level;
		gAppPowerPlugged = info.isPlugged;
		gAppBatteryCriticalValue = info.level;
		
		setupBatteryButtonTitle();
	}, false);
};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpagecreate = function(event) {
	console.log("_page1_page.prototype.onpagecreate");
};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpagebeforecreate = function(event) {
	console.log("_page1_page.prototype.onpagebeforecreate");

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpagebeforeshow = function(event) {
	console.log("_page1_page.prototype.onpagebeforeshow");

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpageshow = function(event) {
	console.log("_page1_page.prototype.onpageshow");
	
	setupBatteryButtonTitle();
};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpageinit = function(event) {
	console.log("_page1_page.prototype.onpageinit");
	

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpagebeforehide = function(event) {
	console.log("_page1_page.prototype.onpagebeforehide");

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpagehide = function(event) {
	console.log("_page1_page.prototype.onpagehide");

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onpageremove = function(event) {
	console.log("_page1_page.prototype.onpageremove");

};

/**
 * @param {Object} event
 * @base _page1_page
 * @returns {Boolean}
*/
_page1_page.prototype.onupdatelayout = function(event) {
	console.log("_page1_page.prototype.onupdatelayout");

};




