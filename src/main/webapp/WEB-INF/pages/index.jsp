<%--
  Created by IntelliJ IDEA.
  User: 19731
  Date: 2016/4/15
  Time: 11:02
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>信息网站</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/homepage.css" rel="stylesheet">
    <!--[if lt IE 9]>
    <script src="js/bootstrap_js/html5shiv.js"></script>
    <script src="js/bootstrap_js/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!--下面是顶部导航栏的代码-->
<div class="wrap">
    <nav class="navbar navbar-default navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#home">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand main" id="brand" href="#" title="homepage">首页</a>
                <a class="navbar-brand main" id="brand" href="map" title="map">地图</a>
            </div>
            <div class="collapse navbar-collapse" id="home">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">其他业务<span class="caret"></span></a>
                        <ul class="dropdown-menu" role="menu">
                            <li class="dropdown-header">业务功能</li>
                            <li><a href="#">信息建立</a></li>
                            <li><a href="#">信息查询</a></li>
                            <li><a href="#">信息管理</a></li>
                            <li class="divider"></li>
                            <li class="dropdown-header">系统功能</li>
                            <li><a href="#">设置</a></li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right head-right" >
                    <li><a href="#" rel="nofollow" target="ext">登陆</a></li>
                    <li><a href="#footer" id="btnAbout">关于</a></li>
                </ul>
            </div>
        </div>
    </nav>


    <div style="height:62px;background-color:#32383e;"></div>


    <div id="masthead">
        <div class="container">
            <div class="row">
                <div class="col-sm-7">
                    <h1>欢迎浏览我们的网站首页</h1>
                    <p class="lead"><span style="color:#CCFF33;">Theme</span>XXXXXXXXXX</p>
                </div>
                <div class="col-sm-5">
                    <!-- ad space -->
                    <div class="pull-right well well-lg">
                        <div id="carbonads-container">
                            <div class="carbonad">
                                <div id="azcarbon">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- /cont -->
    </div>


    <!--中间部分-->
    <div class="container" id="main">
        <div class="row">
            <div class="col-md-8">
                <hr></hr>
                <h3>提示标签</h3>
                <p></p>
                <h4>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                    <a  class="label label-default"href="#">theme</a>
                </h4>
                <hr></hr>
            </div>
            <div class="col-md-4">
                <h4>我们的服务</h4>

                <p id="purpos">因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先因为我们是行业的领先</p>
            </div>
            <div class="col-md-12">

                <h2>我们的优势</h2>
                <p>这就是我们的优势这就是我们的优势这就是我们的优势这就是我们的优势这就是我们的优势这就是我们的优势</p>
                <hr>

            </div>
        </div>
        <!--文章部分-->
        <div class="row" id="listTemplates">
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>

            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3><a href="/bootstrap-template/creative">新闻</a></h3>
                    </div>
                    <div class="panel-body">
                        <a href="/bootstrap-template/creative">
                            <img alt="Image of Creative"class="img-responsive" />
                        </a>
                    </div>
                    <div class="panel-footer"><strong>标签</strong></div>
                </div>
            </div>

            <div class="row text-foot">
                <div class="col-md-12">
                    <a class="pull-right" href="#" rel="nofollow" target="ext">浏览 <b>更多</b> 关于 &amp; 我们的新闻</a>
                    <a href="#" rel="nofollow" target="_ext">更多 <b>关于</b> 我们的服务</a>
                </div>
            </div>
        </div><!--container  的结尾-->


    </div><!--wrap  的结尾-->


    <!--jiewei-->
    <footer id="footer">
        <div class="container" role="contentinfo">
            <div class="row">
                <div class="col-sm-12">
                    <!--下上-->
                    <div class="row">
                        <div class="col-md-12">
                            <a href="#" rel="nofollow" target="ext" class="pull-right">更多行业推荐</a>
                            <ul class="list-inline">
                                <li><a href="#">GitHub Project</a></li>
                                <li><a href="#">GitHub Project</a></li>
                                <li><a href="#">GitHub Project</a></li>
                                <li><a href="#">GitHub Project</a></li>
                            </ul>
                        </div>
                    </div>
                    <!--下中-->
                    <div class="row">
                        <div class="col-md-4">
                            <ul class="list-unstyled">
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                            </ul>
                        </div>
                        <div class="col-md-4">
                            <ul class="list-unstyled">
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                                <li><a href="#">Bootstrap</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div><!--/row-->
            <!--下下-->
            <div class="row">
                <div class="col-md-12">
                    <p class="text-right">
                        <br>
                        XXX有限责任公司
                    </p>
                </div>
            </div><!--/row-->
        </div>
    </footer>
    </div>
    <!—自适应布局-->
    <script src="js/bootstrap_js/jquery-1.11.1.min.js"></script>
    <script src="js/bootstrap_js/bootstrap.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {

                $.ajax({
                    type: "GET",
                    url: "json/test_json.json",
                    dataType: "json",
                    success: function (data) {
                        if (data.success) {
                            $("#purpos").html(data.msg);
                        } else {
                            $("#purpos").html("出现错误：" + data.msg);
                        }
                    },
                    error: function (jqXHR) {
                        alert("发生错误：" + jqXHR.status);
                    },
                });

        })
    </script>
</body>
</html>
