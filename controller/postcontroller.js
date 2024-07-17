import prisma from "../DB/db.config.js";
export const fatchPost=async(req,res)=>{
    const posts=await prisma.post.findMany({});
    return res.json({status:200,data:posts,message:"All records are here!"});
}
export const showPost=async(req,res)=>{
    const postID=req.params.id;
    const postOne=await prisma.post.findFirst({
        where:{
            id:Number(postID)
        }
    })
    return res.json({status:200,data:postOne,message:"You are successfully find the first record"});
}

export const createPost=async(req,res)=>{
    const {user_id,title,description}=req.body;
   
    const newPost=await prisma.post.create({
        data:{
           user_id:user_id,
           title:title,
           description:description
        }
    })
    return res.json({status:200,data:newPost,message:"post Created"});
}


//  for update the user 
export const updatePost=async(req,res)=>{
    const postId=req.params.id;
    const {user_id,title,description}=req.body;
   await prisma.post.update({
    where:{
        id:Number(postId)
    },
    data:{
        user_id:user_id,
        title:title,
        description:description
    }
   })
   return res.json({status:200,message:"post Updated Successfully"});

}

export const deletepost=async(req,res)=>{
    const postId=req.params.id;
    await prisma.post.delete({
        where:{
            id:Number(postId)
        }
    })
    return res.json({status:200,message:"delete record successfully"});
}


















