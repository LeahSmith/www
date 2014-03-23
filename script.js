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
            url: 'http://leahsmuchanan.yzi.me/process.php
			',
            dataType: 'json',
            data: data + '&process=1',
            cache: false,
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

   var lineObjOffsetTop = 2;
   
   function createTextAreaWithLines(id)
   {
      var el = document.createElement('DIV');
      var ta = document.getElementById(id);
      ta.parentNode.insertBefore(el,ta);
      el.appendChild(ta);
      
      el.className='textAreaWithLines';
      el.style.width = (ta.offsetWidth + 30) + 'px';
      ta.style.position = 'absolute';
      ta.style.left = '30px';
      el.style.height = (ta.offsetHeight + 2) + 'px';
      el.style.overflow='hidden';
      el.style.position = 'relative';
      el.style.width = (ta.offsetWidth + 30) + 'px';
      var lineObj = document.createElement('DIV');
      lineObj.style.position = 'absolute';
      lineObj.style.top = lineObjOffsetTop + 'px';
      lineObj.style.left = '0px';
      lineObj.style.width = '27px';
      el.insertBefore(lineObj,ta);
      lineObj.style.textAlign = 'right';
      lineObj.className='lineObj';
      var string = '';
      for(var no=1;no<200;no++){
         if(string.length>0)string = string + '<br>';
         string = string + no;
      }
      
      ta.onkeydown = function() { positionLineObj(lineObj,ta); };
      ta.onmousedown = function() { positionLineObj(lineObj,ta); };
      ta.onscroll = function() { positionLineObj(lineObj,ta); };
      ta.onblur = function() { positionLineObj(lineObj,ta); };
      ta.onfocus = function() { positionLineObj(lineObj,ta); };
      ta.onmouseover = function() { positionLineObj(lineObj,ta); };
      lineObj.innerHTML = string;
      
   }
   
   function positionLineObj(obj,ta)
   {
      obj.style.top = (ta.scrollTop * -1 + lineObjOffsetTop) + 'px';   
   
      
   }
