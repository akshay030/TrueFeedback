import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";



export async function sendVerificationEmail (
    email:string,
    username:string,
    verifyCode:string,
):Promise<ApiResponse>{
    try {
            await resend.emails.send({
            from: 'True Feedback <onboarding@resend.dev>',
            to: email,
            subject: 'True Feedback | Verification code',
            react: VerificationEmail({username,otp:verifyCode})
          });
        return {success:true,message:"VerificationEmail sent successfully"}
        
    } catch (emailerror) {
        console.error("Error sending verification email",emailerror)
        return{ success:false,message:"Failed to send verification email"}        
    }
}