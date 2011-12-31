/*------------------------------------*/
// USER AGENT DEVICE VARIABLES: GETS USERS CURRENT DEVICE
/*------------------------------------*/
ymConfig.agent = navigator.userAgent.toLowerCase();
// MATCH AGENT
ymConfig.agent_ios = ymConfig.agent.match(/(iphone|ipod|ipad)/);
ymConfig.agent_android = ymConfig.agent.match(/(android)/);
ymConfig.agent_winphone = ymConfig.agent.match(/(iemobile)/);
/*------------------------------------*/
// ON IOS: IF APP LINK DOESN'T WORK, LOAD URL TO APP
/*------------------------------------*/
function applink(fail){
    return function(){
        var clickedAt = +new Date;
        // During tests on 3g/3gs this timeout fires immediately if less than 500ms.
        setTimeout(function(){
            // To avoid failing on return to MobileSafari, ensure freshness!
            if (+new Date - clickedAt < 2000){
                window.location = fail;
            }
        }, 500);    
    };
}
/*------------------------------------*/
// ZOOM TO LOCATION: ZOOMS MAP TO LOCATION POINT
/*------------------------------------*/
function zoomToLocation(x, y){
	var pt = esri.geometry.geographicToWebMercator(new esri.geometry.Point(x, y));
	map.centerAndZoom(pt, 7);
}
/*------------------------------------*/
// GEOLOCATE FUNCTION: SETS MAP LOCATION TO USERS LOCATION
/*------------------------------------*/
function geoLocateMap(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	var IPAccuracy = position.coords.accuracy;
	zoomToLocation(longitude,latitude);
}