$(document).ready(function(){

    //サイドバー
    var duration = 300;
    var $aside = $('.side');
    var $asidButton = $aside.find('button')
        .on('click', function(){
            $aside.toggleClass('open');
            if($aside.hasClass('open')){
                $aside.stop(true).animate({left: 0}, duration, 'easeOutBack');
                $asidButton.find('img').attr('src', 'img/btn_close.png');
            }else{
                $aside.stop(true).animate({left: '-200px'}, duration, 'easeInBack');
                $asidButton.find('img').attr('src', 'img/btn_open.png');
            };
        });
    var el = scrollableElement('html', 'body'),
        $window, 
        $section1, 
        $section2,
        $section3,
        $section4,
        section1OffsetTop, 
        section2OffsetTop,
        section3OffsetTop, 
        section4OffsetTop,
        section5OffsetTop;
    function offsetVarReady(){
        el = scrollableElement('html', 'body'),
        $window = $(window),
        $section1 = $('#s1'),
        $section2 = $('#s2'),
        $section3 = $('#s3'),
        $section4 = $('#s4'),
        $section5 = $('#s5'),
        section1OffsetTop = $section1.offset().top,
        section2OffsetTop = $section2.offset().top,
        section3OffsetTop = $section3.offset().top,
        section4OffsetTop = $section4.offset().top,
        section5OffsetTop = $section5.offset().top;

    };
    function scrollableElement(){
        var i, le, el, $el, scrollable;
        for(i=0,len=arguments.length; i<len; i++){
            el = arguments[i],
            $el = $(el);
            if($el.scrollTop()>0){
                return el;
            } else {
                $el.scrollTop(1);
                scrollable = $el.scrollTop() > 0;
                $el.scrollTop(0);
                if(scrollable){
                    return el;
                }
            }
        }
        return[];
    };

    $('.side-button').each(function(){
        offsetVarReady();
         $(this).on('click',function(event){
            event.preventDefault();
            var $id = $(this).attr('id');
            switch($id){
                case "btn1":
                $(el).animate({scrollTop:section1OffsetTop},500,'easeInExpo');
                break;
                case "btn2":
                $(el).animate({scrollTop:section2OffsetTop},500,'easeInExpo');
                break;
                case "btn3":
                $(el).animate({scrollTop:section3OffsetTop},500,'easeInExpo');
                break;
                case "btn4":
                $(el).animate({scrollTop:section4OffsetTop},500,'easeInExpo');
                break;
                case "btn5":
                $(el).animate({scrollTop:section5OffsetTop},500,'easeInExpo');
                break;
            };
         });
    });

    //背景動画動画のセット
    if(!navigator.userAgent.match(/(iPhone|Android)/)){
        var options = { videoId: '25i0wqJwL7w', mute: true ,repeat: true };
        $('.bg-movie').tubular(options);
    };

    //ヘッダータブ
    $('.header').each(function(){
        $('.tab-a').on('click',function(event){
            event.preventDefault();
            var $id = $(this).attr('id');
            switch($id){
                case "tab1":
                //表示するタブの切り替え
                $('.headerSectionBody').find('.activeh').fadeOut().removeClass('activeh');
                $('#h1').fadeIn().addClass('activeh');
                //タブ切り替えボタンのアクティブ化
                $('.tabs-nav').find('.active-tab').removeClass('active-tab');
                $('#tab-li1').addClass("active-tab");
                break;
                case "tab2":
                $('.headerSectionBody').find('.activeh').fadeOut().removeClass('activeh');
                $('#h2').fadeIn().addClass('activeh');
                $('.tabs-nav').find('.active-tab').removeClass('active-tab');
                $('#tab-li2').addClass("active-tab");
                break;
                case "tab3":
                $('.headerSectionBody').find('.activeh').fadeOut().removeClass('activeh');
                $('#h3').fadeIn().addClass('activeh');
                $('.tabs-nav').find('.active-tab').removeClass('active-tab');
                $('#tab-li3').addClass("active-tab");
                break;
                case "tab4":
                $('.headerSectionBody').find('.activeh').fadeOut().removeClass('activeh');
                $('#h4').fadeIn().addClass('activeh');
                $('.tabs-nav').find('.active-tab').removeClass('active-tab');
                $('#tab-li4').addClass("active-tab");
                break;
                case "tab5":
                $('.headerSectionBody').find('.activeh').fadeOut().removeClass('activeh');
                $('#h5').fadeIn().addClass('activeh');
                $('.tabs-nav').find('.active-tab').removeClass('active-tab');
                $('#tab-li5').addClass("active-tab");
                break;
            }
        });
    });
    //ヘッダータブスクロール
    $('.tab-btn').each(function(){
        offsetVarReady();
        $(this).on('click',function(event){
            event.preventDefault();
            var $id = $(this).attr('id');
            switch($id){
                case "tab-btn1":
                $(el).animate({scrollTop:section1OffsetTop},500,'easeInExpo');
                break;
                case "tab-btn2":
                $(el).animate({scrollTop:section2OffsetTop},500,'easeInExpo');
                break;
                case "tab-btn3":
                $(el).animate({scrollTop:section3OffsetTop},500,'easeInExpo');
                break;
                case "tab-btn4":
                $(el).animate({scrollTop:section4OffsetTop},500,'easeInExpo');
                break;
                case "tab-btn5":
                $(el).animate({scrollTop:section5OffsetTop},500,'easeInExpo');
                break;
            };
         });
    })

    //セクション１スライドショー
    $('.s1').each(function(){
        //変数準備
        var $container = $(this),
            $slideGroup = $container.find('.slideshow-slides'),
            $slides = $slideGroup.find('.slide'),
            $nav = $container.find('.slideshow-nav'),

            slideCount = $slides.length,
            currentIndex = 0,
            duration = 500,
            interval = 5000;
        $slides.each(function(i){
            $(this).css({left:100*i + '%'});
        });

        function slideshow(index){
            $slideGroup.animate({left:-100*index+'%'},duration);

            currentIndex = index;

            updateNavi();
        }

        function updateNavi(){
            if(currentIndex === 0){
                $('.left').css('display','none');
            }else {
                $('.left').css('display','inline-block');
            }
            if(currentIndex === slideCount-1){
                $('.right').css('display','none');
            }else {
                $('.right').css('display','inline-block');
            }
        }

        function startslide(){
            setInterval(function(){
                var next = (currentIndex + 1)%slideCount;
                slideshow(next);
            },interval);
        }

        $nav.on('click','a',function(event){
            event.preventDefault();
            if($(this).hasClass('prev')){
                slideshow(currentIndex-1);
            }else{
                slideshow(currentIndex+1);
            }
        });

        slideshow(currentIndex);
        startslide();
        //写真を見やすくするためマウスオーバー時文章を消す（2/15使い勝手が悪かったため削除）
        /*$slideGroup.on('mouseover',function(){
            $('.s1-description').fadeOut();
        }).on('mouseleave',function(){
            $('.s1-description').fadeIn();
        })*/
    });
    //セクション２ギャラリー
    $('#gallery').each(function(){
        var $container = $(this);

        $container.masonry({
            columnWidth:230,
            gutter:10,
            itemSelector:'.gallery-item'
        });

        $.getJSON('json/content.json', function(data){
            var elements = [];

            $.each(data, function(i,item){
                var itemHTML = '<li class="gallery-item is-loading">'+
                                '<a href="' + item.images.large + '">' +
                                '<img src="' + item.images.thumb +
                                '" alt"' + item.title + '">' +
                                '</a>' +
                                '</li>';
                
                elements.push($(itemHTML).get(0));
            });

            $container.append(elements);

            $container.imagesLoaded(function(){
                $(elements).removeClass('is-loading');
                $container.masonry('appended',elements);
            });
        });
    });

    //セクション３・ミニッツリピーター
     $('.s3-left,.sound-btn1').hover(function(){
        $('.s3-left').css('transform','scale(1.2)');
    },function(){
        $('.s3-left').css('transform','scale(1)');
    }
    );
    $('.s3-top, .sound-btn2').hover(function(){
        $('.s3-top').css('transform','scale(1.2)');
        $('.s3-top-wrapper').css('height','90%');
    },function(){
        $('.s3-top').css('transform','scale(1)');
        $('.s3-top-wrapper').css('height','50%');
    }
    );
    $('.s3-bottom ,.sound-btn3').hover(function(){
        $('.s3-bottom').css('transform','scale(1.2)');
        $('.s3-bottom-wrapper').css('height','90%');
        $('.s3-top-wrapper').css('height','10%');
    },function(){
        $('.s3-bottom').css('transform','scale(1)');
        $('.s3-top-wrapper').css('height','50%');
        $('.s3-bottom-wrapper').css('height','50%');
    }
    );
    function ring(i) {
        document.getElementById("sound"+i).play();
    }
    $('#sound-btn1').on('click',function(){
        ring(1);
    });
    $('#sound-btn2').on('click',function(){
        ring(2);
    });
    $('#sound-btn3').on('click',function(){
        ring(3);
    });

    //セクション４
    $('.box-wrapper1').hover(function(){
        $('.box1').stop(true).animate({'top':0},500);
    },function(){
        $('.box1').stop(true).animate({'top':'100%'},500);
    })
    $('.box-wrapper3').hover(function(){
        $('.box3').stop(true).animate({'top':0},500);
    },function(){
        $('.box3').stop(true).animate({'top':'100%'},500);
    })

    $('.moon-more').hover(function(){
        $('.moon-more-ride').stop(true).animate({'width':'100%'},500);
    },function(){
        $('.moon-more-ride').stop(true).animate({'width':'0'},500);
    })

    //セクション５
    $('.s5-left').on('click', function(){
        if($(this).hasClass('big')){
            $('.s5-right').animate({'left':'50%'},500);
            $(this).removeClass('big').animate({'width':'50%'},500);
            $(this).find('.s5-description-left').fadeOut(300);
            $(this).find('.icon-active').removeClass('icon-active');
            $(this).find('.zoom').addClass('icon-active');
        }else{
            $('.s5-right').animate({'left':'100%'},500);
            $(this).addClass('big').animate({'width':'100%'},500);
            $(this).find('.s5-description-left').fadeIn(2000);
            $(this).find('.icon-active').removeClass('icon-active');
            $(this).find('.zoomout').addClass('icon-active');
        }
    })
    $('.s5-right').on('click', function(){
        if($(this).hasClass('big')){
            $('.s5-left').animate({'left':0},500);
            $(this).removeClass('big').animate({'left':'50%','width':'50%'},500);
            $(this).find('.s5-description-right').fadeOut(300);
            $(this).find('.icon-active').removeClass('icon-active');
            $(this).find('.zoom').addClass('icon-active');

        }else{
            $('.s5-left').animate({'left':'-50%'},500);
            $(this).addClass('big').animate({'left':0, 'width':'100%'},500);
            $(this).find('.s5-description-right').fadeIn(1000);
            $(this).find('.icon-active').removeClass('icon-active');
            $(this).find('.zoomout').addClass('icon-active');
        }
    })

    //背景動画ロード画面対策
    function movieShow(){
        $(".headerSectionBody").find(".cover").slideUp();
        clearInterval(showTimer)
    }
    var showTimer = setInterval(movieShow,3000);
});