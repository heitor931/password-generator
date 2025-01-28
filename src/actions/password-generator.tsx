"use server"

import { isAlphabetic } from "@/utils/utility";
import { exec } from "child_process";


export const generatePassword = (passwordLength: number) => {
            
         if (isAlphabetic(passwordLength) ) {
            console.log(passwordLength);
            
            return {
                message: "Password length must be a number"
            }
        }else if (passwordLength < 6 ) {
            return {
                message: "Password length is to short"
            }
        }

        try {

            exec(`python main.py ${passwordLength}`, {cwd: "/src/password_generator/"}, (error, stdout, stderr) => {

                if (error) {
                    console.error(error);
                    return {
                        message: "Something went wrong"
                    }
                }
                if (stderr) {
                    console.log(`Stdrr: ${stderr}`);
                    return {
                        message: "Something went wrong"
                    }
                }
                console.log(stdout);
            }  )
            

        } catch (error) {
            console.log(error);
            
            
        }
            
            

 }