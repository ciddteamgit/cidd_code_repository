$(document).ready(function() {
/*	$("#gantt_display_btn").removeClass('btn-default');
	$("#gantt_display_btn").addClass('btn-primary');
	$('#table_display_btn').removeClass('btn-primary');
	$('#table_display_btn').addClass('btn-default');*/
	//$("#ganttchart").load('dashboard/gantt_release_wise.html');
	//$("#burndownchart").load('dashboard/burndown.html');
	$("#burndownchart").hide();
	$("#plan_table_data").hide();
	getReleaseRecordForDropdown();

	var dashboard_selector = '#dashboard_rel_select button';
	$("body").delegate(dashboard_selector, 'click', function(){
		$('#dashboard_rel_select button').removeClass('btn-primary');
		$(this).addClass('btn-primary');
	});

	$("body").delegate("#gantt_display_btn", 'click', function(){
/*		$("#graph_display_btn").removeClass('btn-default');
		$("#graph_display_btn").addClass('btn-primary');
		$('#table_display_btn').removeClass('btn-primary');
		$('#table_display_btn').addClass('btn-default');
*/
		$("#ganttchart").show();
		$("#burndownchart").show();
		$("#plan_table_data").hide();
		//$("#ganttchart").load('dashboard/gantt_release_wise.html');
		//$("#burndownchart").load('dashboard/burndown.html');
		$("#burndownchart").hide();
		$("#plan_table_data").hide();
	});
	$("body").delegate("#table_display_btn", 'click', function(){
		$("#ganttchart").hide();
		$("#burndownchart").hide();
		$("#plan_table_data").show();

/*		$("#graph_display_btn").removeClass('btn-primary');
		$("#graph_display_btn").addClass('btn-default');
		$('#table_display_btn').removeClass('btn-default');
		$('#table_display_btn').addClass('btn-primary');
*/		
	});
	$("body").delegate("#burndown_display_btn", 'click', function(){
		$("#ganttchart").hide();
		$("#burndownchart").show();
		$("#plan_table_data").hide();

/*		$("#graph_display_btn").removeClass('btn-primary');
		$("#graph_display_btn").addClass('btn-default');
		$('#table_display_btn').removeClass('btn-default');
		$('#table_display_btn').addClass('btn-primary');
*/		
	});

});
function getReleaseRecordForDropdown(){
	//alert('inside getReleaseRecordForDropdown');
	var url = "../rest/common/releaseRecordForDropDown";
	$.ajax({
		type : "GET",
		dataType : "json",
		contentType : "application/json",
		url : url,
		crossDomain : true,
		success : function(data) {
			//data = jQuery.parseJSON(data);
			var len = data.length;
			
			var sysDate = new Date();
			

			//var formateDate = new Date();
			$('#sprint_release').empty();
			var selectedIndex=1;
			if(len=='0'){
				$('#release_sel').append('<option value="Select">Select</option>');
			}else{
				$('#release_sel').append('<option value="Select">Select</option>');
				for(var count=0;count<len;count++){
					$('#release_sel').append('<option value="' + data[count].releaseId + '">' + data[count].releaseName + '</option>');
					
					 var stDate = data[count].startDate;
					 var startdate = new Date(stDate);
					
					 var endDate = data[count].endDate;
					 var enddate = new Date(endDate);
							
					if(startdate < sysDate && enddate > sysDate)
						{
							
						selectedIndex = data[count].releaseId;
						}
					
				}
				document.getElementById('release_sel').selectedIndex = selectedIndex;
			}
		}
	}).error(function(xhr, errorText) {
		//alert(errorText);
	});
}
