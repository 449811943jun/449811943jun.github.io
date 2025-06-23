function diff(startTime) {
		  var start = new Date(startTime);
		  var end = new Date();
		 
		  var diff = end.getTime() - start.getTime(); // 返回时间差的毫秒数
		 
		  // 转换为天、小时、分钟和秒
		  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((diff % (1000 * 60)) / 1000);
		 
		  return days + "天 " + hours + "小时 " + minutes + "分钟 " + seconds + "秒";
		}
		function diff2(date1) {
		    // 将日期字符串转换为Date对象
		    const d1 = new Date(date1);
		    const d2 = new Date();
		 
		    // 获取时间差（毫秒）
		    const diff = d2.getTime() - d1.getTime();
		 //alert(diff);
		    // 转换为秒
		    const diffInSeconds = diff / 1000;
		 
		    // 转换为分钟、小时、天等（按需转换）
		    const diffInMinutes = diffInSeconds / 60;
		    const diffInHours = diffInMinutes / 60;
		    const diffInDays = diffInHours / 24;
			const diffInMonths = diffInDays / 30;
			const diffInYears = diffInMonths / 365;
			let arr=[diffInYears,diffInMonths,diffInDays,diffInHours,diffInMinutes,diffInSeconds];
			var yy='相差'+xx[1]+'月\r\n相差'+xx[2]+'日\r\n相差'+xx[3]+'时\r\n相差'+xx[4]+'分\r\n相差'+xx[5]+'秒';
		    return yy;
		}
		 
		function get(){
		var year=document.getElementById('year').value;
		var month=document.getElementById('month').value;
		var day=document.getElementById('day').value;
		var clock=document.getElementById('clock').value;
		var fen=document.getElementById('fen').value;
		if(year==""){year=2024;}
		if(month==""){month=1;}
		if(day==""){day=1;}
		if(clock==""){clock=0;}
		if(fen==""){fen=0;}
		if(month<10&&month.length<2){month="0"+month;}
		//alert(month);
		if(day<10&&day.length<2){day="0"+day;}
		if(clock<10&&clock.length<2){clock="0"+clock;}
		if(fen<10&&fen.length<2){fen="0"+fen;}
		var zz1=year+"-"+month+"-"+day+"T"+clock;
		//zz1=string(zz1);
		let time1 = new Date(zz1+':'+fen+':00');
		//alert(time1);
		//var yy=dateToTimestamp(time1);
		//alert(time1.getTime());
		//alert(yy);
		let xx = diff(time1);
		document.getElementById('countdowndays').innerText=xx;
}
 
// 设置每秒执行一次，1000毫秒等于1秒
setInterval(get, 1000);