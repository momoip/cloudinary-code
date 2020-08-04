// 8/3/20: @moip
// Example to generate an URL that concatenate 3 videos together each with trimming and top and bottom overlays.
// Can be modified based on customer's needs.
// Pre-requistes: 
// . set up node and .env with CLOUDINARY_URL
// . fill in v1,v2,v3 with videos, start offset and end offset and texts for each videos
// This code does not check the length of each videos to ensure the start and end offsets are correct.

var cloudinary = require('cloudinary').v2;
var st  = Date.now();

// Customize start
// ***************
// videos
var v1 = "gchmbbsr2tf16io8nldc";
var v2 = "xihnlf38lvnq3mkrjvjq";
var v3 = "x8wi9oxpbrs1cwwbtki5";

// start and end offsets for videos
var so_v1 = "2"
var eo_v1 = "4"
var so_v2 = "40"
var eo_v2 = "45"
var so_v3 = "2"
var eo_v3 = "4"

// text for each video
var t_top_v1  = "first top"
var t_bot_v1  = "first bottom"
var t_top_v2  = "second top"
var t_bot_v2  = "second bottom"
var t_top_v3  = "third top"
var t_bot_v3  = "third bottom"

// Customize end
// ***************

x = cloudinary.url(v1 + ".mp4", {
    resource_type:"video",
	transformation: [
        { variables:[["$w","708"], ["$h", "350"]]},
			{crop: "fill",width: "$w", height: "$h", start_offset:so_v1, end_offset:eo_v1},
				{overlay: {font_family: "impact", font_size:"24px", text: t_top_v1, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:30},
				{overlay: {font_family: "impact", font_size:"24px", text: t_bot_v1, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:240},	

			{overlay: "video:" + v2, crop:"fill", end_offset:"45", height: "$h",width: "$w", flags: "splice", start_offset:so_v2, end_offset:eo_v2},
				{overlay: {font_family: "impact", font_size:"24px", text: t_top_v2, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:30},
				{overlay: {font_family: "impact", font_size:"24px", text: t_bot_v2, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:240},	

			{overlay: "video:" + v3, crop:"fill", end_offset:"45", height: "$h",width: "$w", flags: "splice", start_offset: so_v3, end_offset:eo_v3},
				{overlay: {font_family: "impact", font_size:"24px", text: t_top_v3, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:30},
				{overlay: {font_family: "impact", font_size:"24px", text: t_bot_v3, text_align:"center"}, color:"rgb:FFF"},
					{flags: "layer_apply", gravity: "north", x:0, y:240},		
			{flags: "layer_apply"}
		]
	})

console.log(x);
console.log("Time took to generate url:", Date.now() - st, "ms");


