(function($) {

  $(document).ready(function() {

    $('.type-text').before('<span class="search-close">&nbsp;</span>');

    $('.search-close').on('click', function(){
      $(this).parent().toggleClass('sopen');
    });

  });
})(jQuery);
