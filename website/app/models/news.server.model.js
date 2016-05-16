var mongoose=require('mongoose');
var NewsSchema=new mongoose.Schema(
	{
		name:String,
		sex: String,
		tel: String,
		email: String,
		part: String,
		introduce: String,
		createTime:{type:Date,default:Date.now}
	}
);
var News=mongoose.model('News',NewsSchema);
