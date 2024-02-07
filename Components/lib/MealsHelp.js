import { dummyMeals } from "../DummyDB/dummydb";
import Meals from "@/app/meals/page";


export default function MealsHelp({ ShareMeals , title }) {
  if (title === "share"){
    dummyMeals.push(ShareMeals);
  } 
   return <Meals NewMeals={dummyMeals} title="share" />;
}
