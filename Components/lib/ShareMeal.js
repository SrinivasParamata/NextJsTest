'use server';

import slugify from "slugify";
import xss from "xss";
import fs from 'node:fs';
import { dummyMeals } from "../DummyDB/dummydb";
import  MealsHelp  from "./MealsHelp";

export default async function ShareMeal(formData){

    
    const meal = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions:xss(formData.get("instructions")),
      creator: formData.get("name"),
      image : formData.get("image"),
      creator_email : formData.get("email"),
      slug : slugify( formData.get("title") ,{ lower : true} )

    };

    const extension = meal.image.name.split('.').pop();
    const newFileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images${newFileName}`);

    const buffered = await meal.image.arrayBuffer();

    stream.write(Buffer.from(buffered) , (error) => {
        if ( error){
            throw new Error(" failed to store an image");
        }
    })

    meal.image = `/image/${newFileName}`;


    let NewMeal = {
      id: dummyMeals.length + 1,
      title: meal.title,
      slug: meal.slug,
      image: meal.image,
      summary: meal.summary,
      instructions: meal.instructions,
      creator: meal.creator,
      creator_email: meal.creator_email,
    };


    
    return <MealsHelp ShareMeals={NewMeal} title="share" />;


}