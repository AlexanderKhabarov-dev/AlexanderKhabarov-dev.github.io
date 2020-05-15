
function show_popup(id)
{
	$(id).modal({overlayClose: true, focus: false});
	return false;
}



function hide_popup(id)
{
	$("#"+id+" .simplemodal-close").click();
}

function show_message(title, text)
{
	content = '<div class="ms_title">' + title + '</div><div class="ms_text"><b>' + text + '</b></div>';
	$('#ms_karkas').html(content);
	show_popup(message); 
	setTimeout("hide_popup('message')", 10000);
	
}





// функция для отправки формы
function submit_form(id)
{
  document.getElementById(id).submit();
  return false;
}

// ставит автоматом на все ссылки blur()
function externalLinks()
{
  if (!document.getElementsByTagName) return;
  var anchors = document.links;
  for (var i=0; i < anchors.length; i++)
  {
    anchors[i].onfocus = function(e){this.blur();}
  }
}

// задает значение в Cookie
function setCookie (name, value, expires, path, domain, secure)
{
  document.cookie = name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

// получает значение Cookie
function getCookie(name)
{
  var cookie = " " + document.cookie;
  var search = " " + name + "=";
  var setStr = null;
  var offset = 0;
  var end = 0;
  if (cookie.length > 0)
  {
    offset = cookie.indexOf(search);
    if (offset != -1)
    {
      offset += search.length;
      end = cookie.indexOf(";", offset)
      if (end == -1)
      {
        end = cookie.length;
      }
      setStr = unescape(cookie.substring(offset, end));
    }
  }
  return(setStr);
}

// возвращает первую позицию элемента в строке
function strpos(haystack, needle, offset)
{
  var i = haystack.indexOf(needle, offset);
  return i >= 0 ? i : false;
}

// standart string replace functionality
function str_replace(haystack, needle, replacement) {
	var temp = haystack.split(needle);
	return temp.join(replacement);
}

// needle may be a regular expression
function str_replace_reg(haystack, needle, replacement) {
	var r = new RegExp(needle, 'g');
	return haystack.replace(r, replacement);
}

function show_pic(pic)
{
  $('div[id*=product_big_pic_]').hide();
  $('#product_big_pic_'+pic).css('display', 'block');
	
	return false;
}







