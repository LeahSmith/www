
 

jQuery(document).ready(function($) {
    $('#code').submit( function(){
		
        var data = $(this).serialize();
        var source = $('textarea#source').val();
        
         $(this).append('<div class="loading">Processing...</div>');
        
       $.ajax({
            type: 'POST',
            url: 'http://leahsmuchanan.bugs3.com/process.php',
			contentType:"application/json",
            dataType: "json",
			data:data + '&process=1',  
			cache: false,
            timeout: 60000000,
			
           success: function(response){
		   
               $('.loading').remove();
                $('.cmpinfo').remove();
                $('#response').show();
               alert(response);
				
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
                   // $('.output').html('<pre>' + response + '</pre>');
                    alert( response.output );
                }
                //alert( response.msg );
            }
			
        });
        
        return false;
    });
});

   