$( document ).ready(function() {

    $(document).on('click', '.more a', function(e) {
        e.preventDefault();

        el = $('.last-id').val();

        if ($(this) != 'undefined') {

            $.ajax({
                url : 'json/news.json',
                success : function(data){

                    $(data).each(function(i,v) {

                        if (el < v.Id && v.Id > el) {
                            console.log(v.Id)
                        }
                        if (i <= el - 1 && v.Id > el) {
                            $('main .row').append(
                                '<div class="article" data-id="'+v.Id+'">'
                                    +'<a href="#" title="Lien vers l\'article">'
                                        +'<div class="block-image">'
                                            +'<img src="images/articles/'+v.Image+'" title="Visuel de l\'article '+v.Id+'" />'
                                        +'</div>'
                                        +'<div class="block-content">'
                                            +'<p class="date">'
                                                +'<i class="icon icon-time"></i>'
                                                +'<span>&nbsp;Publi&eacute; le '+v.Date+'</span>'
                                            +'</p>'
                                            +'<h3>'+v.Title+'</h3>'
                                            +'<p>'+v.Content+'</p>'
                                        +'</div>'
                                    +'</a>'
                                +'</div>'
                            );
                            $('.last-id').val(v.Id);

                        }

                    });

                }
            });

        }

    });

});
