$(".carousel").swipe({swipe:function(e,l,i,r,s,t){"left"==l&&$(this).carousel("next"),"right"==l&&$(this).carousel("prev")},allowPageScroll:"vertical"});