var baseurl="http://52.221.231.42:9500/"

angular.module('pagespeed')
.controller('homectrl',['$scope','$http','$location','$cookies',function($scope,$http,$location,$cookies,$localStorage,$interval){

	var  mobile_div="background-image:url(pageinsights/images/mobile1.png); height: 409px; width: 306px;";
					  $scope.div=mobile_div;
	$scope.submit=function(data){
		$scope.mbody=false;
			console.log(data)
		 console.log(data.url)
		 var dd=data.url;
		if(data == undefined || data.url == "")
		{   $scope.over_view=false;
			$scope.mbody=false;
			$scope.message="Enter URL";
			
			localStorage.clear('path');

		}
		
		else
		{
			console.log("kkkkkkkkkkkkkkkkkkkkkkkkk")
			$scope.message='';
			
			$scope.mbody=true;
			console.log(baseurl);
			
			$http.get(baseurl+'api/urlMD?data='+data.url)
			.success(function(res)
			{
				var domain = dd.replace('http://','').replace('https://','').split(/[/?#]/)[0];
				$scope.over_view=true;
					var str=JSON.stringify(res)
					var b=JSON.parse(str);
					var scoreJSON=JSON.parse(b.Mobiledata)
					var desktopScore = JSON.parse(b.Desktopdata)
					$scope.url = scoreJSON.score;
					
					$scope.url1 = desktopScore.score;
										
					localStorage.setItem('score', $scope.url);
					localStorage.setItem('deskSCore', $scope.url1);
					
					
					$scope.mobileScore=$scope.url+"/100";	
		
							/* dynamically mobile mobile show details*/

								$scope.mbody=false;
						
						$scope.icon_view="width: 210px;"
						var  mobile_div="background-image:url(pageinsights/images/mobile1.png);height: 247px;width:292px;background-repeat: no-repeat;background-size: 60%;";
						$scope.div=mobile_div;
						var mobile_h="175px";
						var mobile_w="98px";
						var mobile_margine="margin-left:39px !important ;margin-top:35px";
						$scope.height=mobile_h;
						$scope.width=mobile_w;
						$scope.margin=mobile_margine;
						$scope.imgpath='pageinsights/screenshots/'+domain+'.png';
						localStorage.setItem('path', $scope.imgpath);
					  
						$scope.type="Mobile";
                                              




                       	//Desktop values
   
         //checking for OptimizeImages
     
			var OptimizeImages_array= [];
      
			var OptimizeImages=desktopScore.formattedResults.ruleResults.OptimizeImages;
      if(OptimizeImages.urlBlocks!=undefined)
		{    
			var desktop_optimizeimage=OptimizeImages.localizedRuleName;
      
			var OptimizeImagesLen=OptimizeImages.urlBlocks.length;
      
			for(var i=0;i<OptimizeImagesLen;i++)
				{
					if(OptimizeImages.urlBlocks[i].urls!=undefined)
					{
						var OptimizeImagesUrlLen = OptimizeImages.urlBlocks[i].urls.length;
        
						for(var j=0;j<OptimizeImagesUrlLen;j++)
							{
								if(OptimizeImages.urlBlocks[i].urls[j].result!=undefined)
								{
          
									if(OptimizeImages.urlBlocks[i].urls[j].result.args!=undefined)
										{
          
											var desk_agrs_len=OptimizeImages.urlBlocks[i].urls[j].result.args.length;
											for (var k=0;k<desk_agrs_len;k++)
											{
            
												if(OptimizeImages.urlBlocks[i].urls[j].result.args[k].value!=undefined)
												{
              
													OptimizeImages_array.push(OptimizeImages.urlBlocks[i].urls[j].result.args[k].value);
             
												}
												else
												{
													
												}
												
											}
										}
										else
										{
											
										}
										
          
								}
								else
								{
									
								}
									
							}
					}
					else
					{
						
					}
				}
		}
		else
		{
			
		}
			
							//checking for MainResourceServerResponseTime
					 
					 
	var MainResourceServerResponseTime_array= [];
	var MainResourceServerResponseTime=desktopScore.formattedResults.ruleResults.MainResourceServerResponseTime;
	if(MainResourceServerResponseTime.urlBlocks!=undefined)
		{
	 	   var desktop_MainResourceServerResponseTime=MainResourceServerResponseTime.localizedRuleName;
		   var urlBlock_len=MainResourceServerResponseTime.urlBlocks.length;
						
		   for(var i=0;i<urlBlock_len;i++)
			{
				if(MainResourceServerResponseTime.urlBlocks[i].urls!=undefined)
					{
					 var resourceLen = MainResourceServerResponseTime.urlBlocks[i].urls.length;
								
					 for(var j=0;j<resourceLen;j++)
						{
							if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result!=undefined)
							{
								if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args!=undefined)
									{
									var desk_agrs_len=MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args.length;
									for (var k=0;k<desk_agrs_len;k++)
										{
										if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args[k].value!=undefined)
											{
													
												 MainResourceServerResponseTime_array.push(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args[k].value)
													
											}
											else
											{
												
											}
											
										}
									}
									else
									{
										
									}
										
										
							}
							else
							{
								
							}
									
						}
					}
					else
					{
						
					}
			}
		}
		else
		{
			
		}
					
													
				//checking for LeverageBrowserCaching
					 
					 
	var LeverageBrowserCaching_array= [];

	var LeverageBrowserCaching=desktopScore.formattedResults.ruleResults.LeverageBrowserCaching;
	if(LeverageBrowserCaching.urlBlocks!=undefined)
        {
		 	var desktop_LeverageBrowserCaching=LeverageBrowserCaching.localizedRuleName;
			var urlBlock_len=LeverageBrowserCaching.urlBlocks.length;
			for(var i=0;i<urlBlock_len;i++)
			{
			    if(LeverageBrowserCaching.urlBlocks[i].urls!=undefined)
				{
				    var resourceLen = LeverageBrowserCaching.urlBlocks[i].urls.length;
					for(var j=0;j<resourceLen;j++)
					{
						if(LeverageBrowserCaching.urlBlocks[i].urls[j].result!=undefined)
						{
							if(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args!=undefined)
							{
											
								var desk_agrs_len=LeverageBrowserCaching.urlBlocks[i].urls[j].result.args.length;
								for (var k=0;k<desk_agrs_len;k++)
								{
									if(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args[k].value!=undefined)
									{
										LeverageBrowserCaching_array.push(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args[k].value);
													
									}
									else
									{
										
									}
												
								}
							}
							else
							{
								
							}
								
						}
						else
						{
							
						}
									
					}
				}
				else
				{
					
				}
			}
		}
		else
		{
			
		}
					 
							
													
					//checking for MinimizeRenderBlockingResources
					 
    var MinimizeRenderBlockingResources_array=[];
	var MinimizeRenderBlockingResources=desktopScore.formattedResults.ruleResults.MinimizeRenderBlockingResources;
	if(MinimizeRenderBlockingResources.urlBlocks!=undefined)
	{
     	var desktop_MinimizeRenderBlockingResources=MinimizeRenderBlockingResources.localizedRuleName;
		var urlBlock_len=MinimizeRenderBlockingResources.urlBlocks.length;
		for(var i=0;i<urlBlock_len;i++)
		{
				if(MinimizeRenderBlockingResources.urlBlocks[i].urls!=undefined)
				{
					var resourceLen = MinimizeRenderBlockingResources.urlBlocks[i].urls.length;
					for(var j=0;j<resourceLen;j++)
					{
						if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result!=undefined)
						{
										
							if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args!=undefined)
							{
								var desk_agrs_len=MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args.length;
								for (var k=0;k<desk_agrs_len;k++)
								{
												
									if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args[k].value!=undefined)
									{
													
										MinimizeRenderBlockingResources_array.push(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args[k].value)
													
									}
									else
									{
										
									}
												
								}
							}
							else
							{
								
							}
						}
						else
						{
							
						}
					}
				}
				else
				{
					
				}
		}
	}
	else
	{
		
	}
		 							
													
													
					
			//Checking for MinifyCss
			
			
    var MinifyCss_array= [];
      
    var MinifyCss=desktopScore.formattedResults.ruleResults.MinifyCss;
    if(MinifyCss.urlBlocks!=undefined)
    {    
      	var desktop_MinifyCss=MinifyCss.localizedRuleName;
        var MinifyCssLen=MinifyCss.urlBlocks.length;
        for(var i=0;i<MinifyCssLen;i++)
		{
			if(MinifyCss.urlBlocks[i].urls!=undefined)
			{
				var MinifyCssLenUrlLen = MinifyCss.urlBlocks[i].urls.length;
				for(var j=0;j<MinifyCssLenUrlLen;j++)
				{
					if(MinifyCss.urlBlocks[i].urls[j].result!=undefined)
					{
					    if(MinifyCss.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=MinifyCss.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
								if(MinifyCss.urlBlocks[i].urls[j].result.args[k].value!=undefined)
									{
									  
									 MinifyCss_array.push(MinifyCss.urlBlocks[i].urls[j].result.args[k].value);
									 
									}
									else
									{
										
									}
									
							}
						}
						else
						{
							
						}
								
								  
					}
					else
					{
						
					}
								
				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
							


	  
	  
	  		//Checking for MinifyHTML
			
			
    var MinifyHTML_array= [];
    var MinifyHTML=desktopScore.formattedResults.ruleResults.MinifyHTML;
    if(MinifyHTML.urlBlocks!=undefined)
    {    
      	var desktop_MinifyHTML=MinifyHTML.localizedRuleName;
      	var MinifyHTMLLen=MinifyHTML.urlBlocks.length;
		for(var i=0;i<MinifyHTMLLen;i++)
		{
			if(MinifyHTML.urlBlocks[i].urls!=undefined)
			{
				var MinifyHTMLLenUrlLen = MinifyHTML.urlBlocks[i].urls.length;
				for(var j=0;j<MinifyHTMLLenUrlLen;j++)
				{
					if(MinifyHTML.urlBlocks[i].urls[j].result!=undefined)
					{
						if(MinifyHTML.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=MinifyHTML.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
								{
    								if(MinifyHTML.urlBlocks[i].urls[j].result.args[k].value!=undefined)
									{

										MinifyHTML_array.push(MinifyHTML.urlBlocks[i].urls[j].result.args[k].value);

									}
									else
									{
										
									}
										
								}
						}
						else
						{
							
							
						}
										
					}
					else
					{
						
					}
										
				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
										


							
					   //checking for EnableGzipCompression
	var EnableGzipCompression_array=[];
	var EnableGzipCompression=desktopScore.formattedResults.ruleResults.EnableGzipCompression;
    if(EnableGzipCompression.urlBlocks!=undefined)
	{
		var EnableGzipCompression_name=EnableGzipCompression.localizedRuleName;
		var EnableGzipCompressionLen=EnableGzipCompression.urlBlocks.length;
		for(var i=0;i<EnableGzipCompressionLen;i++)
		{
			if(EnableGzipCompression.urlBlocks[i].urls!=undefined)
			{
				var EnableGzipCompressionUrlLen = EnableGzipCompression.urlBlocks[i].urls.length;
				for(var j=0;j<EnableGzipCompressionUrlLen;j++)
				{
					if(EnableGzipCompression.urlBlocks[i].urls[j].result!=undefined)
					{
						if(EnableGzipCompression.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=EnableGzipCompression.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
								if(EnableGzipCompression.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
									EnableGzipCompression_array.push(EnableGzipCompression.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}
						else
						{
							
						}
										
										
					}
					else
					{
						
					}

				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
					
													
	  
				 Desktop_Data={	"OptimizeImages":OptimizeImages_array,
								"desktop_optimizeimage":desktop_optimizeimage,
								"MainResourceServerResponseTime":MainResourceServerResponseTime_array,
								"desktop_MainResourceServerResponseTime":desktop_MainResourceServerResponseTime,
								"LeverageBrowserCaching":LeverageBrowserCaching_array,
								"desktop_LeverageBrowserCaching":desktop_LeverageBrowserCaching,
								"MinimizeRenderBlockingResources":MinimizeRenderBlockingResources_array,
								"desktop_MinimizeRenderBlockingResources":desktop_MinimizeRenderBlockingResources,
								"MinifyCss":MinifyCss_array,
								"desktop_MinifyCss":desktop_MinifyCss,
								"MinifyHTML":MinifyHTML_array,
								"desktop_MinifyHTML":desktop_MinifyHTML,
								"EnableGzipCompression":EnableGzipCompression_array,
								"desktop_EnableGzipCompression":EnableGzipCompression_name
							 
         				 }


                       		localStorage.setItem('Desktop_Data', JSON.stringify(Desktop_Data));









         						 //Mobile Values
			
				//checking for OptimizeImages
	var Mobile_OptimizeImages_array=[];
	var OptimizeImages=scoreJSON.formattedResults.ruleResults.OptimizeImages;
    if(OptimizeImages.urlBlocks!=undefined)
	{
		var Mobile_OptimizeImages_name=OptimizeImages.localizedRuleName;
		var OptimizeImagesLen=OptimizeImages.urlBlocks.length;
		for(var i=0;i<OptimizeImagesLen;i++)
		{
			if(OptimizeImages.urlBlocks[i].urls!=undefined)
			{
				var OptimizeImagesUrlLen = OptimizeImages.urlBlocks[i].urls.length;
				for(var j=0;j<OptimizeImagesUrlLen;j++)
				{
					if(OptimizeImages.urlBlocks[i].urls[j].result!=undefined)
					
					{
										
						if(OptimizeImages.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=OptimizeImages.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
												
								if(OptimizeImages.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
									Mobile_OptimizeImages_array.push(OptimizeImages.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}else
						{
							
						}
										
										
					}
					else
					{
						
					}
									
				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
					
												
													
					//checking for MainResourceServerResponseTime
					 
	var Mobile_MainResourceServerResponseTime_array=[];
	var MainResourceServerResponseTime=scoreJSON.formattedResults.ruleResults.MainResourceServerResponseTime;
	if(MainResourceServerResponseTime.urlBlocks!=undefined)
	{
		var Mobile_MainResourceServerResponseTime_name=MainResourceServerResponseTime.localizedRuleName;
		var urlBlock_len=MainResourceServerResponseTime.urlBlocks.length;
		for(var i=0;i<urlBlock_len;i++)
		{
			if(MainResourceServerResponseTime.urlBlocks[i].urls!=undefined)
			{
				var resourceLen = MainResourceServerResponseTime.urlBlocks[i].urls.length;
				for(var j=0;j<resourceLen;j++)
				{
					if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result!=undefined)
					{
						if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args!=undefined)
						{
											
							var desk_agrs_len=MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
												
								if(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
													
									Mobile_MainResourceServerResponseTime_array.push(MainResourceServerResponseTime.urlBlocks[i].urls[j].result.args[k].value)
													
								}
												
							}
						}
										
										
					}
				}
			}
		}
	}
					 

				//checking for LeverageBrowserCaching
	var Mobile_LeverageBrowserCaching_array=[];
	var LeverageBrowserCaching=scoreJSON.formattedResults.ruleResults.LeverageBrowserCaching;
	if(LeverageBrowserCaching.urlBlocks!=undefined)
	{
		var Mobile_LeverageBrowserCaching_name=LeverageBrowserCaching.localizedRuleName;
		var urlBlock_len=LeverageBrowserCaching.urlBlocks.length;
		for(var i=0;i<urlBlock_len;i++)
		{
			if(LeverageBrowserCaching.urlBlocks[i].urls!=undefined)
			{
				var resourceLen = LeverageBrowserCaching.urlBlocks[i].urls.length;
				for(var j=0;j<resourceLen;j++)
				{
					if(LeverageBrowserCaching.urlBlocks[i].urls[j].result!=undefined)
					{
						if(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=LeverageBrowserCaching.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
								if(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
									Mobile_LeverageBrowserCaching_array.push(LeverageBrowserCaching.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}
						else
						{
							
						}
										
					}
					else
					{
						
					}
									
				}
			}
			else{
				
			}
		}
	}
	else
	{
		
	}
													
													
													
					//checking for MinimizeRenderBlockingResources
					 
	var Mobile_MinimizeRenderBlockingResources_array=[];
	var MinimizeRenderBlockingResources=scoreJSON.formattedResults.ruleResults.MinimizeRenderBlockingResources;
	if(MinimizeRenderBlockingResources.urlBlocks!=undefined)
	{
	 	var Mobile_MinimizeRenderBlockingResources_name=MinimizeRenderBlockingResources.localizedRuleName;
		var urlBlock_len=MinimizeRenderBlockingResources.urlBlocks.length;
		for(var i=0;i<urlBlock_len;i++)
		{
			if(MinimizeRenderBlockingResources.urlBlocks[i].urls!=undefined)
			{
				var resourceLen = MinimizeRenderBlockingResources.urlBlocks[i].urls.length;
				for(var j=0;j<resourceLen;j++)
				{
					if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result!=undefined)
					{
										
						if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var desk_agrs_len=MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<desk_agrs_len;k++)
							{
												
								if(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
													
									Mobile_MinimizeRenderBlockingResources_array.push(MinimizeRenderBlockingResources.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}
						else
						{
							
						}
										
					}
					else
					{
						
					}
									
				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
					 		
					 
	//checking for MinifyCss
	var Mobile_MinifyCss_array=[];
	var MinifyCss=scoreJSON.formattedResults.ruleResults.MinifyCss;
	if(MinifyCss.urlBlocks!=undefined)
	{
    	var Mobile_MinifyCss_name=MinifyCss.localizedRuleName;
		var MinifyCssLen=MinifyCss.urlBlocks.length;
		for(var i=0;i<MinifyCssLen;i++)
		{
			if(MinifyCss.urlBlocks[i].urls!=undefined)
			{
				var MinifyCssUrlLen = MinifyCss.urlBlocks[i].urls.length;
				for(var j=0;j<MinifyCssUrlLen;j++)
				{
					if(MinifyCss.urlBlocks[i].urls[j].result!=undefined)
					{
										
						if(MinifyCss.urlBlocks[i].urls[j].result.args!=undefined)
						{
											
							var Mobile_agrs_len=MinifyCss.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<Mobile_agrs_len;k++)
							{
												
								if(MinifyCss.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
													
								     Mobile_MinifyCss_array.push(MinifyCss.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}
						else
						{
							
						}
										
										
					}
					else
					{
						
					}
				}
			}
			else
			{
				
			}
		}
	}
	else
	{
		
	}
					 
						//Checking for MinifyHTML
			
			
	var Mobile_MinifyHTML_array= [];
    var Mobile_MinifyHTML=scoreJSON.formattedResults.ruleResults.MinifyHTML;
    if(Mobile_MinifyHTML.urlBlocks!=undefined)
    {    
		var Mobile_MinifyHTML_name=Mobile_MinifyHTML.localizedRuleName;
		var Mobile_MinifyHTMLLen=Mobile_MinifyHTML.urlBlocks.length;
		for(var i=0;i<Mobile_MinifyHTMLLen;i++)
		{
			if(Mobile_MinifyHTML.urlBlocks[i].urls!=undefined)
			{
				var Mobile_MinifyHTMLLenUrlLen = Mobile_MinifyHTML.urlBlocks[i].urls.length;
				for(var j=0;j<Mobile_MinifyHTMLLenUrlLen;j++)
				{
					if(Mobile_MinifyHTML.urlBlocks[i].urls[j].result!=undefined)
					{
						if(Mobile_MinifyHTML.urlBlocks[i].urls[j].result.args!=undefined)
						{
									  
							var mobile_agrs_len=Mobile_MinifyHTML.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<mobile_agrs_len;k++)
							{
										
								if(Mobile_MinifyHTML.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
										  
									Mobile_MinifyHTML_array.push(Mobile_MinifyHTML.urlBlocks[i].urls[j].result.args[k].value);
										 
								}
								else
								{
									
								}
										
							}
						}
						else
						{
							
						}
									  
					} 
					else
					{
						
					}
									 
				}
			}
			else{
				
			}
		}
	}
	
	else
	{
		
	}
	
								  
							
					   			//checking for EnableGzipCompression
	var Mobile_EnableGzipCompression_array=[];
	var EnableGzipCompression=scoreJSON.formattedResults.ruleResults.EnableGzipCompression;
    if(EnableGzipCompression.urlBlocks!=undefined)
	{
    	var Mobile_EnableGzipCompression_name=EnableGzipCompression.localizedRuleName;
		var EnableGzipCompressionLen=EnableGzipCompression.urlBlocks.length;
		for(var i=0;i<EnableGzipCompressionLen;i++)
		{
			if(EnableGzipCompression.urlBlocks[i].urls!=undefined)
			{
				var EnableGzipCompressionLen = EnableGzipCompression.urlBlocks[i].urls.length;
				for(var j=0;j<EnableGzipCompressionUrlLen;j++)
				{
					if(EnableGzipCompression.urlBlocks[i].urls[j].result!=undefined)
					{
						if(EnableGzipCompression.urlBlocks[i].urls[j].result.args!=undefined)
						{
							var Mobile_agrs_len=EnableGzipCompression.urlBlocks[i].urls[j].result.args.length;
							for (var k=0;k<Mobile_agrs_len;k++)
							{
								if(EnableGzipCompression.urlBlocks[i].urls[j].result.args[k].value!=undefined)
								{
													
									Mobile_EnableGzipCompression_array.push(EnableGzipCompression.urlBlocks[i].urls[j].result.args[k].value)
													
								}
								else
								{
									
								}
												
							}
						}
						else
						{
							
						}
										
										
					}
					else
					{
						
					}
									
				}
			}
			else{
				
				
			}
		}
	}
	else
	{
		
	}
					 
													

													
																			


 

                      
            var show="Show how to fix";
            if(Mobile_OptimizeImages_array!="")
            {
                $scope.show1=show;
                $scope.fixer_1=true;

			    collapseOne = document.getElementById("collapseOne");
			    $scope.heading1=Mobile_OptimizeImages_name;
			    Mobile_OptimizeImages_array.forEach(function(currentValue)
					{
						collapseOne.innerHTML = collapseOne.innerHTML+ currentValue + "<br />";

    				})


            }
			else
			{
				
			}
                       


 			if(Mobile_MainResourceServerResponseTime_array!="")
            {
                $scope.fixer_2=true;
                $scope.show2=show;
                $scope.heading2=Mobile_MainResourceServerResponseTime_name;
                collapseTwo = document.getElementById("collapseTwo");
				Mobile_MainResourceServerResponseTime_array.forEach(function(currentValue)
				{
					collapseTwo.innerHTML = collapseTwo.innerHTML+ currentValue + "<br />";

                })


            }
			else
			{
				
			}

 										

            if(Mobile_LeverageBrowserCaching_array!="")
            {

                $scope.fixer_3=true;
                $scope.show3=show;
                $scope.heading3=Mobile_LeverageBrowserCaching_name;
                collapseThree = document.getElementById("collapseThree");
				Mobile_LeverageBrowserCaching_array.forEach(function(currentValue)
				{
					collapseThree.innerHTML = collapseThree.innerHTML+ currentValue + "<br />";

                })


            }
			else
			{
				
			}
                       
                           
			if(Mobile_MinimizeRenderBlockingResources_array!="")
			{
				$scope.fixer_4=true;
				$scope.show4=show;
				$scope.heading4=Mobile_MinimizeRenderBlockingResources_name;
				collapseFour = document.getElementById("collapseFour");
				Mobile_MinimizeRenderBlockingResources_array.forEach(function(currentValue)
				{
					collapseFour.innerHTML = collapseFour.innerHTML+ currentValue + "<br />";
				})


            }
			else
			{
				
			}
             					   
		    if(Mobile_MinifyCss_array!="")
            {

                $scope.fixer_5=true;
                $scope.show5=show;
                $scope.heading5=Mobile_MinifyCss_name;
                collapseFive = document.getElementById("collapseFive");
				Mobile_MinifyCss_array.forEach(function(currentValue)
				{
					collapseFive.innerHTML = collapseFive.innerHTML+ currentValue + "<br />";
				})

            }
			else
			{
				
			}
                       								
													
                    

					
			if(Mobile_MinifyHTML_array!="")
            {
                $scope.fixer_6=true;
                $scope.show6=show;
                $scope.heading6=Mobile_MinifyHTML_name;
            	collapseThree = document.getElementById("collapseSix");
				Mobile_MinifyHTML_array.forEach(function(currentValue)
				{
					collapseSix.innerHTML = collapseSix.innerHTML+ currentValue + "<br />";
				})


            }
			else
			{
				
			}
                       	
					
			if(Mobile_EnableGzipCompression_array!="")
            {

                $scope.fixer_7=true;
            	$scope.show7=show;
                $scope.heading7=Mobile_EnableGzipCompression_name;
                collapseSeven = document.getElementById("collapseSeven");
				Mobile_EnableGzipCompression_array.forEach(function(currentValue)
				{
					collapseSeven.innerHTML = collapseSeven.innerHTML+ currentValue + "<br />";
			   })

			}
			else
			{
				
			}
                       
					
		    Mobile_Data={	"Mobile_OptimizeImages_name":Mobile_OptimizeImages_name,
						   "Mobile_OptimizeImages_array":Mobile_OptimizeImages_array,
						   "Mobile_MainResourceServerResponseTime_name":Mobile_MainResourceServerResponseTime_name,
						   "Mobile_MainResourceServerResponseTime_array":Mobile_MainResourceServerResponseTime_array,
						   "Mobile_LeverageBrowserCaching_name":Mobile_LeverageBrowserCaching_name,
						   "Mobile_LeverageBrowserCaching_array":Mobile_LeverageBrowserCaching_array,
						   "Mobile_MinimizeRenderBlockingResources_name":Mobile_MinimizeRenderBlockingResources_name,
						   "Mobile_MinimizeRenderBlockingResources_array":Mobile_MinimizeRenderBlockingResources_array,
						   "Mobile_MinifyCss_name":Mobile_MinifyCss_name,
						   "Mobile_MinifyCss_array":Mobile_MinifyCss_array,
						   "Mobile_MinifyHTML_name":Mobile_MinifyHTML_name,
						   "Mobile_MinifyHTML_array":Mobile_MinifyHTML_array,
						   "Mobile_EnableGzipCompression_name":Mobile_EnableGzipCompression_name,
						   "Mobile_EnableGzipCompression_array":Mobile_EnableGzipCompression_array

                                            
						}
                                localStorage.setItem('Mobile_Data', JSON.stringify(Mobile_Data));











					
		})
 }
	}
	
	
	$scope.mobileScores=function()
	{
         $scope.icon_view="width: 210px;"
							

			collapseOne = document.getElementById("collapseOne");
			collapseOne.innerHTML ="";

			collapseTwo = document.getElementById("collapseTwo");
			collapseTwo.innerHTML ="";
			
			collapseThree = document.getElementById("collapseThree");
			collapseThree.innerHTML ="";

			collapseFour = document.getElementById("collapseFour");
			collapseFour.innerHTML ="";
			
			collapseFive = document.getElementById("collapseFive");
			collapseFive.innerHTML ="";
			
			collapseSix = document.getElementById("collapseSix");
			collapseSix.innerHTML ="";
			
			collapseSeven = document.getElementById("collapseSeven");
			collapseSeven.innerHTML ="";
			   $scope.fixer_1=false;
			   $scope.fixer_2=false;
			   $scope.fixer_3=false;
			   $scope.fixer_4=false;
			   $scope.fixer_5=false;
			   $scope.fixer_6=false;
			   $scope.fixer_7=false;



				$scope.type="Mobile";
				
				var  mobile_div="background-image:url(pageinsights/images/mobile1.png);height: 247px;width:292px;background-repeat: no-repeat;background-size: 60%;";
				  $scope.div=mobile_div;
				  var mobile_h="175px";
				var mobile_w="98px";
				var mobile_margine="margin-left:39px !important ;margin-top:35px";
				  $scope.height=mobile_h;
				  $scope.width=mobile_w;
				  $scope.margin=mobile_margine;
				
				var score=localStorage.getItem('score');
				$scope.mobileScore=score+"/100";
				
				$scope.imgpath=localStorage.getItem('path');
				var Mobile_Data=JSON.parse(localStorage.getItem('Mobile_Data'));


		// Mobile button working....

						   var show="Show how to fix";
						
		  
							   if(Mobile_Data.Mobile_OptimizeImages_array!="")
							   {
									$scope.show1=show;

									 $scope.fixer_1=true;

									  collapseOne = document.getElementById("collapseOne");
									  $scope.heading1=Mobile_Data.Mobile_OptimizeImages_name;
									  
									  Mobile_Data.Mobile_OptimizeImages_array.forEach(function(currentValue){
									  
										collapseOne.innerHTML = collapseOne.innerHTML+ currentValue + "<br />";
										
									  })


							   }
							   else
							   {
									

							   }


								if(Mobile_Data.Mobile_MainResourceServerResponseTime_array!="")
								{

									$scope.fixer_2=true;
									$scope.show2=show;
									$scope.heading2=Mobile_Data.Mobile_MainResourceServerResponseTime_name;
								  
									collapseTwo = document.getElementById("collapseTwo");
									  Mobile_Data.Mobile_MainResourceServerResponseTime_array.forEach(function(currentValue){
										collapseTwo.innerHTML = collapseTwo.innerHTML+ currentValue + "<br />";


									  })


							   }
							   else
							   {



							   }
												

								if(Mobile_Data.Mobile_LeverageBrowserCaching_array!="")
							   {

									 $scope.fixer_3=true;

								$scope.show3=show;
								 $scope.heading3=Mobile_Data.Mobile_LeverageBrowserCaching_name;
								  


									collapseThree = document.getElementById("collapseThree");
									  Mobile_Data.Mobile_LeverageBrowserCaching_array.forEach(function(currentValue){
									   collapseThree.innerHTML = collapseThree.innerHTML+ currentValue + "<br />";


									  })


							   }
							   else
							   {


							   }
							   if(Mobile_Data.Mobile_MinimizeRenderBlockingResources_array!="")
							   {

									 $scope.fixer_4=true;

								 $scope.show4=show;
								 $scope.heading4=Mobile_Data.Mobile_MinimizeRenderBlockingResources_name;

								  collapseFour = document.getElementById("collapseFour");
									
									Mobile_Data.Mobile_MinimizeRenderBlockingResources_array.forEach(function(currentValue){
									   collapseFour.innerHTML = collapseFour.innerHTML+ currentValue + "<br />";
								   })


							   }
							   else
							   {


							   }
							   
							   
							   if(Mobile_Data.Mobile_MinifyCss_array!="")
							   {

									 $scope.fixer_5=true;

								 $scope.show5=show;
								 $scope.heading5=Mobile_Data.Mobile_MinifyCss_name;

								  collapseFive = document.getElementById("collapseFive");
									 

									Mobile_Data.Mobile_MinifyCss_array.forEach(function(currentValue){
									   collapseFive.innerHTML = collapseFive.innerHTML+ currentValue + "<br />";
								   })


							   }
							   else
							   {


							   }
							   
								if(Mobile_Data.Mobile_MinifyHTML_array!="")
							   {

									 $scope.fixer_6=true;

								 $scope.show6=show;
								 $scope.heading6=Mobile_Data.Mobile_MinifyHTML_name;

								  collapseSix = document.getElementById("collapseSix");
									Mobile_Data.Mobile_MinifyHTML_array.forEach(function(currentValue){
									   collapseSix.innerHTML = collapseSix.innerHTML+ currentValue + "<br />";
								   })


							   }
							   else
							   {


							   }
							   
							   
								if(Mobile_Data.Mobile_EnableGzipCompression_array!="")
							   {

									 $scope.fixer_7=true;

								 $scope.show7=show;
								 $scope.heading7=Mobile_Data.Mobile_EnableGzipCompression_name;

								  collapseSeven = document.getElementById("collapseSeven");
									;
									Mobile_Data.Mobile_EnableGzipCompression_array.forEach(function(currentValue){
									   collapseSeven.innerHTML = collapseSeven.innerHTML+ currentValue + "<br />";
								   })


							   }
							   else
							   {


							   }
                      
					   
					   
					   									
					



	}
		
	$scope.desktopScore=function(){
		 $scope.icon_view="width: 331px;"


								 collapseOne = document.getElementById("collapseOne");

								 collapseOne.innerHTML ="";
								  collapseTwo = document.getElementById("collapseTwo");

								 collapseTwo.innerHTML ="";
								  collapseThree = document.getElementById("collapseThree");

								 collapseThree.innerHTML ="";
								  collapseFour = document.getElementById("collapseFour");

								 collapseFour.innerHTML ="";

								  collapseFive = document.getElementById("collapseFive");

								 collapseFive.innerHTML ="";
								 
								  collapseSix = document.getElementById("collapseSix");

								 collapseSix.innerHTML ="";
								 
								 collapseSeven = document.getElementById("collapseSeven");

								 collapseSeven.innerHTML ="";

							     $scope.fixer_1=false;
						         $scope.fixer_2=false;
						         $scope.fixer_3=false;
						         $scope.fixer_4=false;
						         $scope.fixer_5=false;
						         $scope.fixer_6=false;
						         $scope.fixer_7=false;




				           $scope.type="desktop";
				
				           var desk = localStorage.getItem('deskSCore');
				
				           $scope.mobileScore=desk+"/100";
				
				         $scope.imgpath=localStorage.getItem('path');
				
				       var  desk_div="background-image:url(pageinsights/images/492-imacframe2.png); height: 250px; width:305px;";
					  $scope.div=desk_div;

							  var desk_h="160px";
					  var desk_w="290px";
					  var desk_margine="margin-left:10px !important ;margin-top:12px";
					  $scope.height=desk_h;
					  $scope.width=desk_w;
					  $scope.margin=desk_margine;
					 var desktop_data=JSON.parse(localStorage.getItem('Desktop_Data'));
					

					   var show="Show how to fix";
							

							   if(Desktop_Data.OptimizeImages!="")
							   {
									$scope.show1=show;

									 $scope.fixer_1=true;

									  collapseOne = document.getElementById("collapseOne");
									  $scope.heading1=Desktop_Data.desktop_optimizeimage;
									  
									  Desktop_Data.OptimizeImages.forEach(function(currentValue)
									  {
									    collapseOne.innerHTML = collapseOne.innerHTML+ currentValue + "<br />";

									  })


							   }
							   else
							   {


							   }


									if(Desktop_Data.MainResourceServerResponseTime!="")
							   {

									 $scope.fixer_2=true;
								$scope.show2=show;
								 $scope.heading2=Desktop_Data.desktop_MainResourceServerResponseTime;
								  
								   collapseTwo = document.getElementById("collapseTwo");
									 

									 Desktop_Data.MainResourceServerResponseTime.forEach(function(currentValue)
									 {
									   collapseTwo.innerHTML = collapseTwo.innerHTML+ currentValue + "<br />";


									  })


							   }
							   else
							   {


									

							   }
												

								if(Desktop_Data.LeverageBrowserCaching!="")
							   {

									 $scope.fixer_3=true;

								$scope.show3=show;
								 $scope.heading3=Desktop_Data.desktop_LeverageBrowserCaching;
								  


									collapseThree = document.getElementById("collapseThree");
							
										Desktop_Data.LeverageBrowserCaching.forEach(function(currentValue)
										{
									   collapseThree.innerHTML = collapseThree.innerHTML+ currentValue + "<br />";


									  })


							   }
							   else
							   {

									
							   }
								   if(Desktop_Data.MinimizeRenderBlockingResources!="")
									{

										 $scope.fixer_4=true;

									 $scope.show4=show;
									 $scope.heading4=Desktop_Data.desktop_MinimizeRenderBlockingResources;

									  collapseThree = document.getElementById("collapseFour");
										 
										Desktop_Data.MinimizeRenderBlockingResources.forEach(function(currentValue){
										   collapseFour.innerHTML = collapseFour.innerHTML+ currentValue + "<br />";
									   })


								}
								else
								{

										

								}
								
							 if(Desktop_Data.MinifyCss!="")
									{

										 $scope.fixer_5=true;

									 $scope.show5=show;
									 $scope.heading5=Desktop_Data.desktop_MinifyCss;

									  collapseThree = document.getElementById("collapseFive");
										 
										 
										Desktop_Data.MinifyCss.forEach(function(currentValue){
										   collapseFive.innerHTML = collapseFive.innerHTML+ currentValue + "<br />";
									   })


								}
								else
								{

										
								}	
								
								
								 if(Desktop_Data.MinifyHTML!="")
									{

										 $scope.fixer_6=true;

									 $scope.show6=show;
									 $scope.heading6=Desktop_Data.desktop_MinifyHTML;

									  collapseThree = document.getElementById("collapseSix");
										 
									
										Desktop_Data.MinifyHTML.forEach(function(currentValue){
										   collapseSix.innerHTML = collapseSix.innerHTML+ currentValue + "<br />";
									   })


								}
								

								
								
								
								
								 if(Desktop_Data.EnableGzipCompression!="")
									{

										 $scope.fixer_7=true;

									 $scope.show7=show;
									 $scope.heading7=Desktop_Data.desktop_EnableGzipCompression;

									  collapseThree = document.getElementById("collapseSeven");
										 
										Desktop_Data.EnableGzipCompression.forEach(function(currentValue){
										   collapseSeven.innerHTML = collapseSeven.innerHTML+ currentValue + "<br />";
									   })


								}
								else
								{


								}	





               

		
		
	}	
		
}])

