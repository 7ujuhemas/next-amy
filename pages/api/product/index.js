import nc from 'next-connect';
import ErrorHandler from "@app/src/handlers/error.handler";
import productController from '@app/src/controllers/product.controller';
import { ProductValidator } from '@app/src/validator/product.validator';

const handler = nc (ErrorHandler);

handler
.post(
    ProductValidator.create,
    async(req,res)=>{
    try {
        const [err , data] = await new productController({
            fields: req.body?.product
        })._create()

        if(err){

            res.statusCode(400)
            return res.json({
                error:true,
                message: err?.message
            })
        }
        return res.json({
            error:false,
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

.get(async(req,res)=>{
    try {
        const [err, {
            pagination,
            query,
            data
        }
        ] = await new ProductController({req})
                ._list();

        if(err) {
            res.status(400);
            return res.json({
                error:true,
                message: err?.message
            })
        }

        res.status(200)
        return res.json({
            pagination,
            query,
            data
        })
    } catch (err) {
        res.status(500)
        return res.json({
            error: true,
            status:500,
            message: err?.message
        })
    }

})

export default handler