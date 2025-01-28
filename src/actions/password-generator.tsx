"use server"

import { isAlphabetic } from "@/utils/utility";

export const generatePassword = async (passwordLength: number) => {
            
         if (isAlphabetic(passwordLength) ) {
            
            return {
                message: "Password length must be a number"
            }
        }else if (passwordLength < 6 ) {
            return {
                message: "Password length is to short"
            }
        }

        try {

          const response = await fetch(`https://flask-api-git-main-fullstack-engineers-projects.vercel.app/password_generator?len=${passwordLength}`)
          const receivedPassword = await response.json()
          console.log(receivedPassword);
          return {
            message: "",
            passwordData: receivedPassword.password
          }
            
        } catch (error) {
            console.log(error);
            
            return {
                message: "some error happened in the backend",
                
            }
        }         
 }