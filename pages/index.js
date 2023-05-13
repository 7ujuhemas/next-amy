//SSS (server side rendering)

import Image from 'next/image'
import { Inter } from 'next/font/google'
import axios from 'axios';
import CardComponent from '@app/src/components/card.component';

const inter = Inter({ subsets: ['latin'] })

export default function Home(props){
  // console.log(props.data);
  return(
    <div className={'h-screen w-full bg-white bg-fixed'}>
      <h1 className="text-primary">Home</h1>
      <CardComponent 
          id={1}
          thumbnail={'/googlelogo.png'}
          title={'Ini title'}
          description={'Ini deskripsi'}
        />

      <CardComponent
        id={2}
        thumbnail={'/googlelogo.png'}
        title={'Ini title child'}
        description={'Ini deskripsi child'}
      >
        <div>
          <h4>ini customer child</h4>

        </div>
      </CardComponent>
      {/* <pre>{JSON.stringify(props.data, null, 2)}</pre> */}
      {/* <div className={'mx-auto max-w-[900px]'}> */}
       

        {/* {
          props.data.map((item) =>{
            return (
              <div className={'text-black bg-gray-100 rounded-xl mb-4 p-4'}>
                <pre>{
                  JSON.stringify(item,null,2)}</pre>
              </div>
            )
          })
        } */}
      {/* </div> */}
    </div>
  )
}

//get static rendering

// export async function getStaticProps(ctx)

//ctx--> untuk mixed server dan client side rendering
export async function getServerSideProps(ctx){
  let query = ctx.query;
  let params = {
    page:1,
    limit:10,
  }
  if(typeof(query?.page)!=='undefined' && query?.page !== "" && query?.page !== null){
    Reflect.set(
      params,'page',query?.page
    )
  }
  // const data = [
  //   { id:1,
  //     content: "test"
  //   },
  //   { id:2,
  //     content: "test2"
  //   }
  // ]
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log({
      //   data: res.data,},'RESPONSE API');
      return res.data;
    })
    .catch((err) =>{
      // console.log(err,"RESPONSE API");
      return[];
    });

  return{
    props:{
      data:response
    }
  }
}
