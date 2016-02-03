$(document).ready(function() {
    $('table').addClass('table table-striped table-hover');

    var lang = $('html').attr('lang');
    var $curlang = $('#lang-switch li[lang="' + lang + '"]').addClass('active');
    $('#lang-button .name').html($curlang.text());

    $('.page .entry-content a[href^="/"]').each(function() {
      var href = $(this).attr('href');
      if (href.indexOf('/library/') >= 0) {
        $(this).addClass('library-ref')
          .prepend('<i class="fa fa-file-text-o"></i>&nbsp;');
      } else if (href.indexOf('/tag/') >= 0) {
        $(this).addClass('tags-ref')
          .prepend('<i class="fa fa-tag"></i>&nbsp;');
      } else if (href.indexOf('/pages/') < 0) {
        $(this).addClass('article-ref')
          .prepend('<i class="fa fa-bookmark-o"></i>&nbsp;');
      }
    });

    $('checkbox')
      .prepend('<i class="fa fa-circle-o"></i>')
      .click(function() {
        $(this).toggleClass('active')
          .find('.fa:first')
            .toggleClass('fa-circle-o')
            .toggleClass('fa-check-circle-o');
      });

    $('tags a').addClass('btn btn-sm');

    $('#enable-annotations').click(function() {
      if ($(this).hasClass('disable')) { return; }
      $('body').append('<script async defer src="https://hypothes.is/embed.js"></script>');
      $(this).addClass('disable').attr('disable', 'disable');
    });
});

function validateForm(query) {
  return (query.length > 0);
}
