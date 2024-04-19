import NewMeetupForm from "@/components/meetups/NewMeetupForm"
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
    <NewMeetupForm onAddMeetup = {newMeetupHandler}/>
  )
}

export default NewMeetUpPage;