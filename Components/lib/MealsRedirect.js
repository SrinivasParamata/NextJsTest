import { redirect } from "next/navigation";

export default function MealsRedirect(){
   let data=redirect('/meals');

   return(<data />)
}