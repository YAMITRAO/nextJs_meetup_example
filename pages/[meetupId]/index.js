import MeetupDetails from "@/components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const index = (props) => {

  return (
    <>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description}/>
    </Head>
    <MeetupDetails
    image={props.meetupData.image}
    title={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
    />
    </>
    
  )
}

export async function getStaticPaths(){
  const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const meetupsCollections = db.collection('meetups');
       const meetups = await meetupsCollections.find({}, {_id: 1}).toArray();
       client.close();

    return{
      fallback: false,
        paths: meetups.map( (val) => ({
          params:{ meetupId: val._id.toString()}
        }))
    }
}



export async function getStaticProps(context){
    const meetupId = context.params.meetupId;
    // console.log(meetupId);
    const myId = new ObjectId(meetupId);

    const client = await MongoClient.connect("mongodb+srv://goals2k24:YADAV12236@cluster0.tl7veys.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
       const db = client.db();
       const meetupsCollections = db.collection('meetups');
       const selectedMeetup = await meetupsCollections.findOne({_id: myId});
       client.close();
    return {
        props:{
            meetupData: {
              id: selectedMeetup._id.toString(),
              title: selectedMeetup.title,
              image: selectedMeetup.image,
              adress: selectedMeetup.address,
              description: selectedMeetup.description,

            }
        }
    }
}
export default index