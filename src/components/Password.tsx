"use client"

import { generatePassword } from "@/actions/password-generator";
import { ChangeEvent, useState } from "react";
import { useFormState } from "react-dom";

export type PasswordType = {
    passwordName: string
}

function Password() {
    const [passwordLength, setPasswordLength] = useState(0)
    const [formState, action ] = useFormState(generatePassword.bind(null, passwordLength ), { message: "", passwordData: ""})

    const handleChangePasswordLength = (e:ChangeEvent<HTMLInputElement>) => { 
            const value = e.target.value
            setPasswordLength(Number(value))
     }

    return (
        <div className="flex flex-col gap-2  justify-center items-center mt-4 w-96 h-72 rounded-md p-4 bg-white">
            <form className="flex flex-col gap-4  text-black" action={action}>
                <label className="m-auto text-xl" htmlFor="password-length">Enter the length of the password.</label>
                <input onChange={handleChangePasswordLength}  max={99} maxLength={2}  className="w-24 text-3xl m-auto px-3  p-2 border rounded-md " type="text" name="password-length" id="" />
                <button className="bg-blue-400 m-auto p-2 w-fit rounded " type="submit">Generate</button>
            </form>
            <p className="mt-8 p-4 w-fit h-16 text-red-700 text-md border shadow-md rounded-md">{formState.passwordData}</p>
           {formState?.message &&  <p className="p-2 text-black w-fit bg-red-300 rounded-md">{formState?.message}</p>}
        </div>
    );
}

export default Password;