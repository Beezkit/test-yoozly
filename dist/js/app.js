$(document).ready(function(){$(document).on("click",".more a",function(e){e.preventDefault(),el=$(".last-id").val(),"undefined"!=$(this)&&$.ajax({url:"json/news.json",success:function(e){$(e).each(function(e,i){el<i.Id&&i.Id>el&&console.log(i.Id),e<=el-1&&i.Id>el&&($("main .row").append('<div class="article" data-id="'+i.Id+'"><a href="#" title="Lien vers l\'article"><div class="block-image"><img src="images/articles/'+i.Image+'" title="Visuel de l\'article '+i.Id+'" /></div><div class="block-content"><p class="date"><i class="icon icon-time"></i><span>&nbsp;Publi&eacute; le '+i.Date+"</span></p><h3>"+i.Title+"</h3><p>"+i.Content+"</p></div></a></div>"),$(".last-id").val(i.Id))})}})})});