$(document).ready(function() {
	$("#dashboard_contents").load('plan/plan_dashboard.html'); 	
	$("#releases_contents").load('plan/plan_release.html');
	$("#sprints_contents").load('plan/plan_sprints.html');
	$("#tasks_contents").load('plan/plan_tasks.html');
	$("#tests_contents").load('plan/plan_tests.html');
	$("#epic_contents").load('plan/plan_epic.html');
	$("#userstory_contents").load('plan/plan_userstory.html');
	$("#bug_contents").load('plan/plan_bug.html');

	$("#dashboard_contents").show(); 	
	$("#releases_contents").hide();
	$("#sprints_contents").hide();
	$("#tasks_contents").hide();
	$("#tests_contents").hide();
	$("#epic_contents").hide();
	$("#userstory_contents").hide();
	$("#bug_contents").hide();

	var plan_selector = '#plan_menu_list li a';
	$("body").delegate(plan_selector, 'click', function(){
		$('#plan_menu_list li a').removeClass('active');
		$(this).addClass('active');
	});


	$("body").delegate("#dashboard_nav", 'click', function(){
		$("#dashboard_contents").show();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
	});
	$("body").delegate("#release_nav", 'click', function(){
		$("#releases_contents").show();
		$("#dashboard_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
		release_page_load();
	});
	$("body").delegate("#sprints_nav", 'click', function(){
		$("#sprints_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
		sprint_page_load();
	});
	$("body").delegate("#tasks_nav", 'click', function(){
		$("#tasks_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
		task_page_load();	
	});
	$("body").delegate("#test_nav", 'click', function(){
		$("#tests_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
		test_page_load();
	});
	$("body").delegate("#epic_nav", 'click', function(){
		$("#epic_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#userstory_contents").hide();
		$("#bug_contents").hide();	
	});
	$("body").delegate("#userstory_nav", 'click', function(){
		$("#userstory_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#bug_contents").hide();	
		userstory_page_load();
	});
	$("body").delegate("#bug_nav", 'click', function(){
		$("#bug_contents").show();
		$("#dashboard_contents").hide();
		$("#releases_contents").hide();
		$("#sprints_contents").hide();
		$("#tasks_contents").hide();
		$("#tests_contents").hide();
		$("#epic_contents").hide();
		$("#userstory_contents").hide();
		bug_page_load();
	});

	$('#dashboard_tooltip').tooltip({title: "Dashboard"});
	$('#release_tooltip').tooltip({title: "Release"});
	$('#sprints_tooltip').tooltip({title: "Sprints"});
	$('#tasks_tooltip').tooltip({title: "Tasks"});
	$('#tests_tooltip').tooltip({title: "Tests"});
	$('#epic_tooltip').tooltip({title: "Epic"});
	$('#userstory_tooltip').tooltip({title: "Userstory"});
	$('#bug_tooltip').tooltip({title: "Bugs"});
});
