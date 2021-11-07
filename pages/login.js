import React, {useEffect} from 'react'
import tw from "tailwind-styled-components/dist/tailwind"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import {auth, provider} from '../firebase'


const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if(user){
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
            <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png"/>
            <Title>Login to access your account</Title>
            <DriveImage src="https://i.ibb.co/CsV9RYZ/login-image.png"/>
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col bg-gray-200 h-screen w-screen p-4 overflow-y-hidden
`

const UberLogo = tw.img`
    h-6 w-auto object-contain self-start my-4   
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const DriveImage = tw.img`
    object-contain w-full overflow-y-scroll
`

const SignInButton = tw.button`
    bg-black text-white py-4 mt-8 self-center w-full transform hover:scale-95
`
