$(document).ready(function() {
	$('#moreLink').click(function(){
		$('#moreLink').hide();
		$('#fullContent').slideDown(function(){
			$('#lessLink').click(function(){
				$('#fullContent').slideUp(function(){$('#moreLink').show();});
			});
		});
	});

  $('.expandCatBox a').click(function() {
	var ssCategoryId = $(this).attr("id");
	var sacategoryId = ssCategoryId.split('_');
	var ssDivName = sacategoryId[0];
	var snCategoryId = sacategoryId[1];
	var ssDetailedDiv = ssDivName + '_detailed_' + snCategoryId;
	var ssCategoryIds = '';
	
	if ($('#subCatId_' + snCategoryId).val()) {
		if ($('#subCatId_' + snCategoryId).val() != '') ssCategoryIds = $('#subCatId_' + snCategoryId).val();
	}
	
	if(ssDivName == 'first'){
		$('#'+ssDetailedDiv).show();
		$("#"+ssDetailedDiv).animate({"width":"100%"}, 1000, "linear", function() {
			ajaxCallForKeyword(ssDivName,'all','fi',snCategoryId,ssCategoryIds);
		});
	}
	if(ssDivName == 'second'){
		$('#'+ssDetailedDiv).show();
		$("#"+ssDetailedDiv).animate({"width":"100%","margin-left":"0"},1000, "linear", function() {
			ajaxCallForKeyword(ssDivName,'all','fi',snCategoryId,ssCategoryIds);
		});
	}
	if(ssDivName == 'third'){
		$('#'+ssDetailedDiv).show();
		$("#"+ssDetailedDiv).animate({"width":"100%"}, 1000, "linear", function() {
			ajaxCallForKeyword(ssDivName,'all','fi',snCategoryId,ssCategoryIds);
		});
	 }
  });

	$('.minus a').click(function() {
		
		var ssCategoryId = $(this).attr("id");
		var sacategoryId = ssCategoryId.split('_');
		var ssDivName = sacategoryId[0];
		var snCategoryId = sacategoryId[1];
		var ssDetailedDiv = ssDivName + '_detailed_' + snCategoryId;
	
		if(ssDivName == 'first'){
			//$('#keywordList_'+snCategoryId).html('');
			$("#"+ssDetailedDiv).animate({
			    width:"31.6239%"
			  }, 1000, "linear", function() {
				$("#"+ssDetailedDiv).hide();
	            $("#"+ssDetailedDiv).css('display','none');
	            $('#'+ssCategoryId).css('display','inline');
			});			
		}

		if(ssDivName == 'second'){
			//$('#keywordList_'+snCategoryId).html('');
			$("#"+ssDetailedDiv).animate({"width":"32%","margin-left":"335px"},1000, "linear", function() {
				$("#"+ssDetailedDiv).hide();
	            $("#"+ssDetailedDiv).css('display','none');
	            $('#'+ssCategoryId).css('display','inline');
			});
		}
		if(ssDivName == 'third'){
			//$('#keywordList_'+snCategoryId).html('');
			$("#"+ssDetailedDiv).animate({
			    width:"31.6239%"
			  }, 1000, "linear", function() {
				$("#"+ssDetailedDiv).hide();
	            $("#"+ssDetailedDiv).css('display','none');
	            $('#'+ssCategoryId).css('display','inline');
			});
		}
		
	});

});






function ajaxCallForKeyword(position,snSiteId,ssCulture,snCategoryId,ssCategoryIds){
	var returnId = 'keywordList_'+snCategoryId;
	var ssUrl = '';
	if (ssCategoryIds != '')
	  //ssUrl = "/" + snSiteId + "/" +ssCulture+ "/category/list-categories/" + ssCategoryIds+"/position/"+position+"/expand_id/"+snCategoryId;
	  ssUrl = "/fronts/" + ssCategoryIds + position;
	else
	  //ssUrl = "/" + snSiteId + "/" +ssCulture+ "/category/list-keywords/" + snCategoryId+"/position/"+position;
	  ssUrl = "/fronts";

	/*$.ajax({
	  url: ssUrl,
	  beforeSend: function() {
		//spinner(returnId, '#2DB400');
		$('#loading_'+snCategoryId).show();	
	  },
	  success: function(data) {
		$('#loading_'+snCategoryId).hide();
		$('#'+returnId).html(data);
	  }
    });*/
}