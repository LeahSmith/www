$( document ).bind( "mobileinit", function() {
        $.support.cors                 = true;
        $.mobile.allowCrossDomainPages = true;
        $.mobile.pushStateEnabled      = false;
      });


jQuery(document).ready(function($) {
    $('#code').submit( function(){
        var data = $(this).serialize();
        var source = $('textarea#source').val();
        
        if( source == '' ) {
            alert( 'No source code provided');
            return false;
        }
        
        $(this).append('<div class="loading">Processing...</div>');
        
        $.ajax({
            type: 'post',
            url: 'http://javagal.bugs3.com/process.php',
            dataType: 'json',
            data: data + '&process=1',
            cache: false,
			timeout: 10000,
            success: function(response){
                $('.loading').remove();
                $('.cmpinfo').remove();
                $('#response').show();
                //alert(response);
                console.log(response.raw);
                if( response.status == 'success' ) {
                    $('.meta').text( response.meta );
                    $('.output').html('<strong>Output</strong>: <br><br><pre>' + response.output + '</pre>');
                    
                    if( response.cmpinfo ) {
                        $('.cmpinfo').remove();
                        $('.meta').after('<div class="cmpinfo"></div>');
                        $('.cmpinfo').html('<strong>Compiler Info: </strong> <br><br>' + response.cmpinfo );
                    }
                    
                } else {
                    //$('.output').html('<pre>' + response + '</pre>');
                    alert( response.output );
                }
                //alert( response.msg );
            }
        });
        
        return false;
    });
});

   