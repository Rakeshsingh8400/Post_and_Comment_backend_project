import prisma from "../DB/db.config.js";
export const fatchComment=async(req,res)=>{
    const comments=await prisma.comment.findMany({});
    return res.json({status:200,data:comments,message:"All records are here!"});
}
export const showcomment=async(req,res)=>{
    const commentID=req.params.id;
    const commentOne=await prisma.comment.findFirst({
        where:{
            id:Number(commentID)
        }
    })
    return res.json({status:200,data:commentOne,message:"You are successfully find the first record"});
}

export const createComment=async(req,res)=>{
    const {user_id,post_id,comment}=req.body;
    // increase the comment counter
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                increment:1
            }
        }
    })
   
    const newcomment=await prisma.comment.create({
        data:{
           user_id:user_id,
           post_id:post_id,
           comment:comment
        }
    })
    return res.json({status:200,data:newcomment,message:"comment Created"});
}


//  for update the user 
export const updatecomment=async(req,res)=>{
    const commentId=req.params.id;
    const {user_id,post_id,comment}=req.body;
   await prisma.comment.update({
    where:{
        id:Number(commentId)
    },
    data:{
        user_id:user_id,
        post_id:post_id,
        comment:comment
    }
   })
   return res.json({status:200,message:"comment Updated Successfully"});

}

export const deletecomment=async(req,res)=>{
    const commentId=req.params.id;

    await prisma.comment.delete({
        where:{
            id:Number(commentId)
        }
    })
    await prisma.post.update({
        where:{
            id:Number(post_id)
        },
        data:{
            comment_count:{
                decrement:1
            }
        }
    })
    return res.json({status:200,message:"delete record successfully"});
}


















