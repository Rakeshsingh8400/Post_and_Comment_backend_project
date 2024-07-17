import prisma from "../DB/db.config.js";
export const fatchUser=async(req,res)=>{
    const users=await prisma.user.findMany({
       include:{
        post:{
            select:{
                title:true,
                description:true,
            }
        }
       }
    });
    return res.json({status:200,data:users,message:"All records are here!"});
}
export const showUser=async(req,res)=>{
    const usersID=req.params.id;
    const userOne=await prisma.user.findFirst({
        where:{
            id:Number(usersID)
        }
    })
    return res.json({status:200,data:userOne,message:"You are successfully find the first record"});
}

export const createuser=async(req,res)=>{
    const {name,email,password}=req.body;
    const finduser=await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(finduser){
        return res.json({status:400,message:"Email is already used!"});
    }
    const newUser=await prisma.user.create({
        data:{
            name:name,
            email:email,
            password:password
        }
    })
    return res.json({status:200,data:newUser,message:"User Created"});
}


//  for update the user 
export const updateUser=async(req,res)=>{
    const userId=req.params.id;
    const {name,email,password}=req.body;
   await prisma.user.update({
    where:{
        id:Number(userId)
    },
    data:{
        name:name,
        email:email,
        password:password
    }
   })
   return res.json({status:200,message:"User Updated Successfully"});

}

export const deleteuser=async(req,res)=>{
    const userId=req.params.id;
    await prisma.user.delete({
        where:{
            id:Number(userId)
        }
    })
    return res.json({status:200,message:"delete record successfully"});
}


















