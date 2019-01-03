document.writeln("<!DOCTYPE html>");
document.writeln("<!--[if lt IE 7]>      <html class=\'no-js lt-ie9 lt-ie8 lt-ie7\'> <![endif]-->");
document.writeln("<!--[if IE 7]>         <html class=\'no-js lt-ie9 lt-ie8\'> <![endif]-->");
document.writeln("<!--[if IE 8]>         <html class=\'no-js lt-ie9\'> <![endif]-->");
document.writeln("<!--[if gt IE 8]><!--> <html class=\'no-js\'> <!--<![endif]-->");
document.writeln("    <head>");
document.writeln("        <meta charset=\'utf-8\'>");
document.writeln("        <meta http-equiv=\'X-UA-Compatible\' content=\'IE=edge\'>");
document.writeln("        <title></title>");
document.writeln("        <meta name=\'description\' content=\'\'>");
document.writeln("        <meta name=\'viewport\' content=\'width=device-width, initial-scale=1\'>");
document.writeln("        <link rel=\'stylesheet\' href=\'/css/public.css\'>");
document.writeln("    </head>");
document.writeln("    <body>");
document.writeln("        <!--[if lt IE 7]>");
document.writeln("            <p class=\'browsehappy\'>You are using an <strong>outdated</strong> browser. Please <a href=\'#\'>upgrade your browser</a> to improve your experience.</p>");
document.writeln("        <![endif]-->");
document.writeln("        <div class=\'header size\'>");
document.writeln("                <a href=\'/index.html\' class=\'logo\'>");
document.writeln("                    <img src=\'/images/logo.png\'>");
document.writeln("                </a>");
document.writeln("                <div class=\'nav\'>");
document.writeln("                    <ul>");
document.writeln("                        <li><a class=\'active\' href=\'/index.html\'>首页</a></li>");
document.writeln("                        <li><a href=\'/pages/about.html\'>关于安孚</a></li>");
document.writeln("                        <li><a href=\'/pages/server.html\'>服务领域</a></li>");
document.writeln("                        <li><a href=\'/pages/team.html\'>安孚团队</a></li>");
document.writeln("                        <li><a href=\'/pages/achievement.html\'>安孚业绩</a></li>");
document.writeln("                        <li><a href=\'/pages/recruit.html\'>人才招聘</a></li>");
document.writeln("                        <li><a href=\'/pages/contact.html\'>联系我们</a></li>");
document.writeln("                    </ul>");
document.writeln("                </div>");
document.writeln("            </div>");
document.writeln("    <script>");
document.writeln("        var href = window.location.href");
document.writeln("        li = document.getElementsByTagName(\'li\')");
document.writeln("        for (var i = 0; i < li.length; i++) {");
document.writeln("            var reg =`/${li[i].firstChild.getAttribute(\'href\').split(\'/\')[li[i].firstChild.getAttribute(\'href\').split(\'/\').length-1].split(\'.\')[0]}/`");
document.writeln("            var obj = eval(\'(\' + reg + \')\')");
document.writeln("            if (obj.test(href)) {");
document.writeln("                li[i].firstChild.setAttribute(\'class\', \'active\')");
document.writeln("            } else {");
document.writeln("                li[i].firstChild.setAttribute(\'class\', \'\')");
document.writeln("            }");
document.writeln("        }");
document.writeln("    </script>");
document.writeln("    </body>");
document.writeln("</html>");