!function(n){"function"==typeof define&&define.amd?define(["jquery","datatables.net","datatables.net-buttons"],function(t){return n(t,window,document)}):"object"==typeof exports?module.exports=function(t,e){return t=t||window,e&&e.fn.dataTable||(e=require("datatables.net")(t,e).$),e.fn.dataTable.Buttons||require("datatables.net-buttons")(t,e),n(e,t,t.document)}:n(jQuery,window,document)}(function(b,h,t,p){"use strict";var e=b.fn.dataTable,n=t.createElement("a"),v=function(t){n.href=t;var e=n.host;return-1===e.indexOf("/")&&0!==n.pathname.indexOf("/")&&(e+="/"),n.protocol+"//"+e+n.pathname+n.search};return e.ext.buttons.print={className:"buttons-print",text:function(t){return t.i18n("buttons.print","Print")},action:function(t,e,n,o){function a(t,e){for(var n="<tr>",o=0,a=t.length;o<a;o++){var r=null===t[o]||t[o]===p?"":t[o];n+="<"+e+" "+(s[o]?'class="'+s[o]+'"':"")+">"+r+"</"+e+">"}return n+"</tr>"}var r=e.buttons.exportData(b.extend({decodeEntities:!1},o.exportOptions)),i=e.buttons.exportInfo(o),s=e.columns(o.exportOptions.columns).flatten().map(function(t){return e.settings()[0].aoColumns[e.column(t).index()].sClass}).toArray(),u='<table class="'+e.table().node().className+'">';o.header&&(u+="<thead>"+a(r.header,"th")+"</thead>"),u+="<tbody>";for(var d=0,c=r.body.length;d<c;d++)u+=a(r.body[d],"td");u+="</tbody>",o.footer&&r.footer&&(u+="<tfoot>"+a(r.footer,"th")+"</tfoot>"),u+="</table>";var l=h.open("","");l.document.close();var f="<title>"+i.title+"</title>";b("style, link").each(function(){var t;f+=("link"===(t=b(this).clone()[0]).nodeName.toLowerCase()&&(t.href=v(t.href)),t.outerHTML)});try{l.document.head.innerHTML=f}catch(t){b(l.document.head).html(f)}l.document.body.innerHTML="<h1>"+i.title+"</h1><div>"+(i.messageTop||"")+"</div>"+u+"<div>"+(i.messageBottom||"")+"</div>",b(l.document.body).addClass("dt-print-view"),b("img",l.document.body).each(function(t,e){e.setAttribute("src",v(e.getAttribute("src")))}),o.customize&&o.customize(l,o,e);function m(){o.autoPrint&&(l.print(),l.close())}navigator.userAgent.match(/Trident\/\d.\d/)?m():l.setTimeout(m,1e3)},title:"*",messageTop:"*",messageBottom:"*",exportOptions:{},header:!0,footer:!1,autoPrint:!0,customize:null},e.Buttons});
