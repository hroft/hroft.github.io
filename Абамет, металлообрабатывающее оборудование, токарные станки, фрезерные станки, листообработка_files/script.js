var jshover = function() {
	var sfEls = document.getElementById("horizontal-multilevel-menu").getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++) 
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
			arr=this.getElementsByTagName('a');
			for(i=0;i<arr.length;i++)
			{
				if (arr[i].id.substring(0,2)=='mi')
				{
				mi = arr[i];
				}
			}
			if (!document.getElementById('bx_top_panel_container'))mi.fireEvent('mouseenter');
		}
		sfEls[i].onmouseout=function() 
		{
			this.className=this.className.replace(new RegExp("jshover\\b"), "");
			arr=this.getElementsByTagName('a');
			if(arr[0].id.substring(0,2)=='mi')
			{
			    if (!document.getElementById('bx_top_panel_container')) arr[0].fireEvent('mouseleave');
			}
		}
	}
}

//if (window.attachEvent)
//if (!document.getElementById('bx_top_panel_container')) window.addEvent("domready", jshover);