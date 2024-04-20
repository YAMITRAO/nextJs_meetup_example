import MeetupList from "@/components/meetups/MeetupList"
import { MongoClient } from "mongodb";
import Head from "next/head";

// import { getStaticProps } from "next/dist/build/templates/pages";

// let my_DATA = [ 
//     {
//         id:"m1",
//         title:"Our First Meetup",
//         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/PNY_Exterior_with_Rolls_Royce.jpg/1024px-PNY_Exterior_with_Rolls_Royce.jpg",
//         address:"India gate 345, new mart 12",
//         description: "this is our first meetup"
//     },
//     {
//         id:"m2",
//         title:"Our Second Meetup",
//         image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/PNY_Exterior_with_Rolls_Royce.jpg/1024px-PNY_Exterior_with_Rolls_Royce.jpg",
//         address:"India gate 345, new mart 12",
//         description: "this is our Second meetup"
//     }
// ]


const index = (props) => {
   
    
   
  return (
    <>
    <Head>
      <title>Meetup Page</title>
      <meta name="description" content="This is our meetup page. You can find all meets here" />
    </Head>
    <MeetupList meetups={props.myData}/>
    </>
    
  )
}

export async function getStaticProps(){
    const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const meetupsCollections = db.collection('meetups');
       const meetups = await meetupsCollections.find().toArray();
       client.close();

    return {
        props:{
            myData : meetups.map( (val) => ({
                title: val.title,
                address: val.address,
                description:val.description,
                image: val.image,
                id: val._id.toString(),

            }))
        },
        revalidate:1,
    }
}

export default index