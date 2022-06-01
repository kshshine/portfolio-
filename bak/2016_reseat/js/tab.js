$(document).ready(function() {
// 처음 세팅
	$(".tab-cont").hide();
	$(".tabMenu li:first").addClass("active").show();
	$(".tabMenu li:last").css("margin-right","0");
	$(".tab-cont:first").show();

	// 클릭 이벤트
	$(".tabMenu li").click(function() {
		
		$(".tabMenu li").removeClass("active");
		$(this).addClass("active");
		$(".tab-cont").hide();

		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});

});

$(document).ready(function() {
// 처음 세팅
	$(".ttab-cont").hide();
	$(".ttabMenu li:first").addClass("active").show();
	$(".ttabMenu li:last").css("margin-right","0");
	$(".ttab-cont:first").show();

	// 클릭 이벤트
	$(".ttabMenu li").click(function() {
		
		$(".ttabMenu li").removeClass("active");
		$(this).addClass("active");
		$(".ttab-cont").hide();

		var activeTab = $(this).find("a").attr("href");
		$(activeTab).show();
		return false;
	});

});


// 중첩탭
	$(document).ready(function() {
		//nested tab 1
		$("#nestedtab1").dynatabs({
			tabBodyID : 'nestedtabbody1',
			showCloseBtn : true,
			confirmDelete : true
		});
		//nested tab 2
		$("#nestedtab2").dynatabs({
			tabBodyID : 'nestedtabbody2',
			showCloseBtn : true,
			confirmDelete : true
		});
		//nested tab 3
		$("#nestedtab3").dynatabs({
			tabBodyID : 'nestedtabbody3',
			showCloseBtn : true,
			confirmDelete : true
		});
	});
(
	function($){
		
		var ctTab = Object();
		var ctKey = Object();
		var tabList = Object();
		
		$.fn.dynatabs = function(options){
			
			var tabs = $(this.selector);			
			var settings = $.extend({
				
				tabBodyID : 'tabbody',
				defaultTab: 0, //default is 0 - first tab
				deactiveClass : 'unselected',
				activeClass : 'selected',
				showCloseBtn : false, //shows the close button on the tabs
				closeableClass : 'closeable',
				tabLoaderClass : 'tabLoader',
				confirmDelete : false,
				confirmMessage : 'Delete Tab?',
				switchToNewTab : true,
				debug : false
				
			},options);
			
			$.fn.debug = function(message){
				if(settings.debug)
				{
					if($.browser.webkit || $.browser.mozilla)
					{
						console.log(message);
					}
					else
					{
						alert('You have debug enabled in settings. It is only supported in Firefox and Chrome now.');
					}
				}
			};
			
			/**
			 * Function to show a tab
			 */
			$.fn.showTab = function(event){
			
				var ahref = event.data.ahref;
				var tab = event.data.tab;
				if(ahref != null)
				{
					$.fn.activateTab($(ahref).attr('href'), ahref, tab);
				}
				else
				{
					$.fn.debug('unable to show a null tab');
				}
			};
			
			
			
			$.fn.activateTab = function(key, ahref, tab){
				if(key != null && ahref != null && tab != null)
				{
					$.fn.debug(tab);
					$.fn.debug(key);
					$.fn.hideTab(ctKey[$(tab).attr('id')], ctTab[$(tab).attr('id')]);
					$(ahref).parent().addClass(settings.activeClass);
					$(key).show();
					ctKey[$(tab).attr('id')] = key;
					ctTab[$(tab).attr('id')] = ahref;
				}
			};
			
			$.fn.hideTab = function(key, ahref){
				
				if(key != null && ahref != null)
				{
					$(ahref).parent().removeClass(settings.activeClass);
					//$(ahref).parent().addClass(settings.deactiveClass);
					$(key).hide();
				}
				
			};
			
			/**
			 * Bind the on-click of each tab to showtab function
			 */
			$.fn.bindTabs = function(){
				$.each(tabs.find("li > a"), function(idx, a){
					//bind click function of the tab header
					$(a).bind('click',{ ahref: a, tab: tabs}, $.fn.showTab);					
					//show the close button if enabled in settings
					if(settings.showCloseBtn && $(a).find("span").length == 0)
					{
						$.fn.addCloseBtn(a);
					}
				});
			};
			
			$.fn.addCloseBtn = function(ahref){
				
				if(ahref != null)
				{
					this.debug('adding close button');
					var key = $(ahref).attr('href');
					if(key.length > 0)
					{
						$(ahref).append('<span class="' + settings.closeableClass + '"></span>');
						$(ahref).find("span").bind('click', { key: key, tab: tabs } ,$.fn.closeTab);
					}
				}
				
			};
			
					
			$.fn.initTabs = function(){
				
				//hide all tabs other than the default tab index
				var ct = 0;
				$.fn.debug('Tab Body ID -->' + settings.tabBodyID);
				$.each($("#" + settings.tabBodyID + " > div"), function(idx, div){
					if(ct != settings.defaultTab)
					{
						$.fn.debug('Hiding -- ' + div.outerHTML);
						$(div).hide();
						ct = ct + 1;
					}
					else
					{
						$.fn.debug('Showing -- ' + div.outerHTML);
						ct = ct + 1;
					}	
				});
				
				//add the selected class to the title also
				$.fn.debug(tabs);
				$.fn.debug('Tab Lengths --> ' + tabs.find("li").length);
				if(settings.defaultTab < tabs.find("li").length)
				{
					this.debug('setting active tab --> Index ' + settings.defaultTab);
					$(tabs.find("li")[settings.defaultTab]).removeClass(settings.deactiveClass);
					$(tabs.find("li")[settings.defaultTab]).addClass(settings.activeClass);
					ctTab[tabs.attr('id')] = $(tabs.find("li")[0]).find("a");
					ctKey[tabs.attr('id')] =  $(tabs.find("li")[0]).find("a").attr('href');
				}
				else
				{
					$.fn.debug('Index ' + settings.defaultTab + ' does not map to li');
				}
				
				//add close buttons as neccessary to all tabs and bind clicks
				this.bindTabs();
				//add tabs to the list
				tabList[tabs.attr('id')] = settings.tabBodyID;
			};
			
			this.initTabs();
		};
		
	}(jQuery)
);	