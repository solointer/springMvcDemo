<%--
  Created by IntelliJ IDEA.
  User: 19731
  Date: 2016/4/15
  Time: 16:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Map</title>

    <link rel="stylesheet" href="http://js.arcgis.com/3.7/js/esri/css/esri.css">
    <script src="http://js.arcgis.com/3.7/"></script>

    <style>
        html, body, #map {
            height: 100%;
            width: 100%;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }
        #BasemapToggle {
            position: absolute;
            top: 20px;
            right: 20px;
            z-index: 50;
        }
        #HomeButton {
            position: absolute;
            top: 95px;
            left: 20px;
            z-index: 50;
        }
    </style>

    <script>
        //引入需要的类
        dojo.require("esri.map");
        dojo.require("esri.dijit.BasemapToggle");
        dojo.require("esri.dijit.HomeButton");
        dojo.require("esri.dijit.OverviewMap");

        //定义全局变量
        var map;

        //准备初始化
        dojo.ready(init);

        //初始化方法
        function init(){
            //创建地图
            map = new esri.Map("map", {
                center: [121.48, 31.25],
                zoom: 8,
                basemap: "streets"
            });

            //卫星图切换
            var toggle = new esri.dijit.BasemapToggle({
                map: map,
                basemap: "satellite"
            }, "BasemapToggle");
            toggle.startup();

            //HOME按钮
            var home = new esri.dijit.HomeButton({
                map: map
            }, "HomeButton");
            home.startup();

            //小地图
            var overviewMap = new esri.dijit.OverviewMap({
                map: map,
                visible: true,           // 初始化可见，默认为false
                attachTo: "bottom-right",   // 默认右上角
                width: 250,              // 默认值是地图高度的 1/4th
                height: 150,             // 默认值是地图高度的 1/4th
                opacity: 0.5,            // 透明度 默认0.5
                maximizeButton: true,    // 最大化,最小化按钮，默认false
                expandFactor: 2,         //概览地图和总览图上显示的程度矩形的大小之间的比例。默认值是2，这意味着概览地图将至少是两倍的大小的程度矩形。
                color: "#000000"         // 默认颜色为#000000
            });
            overviewMap.startup();
        }

    </script>
</head>
<body>
<div id="map">
    <div id="BasemapToggle"></div>
    <div id="HomeButton"></div>
</div>
</body>
</html>
