/**
 * ApiController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    pride:function(req,res){
        let firstNumber = req.param('firstNumber');
        let secondNumber = req.param('secondNumber');
        var startTimeStamp = new Date();
        var startHours = startTimeStamp.getHours();
        var startMinutes = startTimeStamp.getMinutes();
        var startSeconds = startTimeStamp.getSeconds();
        var startMilliSeconds = startTimeStamp.getMilliseconds();
        var startTime = startHours+" H, "+startMinutes+" M, "+startSeconds+" S, "+startMilliSeconds+" MS ";
        
        let sum = 0;
        for(var i =0;i<100000;i++){
            sum = parseInt(firstNumber) + parseInt(secondNumber);
        }
        
        var finalTimeStamp = new Date(); 
        var finalHours = finalTimeStamp.getHours();
        var finalMinutes = startTimeStamp.getMinutes();
        var finalSeconds = finalTimeStamp.getSeconds();
        var endMilliSeconds = finalTimeStamp.getMilliseconds();
        var endTime = finalHours+" H, "+finalMinutes+" M, "+finalSeconds+" S, "+endMilliSeconds+" MS ";
        
        var timeDifferenceHours = finalHours - startHours;
        var timeDifferenceMinutes = finalMinutes - startMinutes;
        var timeDifferenceSeconds = finalSeconds - startSeconds; 
        var timeDifferenceMilliSeconds = (endMilliSeconds - startMilliSeconds);
        var totalTimeDiffernece = timeDifferenceHours+" H, "+timeDifferenceMinutes+" M, "+timeDifferenceSeconds+" S, "+timeDifferenceMilliSeconds+" MS";
        return res.json({"startTime":startTime, "sum":sum, "endTime":endTime, "timeDifference:":totalTimeDiffernece});
      },
};

