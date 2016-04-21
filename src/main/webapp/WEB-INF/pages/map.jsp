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
        input{
            position: absolute;
            top:0px;
            left: 0px;
            z-index: 50;
        }
    </style>

    <script>
        //引入需要的类
        dojo.require("esri.map");
        dojo.require("esri.InfoTemplate");
        dojo.require("esri.graphic");
        dojo.require("esri.layers.GraphicsLayer");
        dojo.require("esri.dijit.BasemapToggle");
        dojo.require("esri.dijit.HomeButton");
        dojo.require("esri.dijit.OverviewMap");

        //定义全局变量，这是存放地图的容器
        var map,graphicLayer;
        var hasAdd,handle;
        hasAdd = false;
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

            //鹰眼图，参数为一个地图的对象
            var overviewMap = new esri.dijit.OverviewMap({
                map: map,
                visible: true,           // 初始化可见，默认为false
                attachTo: "bottom-right",   // 默认右上角
                width: 250,              // 默认值是地图高度的 1/4th
                height: 150,             // 默认值是地图高度的 1/4th
                opacity: 0.5,            // 指定鹰眼图控件上矩形的透明度
                maximizeButton: true,    // 最大化,最小化按钮，默认false
                expandFactor: 2,         //概览地图和总览图上显示的程度矩形的大小之间的比例。默认值是2，这意味着概览地图将至少是两倍的大小的程度矩形。
                color: "#000000"         // 默认颜色为#000000
            });
            overviewMap.startup();
            //创建图层

            graphicLayer=new esri.layers.GraphicsLayer();
            map.addLayer(graphicLayer);
            /*可以给GraphicLayer添加事件，比如点击事件， dojo.connect(map.graphics, "onClick", capitalclick);返回的是一个event对象，有三个值mapPoint（地图坐标）、screenPoint（屏幕坐标） 、Graphic（你所点击的Graphic对象）。*/
            map.on("click", function(e) {
                addMarker(e.mapPoint.x, e.mapPoint.y);
            });
            //


        }
        //鼠标点击添加图层
        function addMarker(xx, yy) {
            /*spatialReference获得地图的空间参考信息 ，Geometry 定以了对象的形状，Symbol 定以了图形是如何显示的，Graphic 可以包吨一些属性信息*/
            var pt = new esri.geometry.Point(xx, yy, map.spatialReference);
            var symbol1 = new esri.symbol.PictureMarkerSymbol("images/1.jpg", 25, 25);
            //要在模板中显示的参数
            var attr = {  };
            //创建模版
            var infoTemplate = new esri.InfoTemplate("标题", "");
            //创建图像
            var graphic = new esri.Graphic(pt, symbol1, attr, infoTemplate);
            graphicLayer.add(graphic);

        }
        //鼠标移动显示当前的坐标信息
        function addPoint(evt) {
            map.infoWindow.setTitle("当前坐标信息");
            map.infoWindow.setContent("lat/lon : " + evt.mapPoint.y + ", " + evt.mapPoint.x +
                    "<br />screen x/y : " + evt.screenPoint.x + ", " + evt.screenPoint.y);
            map.infoWindow.show(evt.screenPoint,map.getInfoWindowAnchor(evt.screenPoint));
        }
        //鼠标点击事件
        function addListener() {
            if(!hasAdd)
            {
                handle=dojo.connect(map, "onMouseMove", addPoint);
                dojo.attr(mpaCoordinate, "value", "点击取消");
                hasAdd=true;
            }

            else
            {
                dojo.disconnect(handle);
                map.infoWindow.hide();
                dojo.attr(mpaCoordinate, "value", "点击显示鼠标处地图坐标");
                hasAdd=false;
            }
        }

    </script>
</head>
<body>
<div id="map">
    <div id="BasemapToggle"></div>
    <div id="HomeButton"></div>
    <input type="button" value="点击显示鼠标处地图坐标" onClick="addListener();" id="mpaCoordinate"></input>
</div>
</body>
</html>
