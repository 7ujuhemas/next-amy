import nc from 'next-connect';
import ErrorHandler from "@app/src/handlers/error.handler";
import productController from '@app/src/controllers/product.controller';
import { ProductValidator } from '@app/src/validator/product.validator';

const handler = nc (ErrorHandler);

handler
.get(async(req,res)=>{
    try {
        // console.log(req,'REQ')
        let { id } = req.query;

        const [err,data] = await new productController({
            key:"id",
            value:id
        })._detail()

        if(err){
            res.status(400)
            return res.json({
                error:true,
                status:400,
                message:err?.message
            })
        }

        if(!data){
            res.status(404)
            return res.json({
                error:true,
                status:404,
                message: "Product Not Found"
            })

        }

        res.status(200)
        return res.json({
            error:false,
            status:200,
            message: "OK",
            data:data
        })
        
    } catch (err) {
        return res.json({
            error: true,
            ststus: 500,
            message: err?.message
        })
    }

})

.delete(async(req,res)=>{
    try {
        const [err,data] = await new productController({
            key:"id",
            value: req.query?.id
        })._delete()

        if(err){
            console.log(err);
            res.status(400)
            return res.json({
                error:true,
                status:400,
                message:err?.message
            })
        }

        if(!data){
            res.status(404)
            return res.json({
                error:true,
                status:404,
                message:"Product not found"
            })

        }

        res.status(200)
        return res.json({
            error:false,
            status:200,
            message:"Delete berhasil"
           
        });

    } catch (err) {
        res.status(500)
        return res.json({
            error:true,
            message:err?.message
        })
    }
})

export default handler