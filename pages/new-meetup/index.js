import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import Head from "next/head";
import { useRouter } from "next/router";


const NewMeetUpPage = () => {
  const router = useRouter();
    const newMeetupHandler = async (newMeetData) => {
        console.log(newMeetData);
        const response = await fetch("/api/new-meetup",{
          method:"POST",
          body: JSON.stringify(newMeetData),
          headers:{
            'Content-type' :"application/json"
          }
        })

        const data = await response.json();
        console.log(data);
        router.push("/");

    }
  return (
    <>
    <Head>
      <title>Add New Meets</title>
      <meta name="description" content="add your new meets here by filling the form"/>
    </Head>
    <NewMeetupForm onAddMeetup = {newMeetupHandler}/>
    </>
    
    
  )
}

export default NewMeetUpPage;