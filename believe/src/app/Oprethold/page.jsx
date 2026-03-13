// import { cookies } from "next/headers";
// import CreateActivityForm from "./components/CreateActivityForm";
// import { getUserById } from "@/dal/user";

// export default async function Createpage() {

//   const cookieStore = await cookies();
//   const role = cookieStore.get("role")?.value;
//   const userId = cookieStore.get("userId")?.value;

//   const user = await getUserById();

//   return (
//     <>
//       <h1>Opret hold</h1>
//       <CreateActivityForm userId={userId}  userFirstname={user.firstname}  userLastname={user.lastname}/>
//     </>
//   );
// }